import { Attribute, CellInteraction, ColumnData, ColumnDataExtended } from '@kleeen/types';
import { Column, TableCellProps, TableHeaderProps, TableProps } from 'react-virtualized';
import {
  ColumnsMapFunctionArgs,
  GetHeaderRenderArgs,
  GetSimpleTablePropsArgs,
  GetSortablePropsArgs,
  SortableTableProps,
  defaultProps,
  initialModelSettings,
} from './virtualized-table-props.model';
import { getCellFormatResults, useInfiniteScrollFunctions } from './utils';
import {
  useAvailableFiltersByWorkflow,
  useCrosslinkingInteraction,
  useIsInvestigation,
  useLocalStorage,
  useTheme,
  useUserInfo,
} from '@kleeen/react/hooks';

import CellRenderer from '../CellRenderer';
import { ListingModalSettings } from '@kleeen/react/components';
import { MuiVirtualizedTableProps } from '../VirtualScroll.model';
import ReactDOM from 'react-dom';
import { arrayMove } from 'react-sortable-hoc';
import { bem } from './VirtualizedTable';
import classnames from 'classnames';
import { get } from 'lodash';
import { getCellInteraction } from '@kleeen/frontend/utils';
import { getRowClassName } from '../GetRowClassName';
import { headerRenderer } from '../HeaderRenderer';
import { overwriteFormat } from '@kleeen/common/utils';
import { useState } from 'react';
import { useStyles } from '../VirtualizedTable.style';
import { useSyncColumnOrder } from '../helpers';

export const useVirtualizedTable = ({
  actions,
  amendCellUpdate,
  attributes,
  classes,
  columns,
  columnWidth = 178,
  deleteContainer,
  deleteProcess,
  editingCell,
  enableEditMode,
  getMoreRows,
  handleAnchorClick,
  handleChange,
  hasActions,
  headerHeight,
  isDeletable,
  isLoading,
  localization,
  onCellClickFunction,
  onCellContextMenuFunction,
  onRowClick,
  onSort,
  onSortRow,
  order,
  orderBy,
  orderColumnName,
  rowHeight,
  sortable,
  sortableColumns,
  taskName,
  toggleDelete,
  translate,
  triggerCustomAction,
  typeOf,
  widgetId,
  ...tableProps
}: MuiVirtualizedTableProps) => {
  const { availableFilters, hasFilters } = useAvailableFiltersByWorkflow<Attribute>(attributes);
  const { crosslinkingInteraction: linkInteraction } = useCrosslinkingInteraction();
  const isInvestigationPage = useIsInvestigation();
  const minWidth = columnWidth * columns.length;

  const [listingModalSettings, setIsListingModalOpen] = useState<ListingModalSettings>(initialModelSettings);
  const [columnsOrderChanged, setColumnsOrderChanged] = useState(false);
  const displayColumnAttribute = attributes.find((attribute) => attribute.isDisplayValue);
  const { themeClass } = useTheme();
  const [inputValues, setInputValues] = useState({});

  // TODO: @marimba take the storage logic out of the component.
  const _user = useUserInfo();
  const userName = _user?.userInfo?.username;
  const keyOfLocalStorage = userName ? `order-of-columns-${userName}-${widgetId}` : '';
  const { localStorageValue: columnsState, setLocalStorageValue: setColumnsState } = useLocalStorage<
    ColumnData[]
  >(keyOfLocalStorage, columns || []);
  const { infiniteLoaderProps, isLoadingMoreRows } = useInfiniteScrollFunctions({
    columns,
    getMoreRows,
    pause: isLoading,
  });

  function handleOnColumnSort(oldIndex: number, newIndex: number): void {
    setColumnsState(arrayMove(columnsState, oldIndex, newIndex));
    setColumnsOrderChanged(!columnsOrderChanged);
  }

  function setInputValue(index: string, value: string | number): void {
    setInputValues({
      ...inputValues,
      [index]: value,
    });
  }

  function closeShowMoreModal(): void {
    setIsListingModalOpen(initialModelSettings);
  }

  function _sortRow({ newIndex, oldIndex }: { newIndex: number; oldIndex: number }): void {
    if (newIndex === oldIndex) return;

    onSortRow?.(newIndex, oldIndex);
  }

  function openShowMoreModal(settings: ListingModalSettings): void {
    setIsListingModalOpen(settings);
  }

  const { isSyncingColumns } = useSyncColumnOrder({ columnsState, columns, setColumnsState, userName });

  const rowClassName = ({ index }: { index: number }) =>
    getRowClassName({
      classes,
      deleteContainer,
      index,
      onRowClick,
      rowGetter: tableProps.rowGetter,
    });

  const gridStyle = { direction: 'inherit' };
  const headerStyles = useStyles();

  const sortableTableProps = {
    getContainer: (wrappedInstance: any) => ReactDOM.findDOMNode(wrappedInstance.Grid) as any, //TODO: @marimba deprecated findDOMNode
    gridStyle,
    headerHeight: defaultProps.headerHeight,
    overscanRowCount: 3,
    rowClassName,
    useDragHandle: true,
    rowHeight: defaultProps.rowHeight,
  };

  const commonCellProps = {
    actions,
    amendCellUpdate,
    classes,
    deleteContainer,
    deleteProcess,
    displayColumnAttribute,
    editingCell,
    hasActions,
    isDeletable,
    localization,
    openShowMoreModal,
    taskName,
    toggleDelete,
    triggerCustomAction,
    typeOf,
    widgetId,
  };

  const CellRender =
    (columnsForCell: ColumnDataExtended[], index: number, cellInteraction: CellInteraction) =>
    ({ cellData, columnIndex, rowData }: TableCellProps) => {
      const cellFormatResults = getCellFormatResults(columnsForCell[columnIndex], cellData);
      const isFirstColumn = (index || columnIndex) === 0;
      return (
        <CellRenderer
          {...commonCellProps}
          cellData={cellData}
          cellFormatResults={cellFormatResults}
          cellInteraction={cellInteraction}
          columnIndex={index || columnIndex}
          columns={columnsForCell}
          draggable={sortable && isFirstColumn}
          rowData={rowData}
          {...tableProps}
        />
      );
    };

  const headerRendererCommonProps = { attributes, handleChange, hasActions, onSort, order, orderBy };
  const getHeaderRender =
    ({
      index,
      withInputValues,
      newAttributes,
    }: GetHeaderRenderArgs): ((headerProps: TableHeaderProps) => JSX.Element) =>
    (headerProps: TableHeaderProps) =>
      headerRenderer({
        ...headerProps,
        ...headerRendererCommonProps,
        ...(newAttributes ? { newAttributes } : {}),
        ...(withInputValues ? { inputValues, setInputValue } : {}),
        columnIndex: index,
        isLoading: isLoading || isLoadingMoreRows,
      });

  const getSortableTableProps = ({
    extraProps,
    height,
    tableClassName,
    width,
  }: GetSortablePropsArgs): GetSortablePropsArgs & SortableTableProps & MuiVirtualizedTableProps => ({
    className: tableClassName,
    height,
    helperClass: `${themeClass} dragging-row-helper-styles`,
    width: minWidth < width ? width : minWidth,
    ...extraProps,
    ...sortableTableProps,
    ...tableProps,
  });

  const getSimpleTableProps = ({
    height,
    onRowsRendered,
    registerChild,
    tableClassName,
    width,
  }: GetSimpleTablePropsArgs): TableProps => ({
    className: tableClassName,
    gridStyle,
    headerHeight: defaultProps.headerHeight,
    height,
    onRowsRendered,
    overscanRowCount: 3,
    ref: registerChild,
    rowClassName,
    rowHeight: defaultProps.rowHeight,
    width: minWidth < width ? width : minWidth,
    ...tableProps,
  });

  const getColumnsProps = (dataKey: string, width: number, other?: Record<string, unknown>) => ({
    className: classnames(classes.flexContainer, `${bem}--column`),
    dataKey,
    headerClassName: classes.tableHeader,
    width,
    key: dataKey,
    ...other,
  });

  const columnsMapFunction =
    ({ columnsForCell, newAttributes, width, withIndex, withInputValues }: ColumnsMapFunctionArgs) =>
    (
      {
        cellInteraction,
        dataKey,
        ...other
      }: { dataKey: string; cellInteraction: CellInteraction; other?: Record<string, unknown> },
      index: number,
    ) =>
      (
        <Column
          {...getColumnsProps(dataKey, width, other as Record<string, unknown>)}
          headerRenderer={getHeaderRender({ index, withInputValues, newAttributes })}
          cellRenderer={CellRender(columnsForCell, withIndex ? index : null, {
            ...cellInteraction,
            onCellClickFunction,
            onCellContextMenuFunction,
            handleAnchorClick,
          })}
        />
      );

  const getColumns = (columnsData: ColumnData[]): ColumnDataExtended[] => {
    return columnsData.map((column) => ({
      ...column,
      cellInteraction: getCellInteraction({
        column,
        availableFilters,
        hasFilters,
        isInvestigationPage,
        linkInteraction,
      }),
      format: overwriteFormat(
        get(column.props, `entity.format[${column.attr.name}]`, null),
        column.attr.format,
      ),
    }));
  };

  return {
    _sortRow,
    classes,
    closeShowMoreModal,
    columns: getColumns(columns),
    columnsMapFunction,
    columnsState: getColumns(columnsState),
    getSimpleTableProps,
    getSortableTableProps,
    handleOnColumnSort,
    headerStyles,
    infiniteLoaderProps,
    isLoading,
    isLoadingMoreRows,
    isSyncingColumns,
    listingModalSettings,
    sortable,
    sortableColumns,
    themeClass,
  };
};

import { Attribute, ColumnDataExtended } from '@kleeen/types';

import { IndexRange } from 'react-virtualized';

export interface ColumnsMapFunctionArgs {
  columnsForCell: ColumnDataExtended[];
  newAttributes?: Attribute[];
  width: number;
  withIndex?: boolean;
  withInputValues?: boolean;
}

export const defaultProps = {
  headerHeight: 42,
  rowHeight: 34,
};

export const configContainer = {
  withRef: true,
};
export interface GetHeaderRenderArgs {
  index: number;
  isLoading?: boolean;
  newAttributes: Attribute[];
  withInputValues: boolean;
}

export interface GetSimpleTablePropsArgs {
  height: number;
  onRowsRendered: (params: IndexRange) => void;
  registerChild: (registeredChild: any) => void;
  tableClassName: string;
  width: number;
}
export interface GetSortablePropsArgs {
  extraProps: any;
  height: number;
  tableClassName: string;
  width: number;
}

export const initialModelSettings = {
  attribute: null,
  columnLabel: '',
  data: [],
  format: null,
  isOpen: false,
  rowDisplayValue: '',
};

export type setVirtualizedTableInputValue = (index: string, value: number | string) => void;

export interface SortableTableProps {
  getContainer: (wrappedInstance: any) => Element | Text;
  gridStyle: {
    direction: string;
  };
  headerHeight: number;
  overscanRowCount: number;
  rowClassName: ({ index }: { index: any }) => string;
  rowHeight: number;
  useDragHandle: boolean;
}

import { differenceWith, equals } from 'ramda';

import { ColumnData } from '@kleeen/types';
import { parseStringifyToJson } from '@kleeen/common/utils';
import { useEffect } from 'react';

/**
 * Syncs the local storage column order with the one in the props.
 */
export function useSyncColumnOrder({ columnsState, columns, setColumnsState, userName }) {
  let hasDifferences = false;
  try {
    hasDifferences = !equals(columnsState, parseStringifyToJson({ defaultValue: columns }));
  } catch (error) {
    console.error('Error syncing columns.', error);
  }

  useEffect(() => {
    if (userName && hasDifferences) {
      const compareStateColumns = (columnA: ColumnData, columnB: ColumnData) =>
        columnA?.attr?.id === columnB?.attr?.id;

      const deletedColumns = differenceWith(compareStateColumns, columnsState, columns);
      const addedColumns = differenceWith(compareStateColumns, columns, columnsState);

      const newColumnsState = columnsState.filter((columnA) =>
        deletedColumns.every((columnB) => !compareStateColumns(columnA, columnB)),
      );

      setColumnsState([...newColumnsState, ...addedColumns]);
    }
  }, [userName, hasDifferences]);

  return {
    isSyncingColumns: !userName || columnsState.length !== columns.length,
  };
}

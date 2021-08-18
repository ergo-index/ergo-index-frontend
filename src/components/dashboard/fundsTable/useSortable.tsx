import { useMemo, useState } from 'react';
import { FundSummaryRow } from '../../models/models';

type Direction = "ascending" | "descending"

export interface SortConfig {
  key: keyof FundSummaryRow,
  direction?: Direction
}

/**
* Hook to sort FundSummaryRows by a given key (column) in a given direction (ascending or descending), which
 * are both specified in the config.
 *
 * @param items all fund summaries, which will be sorted
 * @param config the key (column) to sort by and the direction (ascending or descending) to sort in
 * @return object containing:
 *
 *
 * 1) an array of the sorted FundSummaryRows
 *
 * 2) a function that changes the key (column) by which the rows are sorted or that, if passed the current key,
 * changes the direction by which the rows are sorted
 *
 * 3) a function that returns the class name of "ascending" or "descending" depending which direciton the key is being sorted on.
 *    If called on a key that isn't being sorted on, it returns undefined
 */
export const useSortableData = (items: FundSummaryRow[], config: SortConfig) => {
  console.log("sortable hook run");


  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = (() => {
    let sortableItems = [...items];
    sortableItems.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    return sortableItems
  })()

  const setSortKeyOrChangeDirection = (key: keyof FundSummaryRow) => {
    let direction: Direction = "ascending"
    if (key === sortConfig.key) {
      direction = sortConfig.direction === "ascending" ? "descending" : "ascending";
    }
    setSortConfig({ key, direction });
  }

  const getClassNamesFor = (name: keyof FundSummaryRow) => (
    sortConfig.key === name ? sortConfig.direction : undefined
  );

  return { rows: sortedItems, requestSort: setSortKeyOrChangeDirection, sortConfig, getClassNamesFor };
}

import React, { useMemo, useState } from 'react';

import { FundSummaryRow } from '../portfolio/models';

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
 * 3) a config that reflects the current key (column) by which the rows are sorted
 */
export const useSortableData = (items: FundSummaryRow[], config: SortConfig) => {

  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
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
  }, [items, sortConfig]);

  const setSortKeyOrChangeDirection = (key: keyof FundSummaryRow) => {
    let direction: Direction = "ascending"
    if (key == sortConfig.key) {
      direction = sortConfig.direction === "ascending" ? "descending" : "ascending";
    }
    setSortConfig({ key, direction });
  };

  return { rows: sortedItems, setSortKeyOrChangeDirection, sortConfig };
}

import React from 'react';
import { FundSummaryRow } from '../portfolio/models';

type Direction = "ascending" | "descending"

export interface SortConfig {
  key: keyof FundSummaryRow,
  direction?: Direction
}

/**
 * Returns all rows sorted by whatever column you want them sorted by
 * Returns function requestSort that you can call to change col we are sorting off of ex) requestSort(newColName)
 * @param items all fund summaries
 * @param config the property you want to sort off of & direction of sort
 */
export const useSortableData = (items: FundSummaryRow[], config: SortConfig) => {

  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
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

  const requestSort = (key: keyof FundSummaryRow) => {
    let direction: Direction = "ascending"
    if (key == sortConfig.key) {
      direction = sortConfig.direction === "ascending" ? "descending" : "ascending";
    }
    setSortConfig({ key, direction });
  }

  return { rows: sortedItems, requestSort, sortConfig };
}

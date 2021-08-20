import { useMemo, useState } from 'react';
import { FundSummaryRow } from '../../models/models';

export type Direction = "ascending" | "descending";

export interface SortConfig<T> {
  key: keyof T,
  direction?: Direction
}

/**
* Hook to sort an array by a given key in a given direction (ascending or descending), which
 * are both specified in the config.
 *
 * @param arr the array of items to sort
 * @param config the key to sort by and the direction (ascending or descending) to sort in
 * @return object containing:
 *
 *
 * 1) the given array, sorted in the given direction
 *
 * 2) a function that changes the key by which the array is sorted or that, if passed the current key,
 * changes the direction (ascending/descending) by which the array is sorted
 *
 * 3) a function that takes a key and returns the Direction that the given key is being sorted on.
 * Returns undefined for keys that are not currently being sorted
 */
export const useSortableData = <T extends unknown>(arr: T[], config: SortConfig<T>) => {

  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...arr];
    sortableItems.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    return sortableItems;
  }, [arr, sortConfig]);

  const setSortKeyOrChangeDirection = (key: keyof T) => {
    let direction: Direction = 'ascending';
    if (key === sortConfig.key) {
      direction = sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
    }
    setSortConfig({ key, direction });
  };

  const getDirectionForKey = (name: keyof FundSummaryRow) => (
    sortConfig.key === name ? sortConfig.direction : undefined
  );

  return { sortedItems, setSortKeyOrChangeDirection, getDirectionForKey };
};

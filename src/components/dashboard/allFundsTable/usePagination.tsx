import  { useState } from "react";

/**
* Hook for breaking an array into smaller subarrays and navigating between those subarrays.
 *
 * @param arr the array to break into subarrays
 * @param itemsPerPage the length of each subarray
 * @return object containing:
 *
 *
 * 1) a function to increment page number
 *
 * 2) a function to decrement page number
 *
 * 3) a function to jump to any page number
 * 
 * 4) a function that returns only the array items on the current page
 * 
 * 5) the current page (number)
 * 
 * 6) the highest page that can be jumped to (number)
 */

export const usePagination = <T extends unknown>(arr: T[], itemsPerPage: number) => {

    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.max(Math.ceil(arr.length / itemsPerPage), 1);

    const getCurrentItems = () => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return arr.slice(begin, end); // returns shallow copy
    };

    const nextPage = () => {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    };

    const prevPage = () => {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    };

    const jumpToPage = (page: number) => {
        const pageNumber = Math.min(Math.max(1, page), maxPage);
        setCurrentPage(pageNumber);
    };

    return { nextPage, prevPage, jumpToPage, getCurrentItems, currentPage, maxPage };
};

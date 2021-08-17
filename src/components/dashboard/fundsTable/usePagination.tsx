import  { useState } from "react";
import { FundSummaryRow } from '../../models/models';

/**
* Hook for paginating rows. Can be used on any set of rows in any table to paginate (assuming you update TS types)
 *
 * @param rows all fund summaries, which will be paginated
 * @param itemsPerPage the items you want on each page
 * @return object containing:
 *
 *
 * 1) a function to increment page number
 *
 * 2) a function to decrement page number
 *
 * 3) a function to jump to any page number
 * 
 * 4) a function that returns only the rows on current page
 * 
 * 5) the current page
 * 
 * 6) the max page
 */
export const usePagination = (rows: FundSummaryRow[], itemsPerPage: number) => {

    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.max(Math.ceil(rows.length / itemsPerPage), 1);

    function currentData() {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return rows.slice(begin, end); // returns shallow copy
    }

    function next() {        
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    }

    function prev() {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    }

    function jump(page: number) {
        const pageNumber = Math.min(Math.max(1, page), maxPage);
        setCurrentPage(pageNumber);
    }
    return { next, prev, jump, currentData, currentPage, maxPage };
}
import React, { Dispatch, SetStateAction } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import './Pagination.css';
import { SelectMenu } from './SelectMenu';

interface PaginationProps {
  currentPage: number
  rowsPerPage: number
  totalRows: number
  prev: () => void
  next: () => void
  jump: (page: number) => void
  maxPage: number
  setRowsPerPage: Dispatch<SetStateAction<number>>
}
const Pagination = (
  {
    currentPage,
    rowsPerPage,
    totalRows,
    prev,
    next,
    jump,
    maxPage,
    setRowsPerPage,
  }: PaginationProps,
) => {
  const ellipses = generateEllipses(currentPage, maxPage);

  const renderEllipses = () => (
    ellipses.map((val, index) => {
      if (val === '...') {
        return <span key={index} className="pagination-cell text-center relative py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 select-none"> ...</span>;
      }

      if (val === currentPage) {
        return (
          <a
            onClick={() => jump(parseInt(`${val}`))}
            aria-current="page"
            key={index}
            className="pagination-cell text-center z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative py-2 border text-sm font-medium select-none"
          >
            {val}
          </a>
        );
      }

      return (
        <a
          onClick={() => jump(parseInt(`${val}`))}
          key={index}
          className="pagination-cell text-center bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative py-2 border text-sm font-medium select-none"
        >
          {val}
        </a>
      );
    })
  );

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-0">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          onClick={prev}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          onClick={next}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="pagination-count text-sm text-gray-700">
            Showing
            {' '}
            <span className="font-medium">{totalRows ? rowsPerPage * currentPage - rowsPerPage + 1 : 0}</span>
            {' '}
            to
            <span className="font-medium">{Math.min(rowsPerPage * currentPage, totalRows)}</span>
            {' '}
            of
            {' '}
            <span className="font-medium">{totalRows}</span>
            {' '}
            results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              onClick={prev}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 select-none"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {renderEllipses()}
            <a
              onClick={next}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 select-none"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>

        </div>
        <div>
          <div className="text-sm hidden text-gray-700 md:inline-block mr-2">
            Show Rows
          </div>
          <SelectMenu setRowsPerPage={setRowsPerPage} jump={jump} />
        </div>
      </div>
    </div>
  );
};

const generateEllipses = (current: number, last: number): (string | number)[] => {
  // Return 1 through last if the last page is <= 5
  if (last <= 5) {
    const ans = [];
    for (let i = 1; i <= last; i++) {
      ans.push(i);
    }
    return ans;
  }

  // Make a range with the first page, last page, and current page in between
  // If the current page is not far enough in between the first and last pages, then add extra pages to keep width fixed
  const range = []; const
    rangeWithDots = [];
  range.push(1);
  if (current < 3) {
    range.push(2);
    range.push(3);
  }
  if (current >= 3 && last - current >= 2) range.push(current);
  if (last - current < 2) {
    range.push(last - 2);
    range.push(last - 1);
  }
  range.push(last);

  // Add in the ellipses when there's a gap of more than 2 pages
  let l;
  for (const i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
};

export default Pagination;

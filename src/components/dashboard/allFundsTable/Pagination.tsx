/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { SelectMenu } from './SelectMenu'

// ryan make a proptypes interface for this im just not going to do it
export function Pagination({ currentPage, rowsPerPage, totalRows, prev, next, maxPage, jump, setRowsPerPage }: any) {
    
    const elipses = generateElipses(currentPage, maxPage)

    {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */ }
    const renderElipses = () => (
        elipses.map((val, index) => {

            if (val === "...") {
                return <span key={index} className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ...</span>
            }

            else if (val === currentPage) {
                return (<a
                    onClick={() => jump(val)}
                    aria-current="page"
                    key={index} 
                    className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                    {val}
                </a>)
            }

            else {
                return (<a
                    onClick={() => jump(val)}
                    key={index} 
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                    {val}
                </a>)
            }
        }
        )
    )

    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-0">
            <div className="flex-1 flex justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{totalRows ? rowsPerPage * currentPage - rowsPerPage + 1: 0}</span> to <span className="font-medium">{Math.min(rowsPerPage * currentPage, totalRows)}</span> of{' '}
                        <span className="font-medium">{totalRows}</span> results
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <a
                            onClick={prev}
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                        {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                        {renderElipses()}
                        <a
                            onClick={next}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </nav>

                </div>
                <div>
                    <div className={'text-sm hidden text-gray-700 md:inline-block mr-2'}>
                        Show Rows
                    </div>
                    <SelectMenu setRowsPerPage={setRowsPerPage} />
                </div>
            </div>
        </div>
    )
}



function generateElipses(c: number, m: number) {

    if (m <= 5) {
        let ans = []
        for (let i = 1; i <= m; i++) {
            ans.push(i)
        }
        return ans
    }

    var current = c,
        last = m,
        delta = 1,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i === 1 || i === last || (i >= left && i < right)) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push("...");
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
}
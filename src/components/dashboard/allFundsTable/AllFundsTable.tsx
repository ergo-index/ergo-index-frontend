import { useState } from 'react';

import {FundSummaryRow, fundTableHeaders} from '../../../models/models';
import { useSortableData } from './useSortable';
import { usePagination } from './usePagination';
import { useGetFundSummariesQuery } from '../../../state/server/FundsDuck';
import Pagination from './Pagination';

export default function AllFundsTable() {
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const { data, isLoading, isError } = useGetFundSummariesQuery(undefined, {})

    const { getSortedItems, setSortKeyOrChangeDirection, getDirectionForKey } = useSortableData(data || [] as FundSummaryRow[], { key: "id", direction: "ascending" });
    const { nextPage, prevPage, jumpToPage, getCurrentItems, currentPage, maxPage } = usePagination(getSortedItems(), rowsPerPage);

    const renderHeaders = () => (
        fundTableHeaders.map(
            ({ sortID, name }) => (
                <th
                    key={name}
                    scope="col"
                    onClick={() => {
                      setSortKeyOrChangeDirection(sortID)
                        jumpToPage(1)
                    }}
                    className={"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hover:text-black cursor-pointer " + getDirectionForKey(sortID)}
                >
                    {name}
                </th>
            )
        )
    )

    const renderBody = () => (
        getCurrentItems().map((fund, index) => (
            <tr key={index} >
                {Object.values(fund).map((val, index) => (
                    <td key={index} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{val}</td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                    </a>
                </td>
            </tr>
        ))
    );

    return (
        <>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        {
                                            renderHeaders()
                                        }

                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {renderBody()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
            <Pagination
                currentPage={currentPage}
                rowsPerPage={rowsPerPage}
                totalRows={getSortedItems().length}
                prev={prevPage}
                next={nextPage}
                jump={jumpToPage}
                maxPage={maxPage}
                setRowsPerPage={setRowsPerPage}
            />
        </>
    )
}

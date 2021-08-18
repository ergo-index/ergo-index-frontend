import { useSortableData } from './useSortable';
import { FundSummaryRow, fundTableHeaders, FundModel } from '../../models/models';
import '../Dashboard.scss'
import { usePagination } from './usePagination';
import { useQuery } from 'react-query'
import { fundSummarySelector, getFunds } from '../../../api/fundsApi';

export const FundsTable = () => {

  // https://tkdodo.eu/blog/react-query-and-type-script
  const { isLoading, data } = useQuery<FundModel[], Error, FundSummaryRow[]>('funds', getFunds, {
    select: fundSummarySelector,
  })

  const { rows, requestSort, getClassNamesFor } = useSortableData(data ? data : [], { key: "id", direction: "ascending" });
  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(rows, 20)


  const renderHeaders = () => (
    <div className="headers-container">
      {fundTableHeaders.map(({ sortID, name }, index) => (
        <div key={index}
          onClick={() => {
            requestSort(sortID)
            jump(1)
          }}
          className={getClassNamesFor(sortID)}
          style={{ cursor: "pointer" }}
        >
          {name}
        </div>
      ))}
    </div>
  );

  const renderBody = () => (
    <>
      {
        currentData().map((fund, index) => (
          <div className="row-container" key={index}>
            {
              Object.values(fund).map((val, index) => (
                <div key={index} >
                  {val}
                </div>
              ))
            }
          </div>
        ))
      }
    </>
  );

  console.log("Table rendered");

  return (
    <div className="portfolio__container">
      <div className="portfolio__table">
        <h1 className="portfolio__header">All Funds</h1>
        {renderHeaders()}
        <h1>{isLoading ? "Loading...  I added fake latency" : ""}</h1>
        {renderBody()}
      </div>
      <div>Page {currentPage} </div>
      <div>Max Page {maxPage} </div>
      <div>Total Posts {rows.length}</div>
      <div>
        <button onClick={prev} >prev</button>
        <button onClick={next}>next</button>
      </div>
    </div>
  );
};

export default FundsTable;
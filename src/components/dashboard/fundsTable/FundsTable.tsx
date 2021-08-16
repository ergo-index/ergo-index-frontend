import { useSortableData } from './useSortable';
import { FundSummaryRow, fundTableHeaders } from '../../models/models';
import '../Dashboard.scss'
import { usePagination } from './usePagination';


interface FundsTableProps {
  funds: FundSummaryRow[]
}

export const FundsTable = ({ funds }: FundsTableProps) => {

  const { rows, requestSort, getClassNamesFor } = useSortableData(funds, { key: "id", direction: "ascending" });
  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(rows, 20)

  const renderHeaders = () => (
    <div className="headers-container">
      {fundTableHeaders.map(({ sortID, name }, index) => (
        <div key={index}
          onClick={() => requestSort(sortID)}
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

  return (
    <div className="portfolio__container">
      <div className="portfolio__table">
        <h1 className="portfolio__header">All Funds</h1>
        {renderHeaders()}
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
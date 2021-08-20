import { FundSummaryRow, fundTableHeaders } from '../../models/models';
import { useSortableData } from './useSortable';
import { usePagination } from './usePagination';
import '../Dashboard.scss'

interface FundsTableProps {
  funds: FundSummaryRow[]
}

/**
 * An interactive table where each row represents a fund.
 * Columns (properties of each fund) are sortable, and rows are paginated.
 * @param funds the funds to display in the table
 */
export const FundsTable = ({ funds }: FundsTableProps) => {

  const { sortedItems: rows, setSortKeyOrChangeDirection, getDirectionForKey } = useSortableData(funds, { key: "id", direction: "ascending" });
  const { nextPage, prevPage, jumpToPage, getCurrentItems, currentPage, maxPage } = usePagination(rows, 20)

  const renderHeaders = () => (
    <div className="headers-container">
      {fundTableHeaders.map(({ sortID, name }, index) => (
        <div key={index}
          onClick={() => {
              setSortKeyOrChangeDirection(sortID)
              jumpToPage(1)
          }}
          className={getDirectionForKey(sortID)}
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
        getCurrentItems().map((fund, index) => (
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
        <button onClick={prevPage} >prev</button>
        <button onClick={nextPage}>next</button>
      </div>
    </div>
  );
};

export default FundsTable;

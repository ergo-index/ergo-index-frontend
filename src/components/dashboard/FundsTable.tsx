import React from 'react';
import { useSortableData } from './useSortable';
import { FundSummaryRow, FundSummaryHeader } from '../portfolio/models';
import './Dashboard.scss'
const headers: FundSummaryHeader[] = [
  {
    sortID: 'name',
    name: 'Name',
  },
  {
    sortID: 'AUM',
    name: 'AUM',
  },
  {
    sortID: 'investors',
    name: '# of Investors',
  },
  {
    sortID: 'totalReturnValue',
    name: 'Total Return ($)',
  },
  {
    sortID: 'totalReturnPercent',
    name: 'Total Return (%)',
  }
];

export const FundsTable = ({ funds }: { funds: FundSummaryRow[] }) => {

  const { rows, requestSort, sortConfig } = useSortableData(funds, { key: "name", direction: "ascending" });

  const getClassNamesFor = (name: keyof FundSummaryRow) => (
    sortConfig.key === name ? sortConfig.direction : undefined
  );

  const renderHeaders = () => (
    <div className="headers-container">

      {headers.map(({ sortID, name }, index) => (

        <div key={index}
          onClick={() => requestSort(sortID)}
          className={getClassNamesFor(sortID)}
          style = {{cursor:"pointer"}}
        >
          {name}
        </div>

      ))}
    </div>
  );

  const renderBody = () => (
    <>
      {
        rows.map((fund, index) => (
          <div className="row-container">
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
    </div>
  );
};

export default FundsTable;

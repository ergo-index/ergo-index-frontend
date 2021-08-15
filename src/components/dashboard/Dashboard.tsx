import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

import { FundSummaryRow } from '../portfolio/models';
import FundsTable from './FundsTable';
import './Dashboard.scss';


const mockDataRows: FundSummaryRow[] = [
    {
        name: 'Amelie',
        AUM: 1,
        investors: 7,
        totalReturnValue: 666,
        totalReturnPercent: 10,

    },
    {
        name: 'Bloeme',
        AUM: 111,
        investors: 77,
        totalReturnValue: 66,
        totalReturnPercent: 10,

    }, {
        name: 'Sterling ( makes us _ )',
        AUM: 11,
        investors: 777,
        totalReturnValue: 6,
        totalReturnPercent: 10000,
    },
    {
        name: 'Ryans mutilated _',
        AUM: 11,
        investors: 70,
        totalReturnValue: 70,
        totalReturnPercent: 99,
    },
    {
        name: 'Theos fresh, uncut _',
        AUM: 7,
        investors: 68,
        totalReturnValue: 71,
        totalReturnPercent: 100,
    },
];

/**
 * The main dashboard for logged in users.
 */
const Dashboard = () => {
    const history = useHistory();

    const onClickCreateIndex = () => {
        history.push('/portfolio')
    }

    return (
        <div className="dashboard__container">
            <Button onClick={onClickCreateIndex}>Create Index</Button>
            <FundsTable funds={mockDataRows} />
        </div>
    );
};

export default Dashboard;

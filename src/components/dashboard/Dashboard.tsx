import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import FundsTable from './fundsTable/FundsTable';
import { FundModel, FundSummaryRow } from '../models/models';
import { useQuery } from 'react-query';
import { getFunds } from '../../api/fundsApi';
import { fundSummarySelector } from '../../api/fundsApi';

/**
 * The main dashboard for logged in users.
 */
const Dashboard = () => {
    const history = useHistory();
    const onClickCreateIndex = () => {
        history.push('/portfolio')
    }

    console.log("dashboard rendered");

    return (
        <div className="dashboard__container">
            <Button onClick={onClickCreateIndex}>Create Index</Button>
            <FundsTable />
        </div>
    );
};

export default Dashboard;
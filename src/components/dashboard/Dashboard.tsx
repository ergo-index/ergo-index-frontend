import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';

import { FundSummaryRow } from '../models/models';
import FundsTable from './fundsTable/FundsTable';
import { getAllFunds, selectPortfolioSummaries } from '../../state/ducks/funds/FundsDuck';

/**
 * The main dashboard for logged in users.
 */
const Dashboard = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    useEffect(() => {
        dispatch(getAllFunds())
    }, [dispatch]);

    const fundSummaries: FundSummaryRow[] = useSelector(selectPortfolioSummaries)

    const onClickCreateIndex = () => {
        history.push('/portfolio')
    }

    return (
        <div className="dashboard__container">
            <Button onClick={onClickCreateIndex}>Create Index</Button>
            <FundsTable funds={fundSummaries} />
            <Button onClick={() => setCount(count + 1)}>Fetch</Button>
        </div>
    );
};

export default Dashboard;

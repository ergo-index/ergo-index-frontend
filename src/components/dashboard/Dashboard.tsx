import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

import { FundSummaryRow } from '../models/models';
import FundsTable from './fundsTable/FundsTable';
import { RootState } from '../../state/store';
import { useSelector, useDispatch, } from 'react-redux';
import { getAllFunds } from '../../state/ducks/funds/FundsDuck';


/**
 * The main dashboard for logged in users.
 */
const Dashboard = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const fundSummaries: FundSummaryRow[] = useSelector(
        (state: RootState) => Object.values(state.fundsState.funds).map(fund => fund.portfolioSummary)
    );


    useEffect(() => {
        dispatch(getAllFunds())
    }, [dispatch]);


    const onClickCreateIndex = () => {
        history.push('/portfolio')
    }

    return (
        <div className="dashboard__container">
            <Button onClick={onClickCreateIndex}>Create Index</Button>
            <FundsTable funds={fundSummaries} />
        </div>
    );
};

export default Dashboard;

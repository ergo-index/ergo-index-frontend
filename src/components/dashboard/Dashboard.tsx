import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

import { FundSummaryRow } from '../models/models';
import FundsTable from './fundsTable/FundsTable';
import { useSelector, useDispatch } from 'react-redux';
import { getAllFunds, selectPortfolioSummaries } from '../../state/ducks/funds/FundsDuck';
import { useState } from 'react';

/**
 * The main dashboard for logged in users.
 */
const Dashboard = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("use effect: Fetch all funds from DB");
        dispatch(getAllFunds())
    }, [dispatch]);


    const fundSummaries: FundSummaryRow[] = useSelector(selectPortfolioSummaries)

    const onClickCreateIndex = () => {
        history.push('/portfolio')
    }

    console.log("Dashboard rendered");

    return (
        <div className="dashboard__container">
            <Button onClick={onClickCreateIndex}>Create Index</Button>
            <FundsTable funds={fundSummaries} />
            <Button onClick={() => setCount(count + 1)}>Fetch</Button>
        </div>
    );
};

export default Dashboard;



// Way 1
   // const fundsState: FundState = useSelector(
    //     (state: RootState) => {
    //         console.log("useSelector: Get all funs from redux state");
    //         return state.fundsState
    //     }
    // );



import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import FundsTable from './fundsTable/FundsTable';
import { useState } from 'react';

/**
 * The main dashboard for logged in users.
 */
const Dashboard = () => {
    const history = useHistory();
    const [count, setCount] = useState(0);

    const onClickCreateIndex = () => {
        history.push('/portfolio')
    }

    return (
        <div className="dashboard__container">
            <Button onClick={onClickCreateIndex}>Create Index</Button>
            <FundsTable />
            <Button onClick={() => setCount(count + 1)}>Fetch</Button>
        </div>
    );
};

export default Dashboard;
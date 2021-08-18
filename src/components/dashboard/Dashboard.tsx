import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import FundsTable from './fundsTable/FundsTable';
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
            <FundsTable />
        </div>
    );
};

export default Dashboard;
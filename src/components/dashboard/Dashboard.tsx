import { useState } from 'react';
import DashboardTabs from './DashboardTabs';
import MyFundsTable from './myFundsTable/MyFundsTable';
import AllFundsTable from './allFundsTable/AllFundsTable';
import Shell from '../Shell';
/**
 * The main dashboard for logged in users.
 */
const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(0);

    const renderContent = () => {
        if (activeTab === 0) {
            return <AllFundsTable />
        }
        if (activeTab === 1) {
            return <MyFundsTable />
        }
    }
    return (
        <>
            <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <Shell>
                <>
                    {renderContent()}
                </>
            </Shell>
        </>
    );
};

export default Dashboard;
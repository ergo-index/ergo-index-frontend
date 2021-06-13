import React from 'react';
import { Button } from 'antd';

import Portfolio from '../portfolio/Portfolio';
import PortfolioHeaders from '../portfolio/PortfolioHeaders';
import './Dashboard.scss';

/**
 * The main dashboard for logged in users.
 */
const Dashboard = () => {
    return (
        <div>
            Dashboard
            <div>
                <Button>Create Index</Button>

                <br /><br /><br />

                <Portfolio />
            </div>
        </div>
    );
};

export default Dashboard;

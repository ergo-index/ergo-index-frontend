import React from 'react';
import { Button } from 'antd';

import Portfolio from '../portfolio/Portfolio';
import PortfolioHeaders from '../portfolio/PortfolioHeaders';
import './Dashboard.scss';
import Nav2 from '../landing/Nav2';
import '../landing/Nav.scss';
/**
 * The main dashboard for logged in users.
 */
const Dashboard = () => {
    const handleClick = () => {

    }

    return (
        <>
            <Nav2 isMobile={false}></Nav2>
            Dashboard
            <div>
                <Button onClick={handleClick}>Create Index</Button>

                <br /><br /><br />


            </div>
        </>
    );
};

export default Dashboard;

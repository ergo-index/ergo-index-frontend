import React from 'react';
import { Button } from 'antd';

import Portfolio from '../portfolio/Portfolio';
import PortfolioHeaders from '../portfolio/PortfolioHeaders';
import './Dashboard.scss';
import Nav2 from '../landing/Nav2';
import '../landing/Nav.scss';
import Nav from '../landing/Nav';
import {useDispatch} from "react-redux";
import {dashboardLoadAction} from "../../state/ducks/user/UserDuck";

/**
 * The main dashboard for logged in users.
 */
const Dashboard = () => {
    const dispatch = useDispatch();

    const handleClick = () => {

    }

    function redirectDashboard() {
        dispatch(dashboardLoadAction());
    }

    return (
        <>
            <Nav2
                isMobile={false}
                onClickDashboard={redirectDashboard}
            />
            Dashboard
            <div>
                <Button onClick={handleClick}>Create Index</Button>

                <br /><br /><br />


            </div>
        </>
    );
};

export default Dashboard;

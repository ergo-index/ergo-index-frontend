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
import history, {useHistory} from 'react-router-dom';

/**
 * The main dashboard for logged in users.
 */
const Dashboard = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        history.push('/portfolio')
    }

    const loadPortfolio = () => {
        history.push('/portfolio')
    }

    return (
        <div className="dashboard__container">
            <Nav2
                isMobile={false}
                onClickDashboard={loadPortfolio}
            />
            <div>
                <Button onClick={handleClick}>Create Index</Button>
            <div className="table0">
                <colgroup>
                    <col style={{width: '36px'}} />
                    <col style={{width: '50px'}} />
                    <col style={{width: '250px'}} />
                    <col style={{width: '170px'}} />
                    <col style={{width: '100px'}} />
                    <col style={{width: '100px'}} />
                    <col style={{width: '100px'}} />
                    <col style={{width: '175px'}} />
                    <col style={{width: '150px'}} />
                </colgroup>
                <thead>
                    <tr>
                        <th className="table0-stickyTop" style={{textAlign: 'left'}}>
                            <div className="table0-stickyTop-fundId">
                                <p className="table0-stickyTop-text">Fund ID</p>
                            </div>
                        </th>
                        <th className="table0-stickyTop" style={{textAlign: 'left'}} >
                            <div className="table0-stickyTop-sortBox">
                                <p className="sortNum">#</p>
                                <span className="caretUp"></span>
                            </div>
                        </th>
                        <th className="table0-stickyTop" style={{textAlign: 'left'}}>
                            <div className="table0-stickyTop-fundName">
                                <p className="table0-stickyTop-text">Fund Name</p>
                            </div>
                        </th>
                        <th className="table0-stickyTop" style={{textAlign: 'left'}}>
                            <div className="table0-stickyTop-invested">
                                <p className="table0-stickyTop-text">Total Value Invested</p>
                            </div>
                        </th>
                        <th className="table0-stickyTop" style={{textAlign: 'left'}}>
                            <div className="table0-stickyTop-invested">
                                <p className="table0-stickyTop-text">% Change</p>
                            </div>
                        </th>
                        <th className="table0-stickyTop" style={{textAlign: 'left'}}>
                            <div className="table0-stickyTop-invested">
                                <p className="table0-stickyTop-text">24h Change %</p>
                            </div>
                        </th>
                        <th className="table0-stickyTop" style={{textAlign: 'left'}}>
                            <div className="table0-stickyTop-profit">
                                <p className="table0-stickyTop-text">Total Loss/Gain</p>
                            </div>
                        </th>
                        <th className="table0-stickyTop" style={{textAlign: 'left'}}>
                            <div className="table0-stickyTop-nav">
                                <p className="table0-stickyTop-text">Fund's Total NAV</p>
                            </div>
                        </th>
                        <th className="table0-stickyTop" style={{textAlign: 'left'}}>
                            <div className="table0-stickyTop-diversity">
                                <p className="table0-stickyTop-text">Portfolio Diversity</p>
                            </div>
                        </th>
                    </tr>
                </thead>
            </div>
                <br /><br /><br />
            </div>
        </div>
    );
};

export default Dashboard;

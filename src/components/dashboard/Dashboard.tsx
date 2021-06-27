import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';

import './Dashboard.scss';

/**
 * The main dashboard for logged in users.
 */
const Dashboard = () => {
    const history = useHistory();

    const onClickCreateIndex = () => {
        history.push('/portfolio')
    }

    const rows = [
        {
            fundID: 'w3509w8e',
            num: 1,
            fundName: 'Fund Name1',
            valInvested: 4234,
            perChange: 4.54,
            perChange24hr: .46,
            totalChange: 4226.2236,
            fundNAV: 48394534,
            portfolioDiversity: .7632,
        },
        {
            fundID: 'z3509w8e',
            num: 2,
            fundName: 'Fund Name2',
            valInvested: 4234,
            perChange: 7.54,
            perChange24hr: .46,
            totalChange: 4326.2236,
            fundNAV: 48394534,
            portfolioDiversity: .7632,
        },
        {
            fundID: 'c3509w8e',
            num: 3,
            fundName: 'Fund Name3',
            valInvested: 5234,
            perChange: 7.54,
            perChange24hr: .46,
            totalChange: 4326.2236,
            fundNAV: 48394534,
            portfolioDiversity: .7632,
        },
    ];

    return (
        <div className="dashboard__container">
            <div>
                <Button onClick={onClickCreateIndex}>Create Index</Button>
            <div className="table0">
                <table>
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
                    <tbody>
                            {rows && rows.map( row => (
                                <tr>
                                <td>
                                    <div className="table0-data">
                                        {row.fundID}
                                    </div>
                                </td>
                                <td>
                                    <div className="table0-data">
                                        {row.num}
                                    </div>
                                </td>
                                <td>
                                    <div className="table0-data">
                                        {row.fundName}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {row.valInvested}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {row.perChange}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {row.perChange24hr}
                                    </div>
                                </td>
                                    <td>
                                        <div>
                                            {row.totalChange}
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            {row.fundNAV}
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            {row.portfolioDiversity}
                                        </div>
                                    </td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
                <br /><br /><br />
            </div>
        </div>
    );
};

export default Dashboard;

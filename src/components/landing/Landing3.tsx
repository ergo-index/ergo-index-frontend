import React from 'react';
import { Col, Row } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import './Landing1.scss';

/**
 * Component 1 of the landing page for unauthenticated users.
 */

const Landing3 = () => {
    return (
        <div className="home-page-wrapper content0-wrapper">
            <div className="home-page content0">
                <div className="title-wrapper">
                    <h1 style={{fontSize:"40px"}}>Technical Overview -- Protocol</h1>
                    <img src="/Flowchart.png" alt="icon2" />
                    <br /><br /><br />
                    <h1>Technical Overview -- Transaction Types</h1>


                </div>
            
               
                    <QueueAnim
                        type="bottom"
                        key="block"
                        className="content0-block-wrapper"
                        leaveReverse
                        component={Row}
                    >

                        <Col
                            className="content0-block"
                            md={12}
                            xs={24}
                        >
                            <div className="content0-block-item">
                                <div className="content0-block-icon">
                                    <img src="https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png" alt="icon2" />
                                </div>
                                <br />
                                <h2>Investors</h2>
                                <div>
                                    <ol className="list">
                                        <li>Sign up to find a fund that matches your desired
                                            <ul>
                                                <li>Asset size</li>
                                                <li>Historical returns</li>
                                                <li>Portfolio</li>
                                                <li>Manager background + credentials</li>

                                            </ul>
                                        </li>
                                        <li>Connect Your wallet and invest!</li>
                                        <li>From time to time, you'll be prompted to optionally sign a transaction that gets sent <br />to the Ergo blockchain network. No worries if you miss these - They're an added security measure</li>
                                    </ol>

                                </div>
                            </div>
                        </Col>
                        <Col
                            className="content0-block"
                            md={12}
                            xs={24}
                        >
                            <div className="content0-block-item">
                                <div className="content0-block-icon">
                                    <img src="https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png" alt="icon3" />
                                </div>
                                <br />
                                <h2>Managers</h2>
                                <div>
                                    <ol className="list">
                                        <li>Sign up to create a portfolio with your desired fees and target buy/sell prices for each asset in your portfolio</li>
                                        <li>Connect Your wallet to send your portfolio to the Ergo blockchain</li>
                                        <li>From time to time, you'll be prompted to optionally sign a transaction that gets sent <br />to the Ergo blockchain network. No worries if you miss these - They're an added security measure</li>

                                    </ol>

                                </div>
                            </div>
                        </Col>
                        <Col
                            className="content0-block"
                            md={12}
                            xs={24}
                        >
                            <div className="content0-block-item">
                                <div className="content0-block-icon">
                                    <img src="https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png" alt="icon2" />
                                </div>
                                <br />
                                <h2>Transaction 1</h2>
                                <div>
                                    <ol className="list">
                                        <li>Sign up to find a fund that matches your desired
                                            <ul>
                                                <li>Asset size</li>
                                                <li>Historical returns</li>
                                                <li>Portfolio</li>
                                                <li>Manager background + credentials</li>

                                            </ul>
                                        </li>
                                        <li>Connect Your wallet and invest!</li>
                                        <li>From time to time, you'll be prompted to optionally sign a transaction that gets sent <br />to the Ergo blockchain network. No worries if you miss these - They're an added security measure</li>
                                    </ol>

                                </div>
                            </div>
                        </Col>
                        <Col
                            className="content0-block"
                            md={12}
                            xs={24}
                        >
                            <div className="content0-block-item">
                                <div className="content0-block-icon">
                                    <img src="https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png" alt="icon3" />
                                </div>
                                <br />
                                <h2>Transaction 2</h2>
                                <div>
                                    <ol className="list">
                                        <li>Sign up to create a portfolio with your desired fees and target buy/sell prices for each asset in your portfolio</li>
                                        <li>Connect Your wallet to send your portfolio to the Ergo blockchain</li>
                                        <li>From time to time, you'll be prompted to optionally sign a transaction that gets sent <br />to the Ergo blockchain network. No worries if you miss these - They're an added security measure</li>

                                    </ol>

                                </div>
                            </div>
                        </Col>
                        <Col
                            className="content0-block"
                            md={12}
                            xs={24}
                        >
                            <div className="content0-block-item">
                                <div className="content0-block-icon">
                                    <img src="https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png" alt="icon2" />
                                </div>
                                <br />
                                <h2>Investors</h2>
                                <div>
                                    <ol className="list">
                                        <li>Sign up to find a fund that matches your desired
                                            <ul>
                                                <li>Asset size</li>
                                                <li>Historical returns</li>
                                                <li>Portfolio</li>
                                                <li>Manager background + credentials</li>

                                            </ul>
                                        </li>
                                        <li>Connect Your wallet and invest!</li>
                                        <li>From time to time, you'll be prompted to optionally sign a transaction that gets sent <br />to the Ergo blockchain network. No worries if you miss these - They're an added security measure</li>
                                    </ol>

                                </div>
                            </div>
                        </Col>
                        <Col
                            className="content0-block"
                            md={12}
                            xs={24}
                        >
                            <div className="content0-block-item">
                                <div className="content0-block-icon">
                                    <img src="https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png" alt="icon3" />
                                </div>
                                <br />
                                <h2>Managers</h2>
                                <div>
                                    <ol className="list">
                                        <li>Sign up to create a portfolio with your desired fees and target buy/sell prices for each asset in your portfolio</li>
                                        <li>Connect Your wallet to send your portfolio to the Ergo blockchain</li>
                                        <li>From time to time, you'll be prompted to optionally sign a transaction that gets sent <br />to the Ergo blockchain network. No worries if you miss these - They're an added security measure</li>

                                    </ol>

                                </div>
                            </div>
                        </Col>
                    </QueueAnim>
 
            </div>
        </div>
        
    );
};

export default Landing3;

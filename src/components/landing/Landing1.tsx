import React from 'react';
import { Col, Row } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import './Landing1.scss';

/**
 * Component 1 of the landing page for unauthenticated users.
 */
const Landing1 = () => {
    return (
        <div className="home-page-wrapper content0-wrapper">
            <div className="home-page content0">
                <div className="title-wrapper">
                    <h1>What is it?</h1>
                </div>
                <OverPack playScale={0.3} >
                    <QueueAnim
                        type="bottom"
                        key="block"
                        className="content0-block-wrapper"
                        leaveReverse
                        component={Row}
                    >
                        <Col
                            className="content0-block"
                            md={8}
                            xs={24}
                        >
                            <div className="content0-block-item">
                                <div className="content0-block-icon">
                                    <img src="https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png" alt="icon1" />
                                </div>
                                <div>
                                    <span>
                                        Decentralized and non-custodial. Every investor and fund manager
                                        maintains their own private keys.
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col
                            className="content0-block"
                            md={8}
                            xs={24}
                        >
                            <div className="content0-block-item">
                                <div className="content0-block-icon">
                                    <img src="https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png" alt="icon2" />
                                </div>
                                <div>
                                    <span>
                                        Profitable. Managers can earn fees, and investors benefit from easy access
                                        to transparent, expert-created portfolios. No more worrying about protecting
                                        dozens of wallets or being exposed to hackers on centralized exchanges.
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col
                            className="content0-block"
                            md={8}
                            xs={24}
                        >
                            <div className="content0-block-item">
                                <div className="content0-block-icon">
                                    <img src="https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png" alt="icon3" />
                                </div>
                                <div>
                                    <span>
                                        Trustless. Smart contracts ensure that only you can withdraw your funds.
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </QueueAnim>
                </OverPack>
            </div>
        </div>
    );
};

export default Landing1;

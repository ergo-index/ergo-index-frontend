import React from 'react';
import { Col, Row } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { TeamOutlined} from '@ant-design/icons';



/**
 * Component 2 of the landing page for unauthenticated users.
 */

const Landing2 = () => {
    return (
            <div className="landing">
                <div className="title-wrapper">
                    <h1 className="heading-1">How it works</h1>
                </div>
                <OverPack playScale={0.3} >
                    <QueueAnim
                        type="bottom"
                        key="block"
                        className="landing-block-wrapper"
                        leaveReverse
                        component={Row}
                    >
                        <Col
                            key="col1"
                            className="landing-block"
                            md={12}
                            xs={24}
                        >
                            <div className="landing-block-item">
                                <div className="landing-block-icon">
                                    <img src="https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png" alt="icon2" />
                                </div>
                                <br />
                                <h2 className="heading-2">Investors</h2>
                                <div>
                                    <span>
                                        <ol className="list">
                                            <li>Sign up to find a fund that matches your desired
                                                <ul>
                                                    <li>Asset size</li>
                                                    <li>Historical returns</li>
                                                    <li>Portfolio</li>
                                                    <li>Manager background + credentials</li>

                                                </ul>
                                            </li>
                                            <li>Connect your wallet and invest!</li>
                                            <li>From time to time, you'll be prompted to optionally sign a transaction that gets sent <br />to the Ergo blockchain network. No worries if you miss these - They're an added security measure</li>
                                        </ol>
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col
                            key="col2"
                            className="landing-block"
                            md={12}
                            xs={24}
                        >
                            <div className="landing-block-item">
                                <div className="landing-block-icon">
                                <TeamOutlined style={{ fontSize: '80px', color: '#08c' }} />
                                </div>
                                <br />
                                <h2 className="heading-2">Managers</h2>
                                <div>
                                    <span>
                                        <ol className="list">
                                            <li>Sign up to create a portfolio with your desired fees and target buy/sell prices for each asset in your portfolio</li>
                                            <li>Connect Your wallet to send your portfolio to the Ergo blockchain</li>
                                            <li>From time to time, you'll be prompted to optionally sign a transaction that gets sent <br />to the Ergo blockchain network. No worries if you miss these - They're an added security measure</li>

                                        </ol>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </QueueAnim>
                </OverPack>
            </div>
        
    );
};

export default Landing2;

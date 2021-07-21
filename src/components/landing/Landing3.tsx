import React from 'react';
import { Col, Row } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { PlusOutlined, DollarCircleOutlined, MinusOutlined, UserAddOutlined, UserDeleteOutlined, ReloadOutlined } from '@ant-design/icons';


/**
 * Component 3 of the landing page for unauthenticated users.
 */

const Landing3 = () => {
    return (
        <div className="landing">
            <div className="title-wrapper">
                <h1 className="heading-1">Technical Overview -- Protocol</h1>
            </div>
            <img src="/Flowchart.png" className="flowchart" alt="icon2" />
          
            <div className="title-wrapper">
                <h1 className="heading-1">Technical Overview -- Transaction Types</h1>
            </div>
            <OverPack playScale={.01} >
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
                                <PlusOutlined style={{ fontSize: '80px', color: '#08c' }} />
                            </div>

                            <h2 className="heading-2">Create Fund Tx</h2>
                            <div>
                                <ul className="list">
                                    <li>
                                        Create Fund Tx: initializes the fund. Only happens once for each fund
                                        <ul>
                                            <li>
                                                INPUTS(0)-INPUTS(N): Any number of UTXOs guarded by the fund creator's public key
                                            </li>
                                            <li>
                                                OUTPUTS(0): The core state UTXO with portfolio configuration <br />information populated in its registers, as
                                                well as an initial investment for the fund
                                            </li>
                                            <li>
                                                OUTPUTS(1)-OUTPUTS(N): Any change UTXOs for the fund owner
                                            </li>
                                        </ul>
                                        <br />
                                    </li>
                                </ul>
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
                                <ReloadOutlined style={{ fontSize: '80px', color: '#08c' }} />
                            </div>

                            <h2 className="heading-2">Update Fund Tx</h2>
                            <div>
                                <ul className="list">
                                    <li>
                                        Update Portfolio Tx: Allows the manager to rebalance the fund's portfolio
                                        <ul>
                                            <li>
                                                INPUTS(0): The core state UTXO
                                            </li>
                                            <li>
                                                OUTPUTS(0): The core state UTXO with updated R6. No other registers are allowed to be updated
                                            </li>
                                        </ul>
                                        <br />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </QueueAnim>
            </OverPack>
            <OverPack playScale={0.3} >
                <QueueAnim
                    type="bottom"
                    key="block"
                    className="landing-block-wrapper"
                    leaveReverse
                    component={Row}
                >
                    <Col
                        key="col3"
                        className="landing-block"
                        md={12}
                        xs={24}
                    >
                        <div className="landing-block-item">
                            <div className="landing-block-icon">
                                <MinusOutlined style={{ fontSize: '80px', color: '#08c' }} />
                            </div>

                            <h2 className="heading-2">Sell Token Tx</h2>
                            <div>
                                <ul className="list">
                                    <li>
                                        Sell Token Tx: Sells a token that is tracked in the core state's R7 and creates a new UTXO that is<br />
                                        spendable by the fund (i.e., the core state UTXO)
                                        <ul>
                                            <li>
                                                INPUTS(0): The core state UTXO
                                            </li>
                                            <li>
                                                INPUTS(1): The UTXO of a token that the fund owns (and is consequentially stored in R7)
                                            </li>
                                            <li>
                                                OUTPUTS(0): The core state UTXO with an updated R5 to reflect which investors' Ergs were<br />
                                                moved back into the core state UTXO, as well as an updated R7 to reflect the fact that one less UTXO<br />
                                                is now spendable by the fund.
                                            </li>
                                        </ul>
                                        <br />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col
                        className="landing-block"
                        md={12}
                        xs={24}
                    >
                        <div className="landing-block-item">
                            <div className="landing-block-icon">
                                <UserAddOutlined style={{ fontSize: '80px', color: '#08c' }} />
                            </div>

                            <h2 className="heading-2">Investor Join Tx</h2>
                            <div>
                                <ul className="list">
                                    <li>
                                        Investor Joins Tx: Accepts a new investor into the fund, increasing the pool of UTXOs spendable<br />
                                        by the core state UTXO
                                        <ul>
                                            <li>
                                                INPUTS(0): The core state UTXO
                                            </li>
                                            <li>
                                                INPUTS(1)-INPUTS(N): Any number of UTXOs belonging to the new investor
                                            </li>
                                            <li>
                                                OUTPUTS(0): The core state UTXO with an updated R5 to reflect the new investor's shares.
                                            </li>
                                            <li>
                                                OUTPUTS(1)-OUTPUTS(N): Any change UTXOs for the new investor
                                            </li>
                                        </ul>
                                        <br />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </QueueAnim>
            </OverPack>
            <OverPack playScale={0.3} >
                <QueueAnim
                    type="bottom"
                    key="block"
                    className="landing-block-wrapper"
                    leaveReverse
                    component={Row}
                >
                    <Col
                        key="col4"
                        className="landing-block"
                        md={12}
                        xs={24}
                    >
                        <div className="landing-block-item">
                            <div className="landing-block-icon">
                                <UserDeleteOutlined style={{ fontSize: '80px', color: '#08c' }} />
                            </div>

                            <h2 className="heading-2">Investor Liquidate Tx</h2>
                            <div>
                                <ul className="list">
                                    <li>
                                        Investor Liquidates Tx: Returns funds to an investor (up to the full value of his/her shares),<br />
                                        spending some of the fund's invested tokens if necessary
                                        <ul>
                                            <li>
                                                INPUTS(0): The core state UTXO
                                            </li>
                                            <li>
                                                INPUTS(1)-INPUTS(N): The UTXOs of tokens that the fund owns (and are consequentially stored in R7).<br />
                                                R7 must show that each token is at least partially owned by the investor.
                                            </li>
                                            <li>
                                                OUTPUTS(0): The core state UTXO with updated R5 and R7 to reflect the investor's updated shares, as well<br />
                                                as the fund's new amount of tokens if the Tx needed to spend some. If the investor was only partially<br />
                                                in some of the tokens, then the change will go back into the fund to be invested in more tokens in<br />
                                                a future Buy Token Tx, and R5 will reflect this
                                            </li>
                                            <li>
                                                OUTPUTS(1): A UTXO with the value that the investor liquidated
                                            </li>
                                        </ul>
                                        <br />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col
                        key="col5"
                        className="landing-block"
                        md={12}
                        xs={24}
                    >
                        <div className="landing-block-item">
                            <div className="landing-block-icon">
                                <DollarCircleOutlined style={{ fontSize: '80px', color: '#08c' }} />
                            </div>

                            <h2 className="heading-2">Buy Token Tx</h2>
                            <div>
                                <ul className="list">
                                    <li>
                                        Buy Token Tx: creates a UTXO that can be used on the Ergo DEX to purchase an NFT or token. This
                                        will hopefully <br />be able to work with other blockchains in the future to provide native assets in addition
                                        to wrapped <br />assets (possibly by using THORchain, Gravity, and/or IBC protocol).
                                        <ul>
                                            <li>
                                                INPUTS(0): The core state UTXO
                                            </li>
                                            <li>
                                                OUTPUTS(0): The core state UTXO with an updated R5 to reflect which investors' Ergs were <br />
                                                used, as well as an updated R7 to track the token's UTXO(s) that are owned by the fund
                                            </li>
                                            <li>
                                                OUTPUTS(1)-OUTPUTS(N): Any number of UTXOs representing tokens which have a guard allowing them <br />
                                                to be spent on the Ergo DEX, provided that the resulting UTXOs from any Ergo DEX transaction will <br />
                                                remain guarded by the script which allows the core state to spend them
                                            </li>
                                        </ul>
                                        <br />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </QueueAnim>
            </OverPack>
            <br /><br /><br /><br /><br /><br /><br />
        </div>

    );
};

export default Landing3;

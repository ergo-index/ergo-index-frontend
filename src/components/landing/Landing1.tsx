import React from 'react';
import { Col, Row } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import './Landing1.scss';

/**
 * Component 1 of the landing page for unauthenticated users.
 */
const Content00DataSource = {
    OverPack: { playScale: 0.3, className: '' },
    titleWrapper: {
        children: [{ name: 'title', children: '产品与服务' }],
    },
    childWrapper: {
        className: 'content0-block-wrapper',
        children: [
            {
                name: 'block0',
                className: 'content0-block',
                md: 8,
                xs: 24,
                children: {
                    className: 'content0-block-item',
                    children: [
                        {
                            name: 'image',
                            className: 'content0-block-icon',
                            children:
                                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
                        },
                        {
                            name: 'title',
                            className: 'content0-block-title',
                            children: '一站式业务接入',
                        },
                        { name: 'content', children: '支付、结算、核算接入产品效率翻四倍' },
                    ],
                },
            },
            {
                name: 'block1',
                className: 'content0-block',
                md: 8,
                xs: 24,
                children: {
                    className: 'content0-block-item',
                    children: [
                        {
                            name: 'image',
                            className: 'content0-block-icon',
                            children:
                                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
                        },
                        {
                            name: 'title',
                            className: 'content0-block-title',
                            children: '一站式事中风险监控',
                        },
                        {
                            name: 'content',
                            children: '在所有需求配置环节事前风险控制和质量控制能力',
                        },
                    ],
                },
            },
            {
                name: 'block2',
                className: 'content0-block',
                md: 8,
                xs: 24,
                children: {
                    className: 'content0-block-item',
                    children: [
                        {
                            name: 'image',
                            className: 'content0-block-icon',
                            children:
                                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
                        },
                        {
                            name: 'title',
                            className: 'content0-block-title',
                            children: '一站式数据运营',
                        },
                        {
                            name: 'content',
                            children: '沉淀产品接入效率和运营小二工作效率数据',
                        },
                    ],
                },
            },
        ],
    },
};
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

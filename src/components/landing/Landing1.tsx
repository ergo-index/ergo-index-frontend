import React from 'react';
import { Col, Row } from 'antd';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { ShareAltOutlined, CodeOutlined } from '@ant-design/icons';

/**
 * Component 1 of the landing page for unauthenticated users.
 */

const Landing1 = () => {
  return (
    <div className="landing">
      <div className="title-wrapper">
        <h1 className="heading-1">What is it?</h1>
      </div>
      <OverPack playScale={0.3}>
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
            md={8}
            xs={24}
          >
            <div className="landing-block-item">
              <div className="landing-block-icon">
                <ShareAltOutlined style={{ fontSize: '80px', color: '#08c' }} />
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
            key="col2"
            className="landing-block"
            md={8}
            xs={24}
          >
            <div className="landing-block-item">
              <div className="landing-block-icon">
                <img src="https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png" alt="icon3" />
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
            key="col3"
            className="landing-block"
            md={8}
            xs={24}
          >
            <div className="landing-block-item">
              <div className="landing-block-icon">
                <CodeOutlined style={{ fontSize: '80px', color: '#08c' }} />
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
  );
};

export default Landing1;

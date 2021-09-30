import React from 'react';
import { Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

/**
 * Component 0 of the landing page for unauthenticated users.
 * The logo and main picture
 */
interface Landing0Props {
  showModal: () => void
}
const Landing0 = ({ showModal }: Landing0Props) => {
  return (
    <div className="landing0">
      <QueueAnim
        key="QueueAnim"
        type={['bottom', 'top']}
        delay={200}
        className="landing0-text-wrapper"
      >
        <div key="title" className="landing0-title">
          <img src="/ergo-index.fund_large.png" width="100%" alt="img" />
        </div>
        <div key="content" className="landing0-content">
          ergo-index.fund is a non-custodial platform that enables users to pool their funds together
          to invest in a portfolio of tokens on the Ergo blockchain.
        </div>
        <Button ghost key="button" className="landing0-button" onClick={showModal}>
          Sign Up
        </Button>
      </QueueAnim>
      <TweenOne
        animation={{
          y: '-=20',
          yoyo: true,
          repeat: -1,
          duration: 1000,
        }}
        className="landing0-icon"
        key="icon"
      >
        <DownOutlined />
      </TweenOne>
    </div>
  );
};

export default Landing0;

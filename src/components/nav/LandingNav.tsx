import React, { useState } from 'react';
import { Menu } from 'antd';
import TweenOne from 'rc-tween-one';

import useIsMobile from './common';
import './LandingNav.scss';
import './common.scss';

/**
 * Nav bar on the landing page for unauthenticated users.
 */
interface LandingNavProps {
    onClickLogin: () => void
    onClickSignUp: () => void
}
const LandingNav = ({ onClickLogin, onClickSignUp }: LandingNavProps) => {
    const [phoneOpen, setPhoneOpen] = useState(false);
    const isMobile = useIsMobile();

    return (
        <TweenOne
            component="nav"
            animation={{ opacity: 0, type: 'from' }}
            className="landing-nav"
        >
            <div
                className={`content-container${phoneOpen ? ' open' : ''}`}
            >
                <TweenOne
                    animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
                    className="landing-nav-logo"
                >
                    <img height="90%" width="90%" src="/ergo-index.fund_large.png" alt="logo" />
                </TweenOne>
                {isMobile && (
                    <div
                        className="landing-nav-mobile-menu"
                        onClick={() => {
                            setPhoneOpen(prevPhoneOpen => !prevPhoneOpen)
                        }}
                    >
                        <em />
                        <em />
                        <em />
                    </div>
                )}
                <TweenOne
                    className="landing-nav-menu"
                    animation={
                        isMobile
                            ? {
                                height: 0,
                                duration: 300,
                                onComplete: (e) => {
                                    if (phoneOpen) {
                                        e.target.style.height = 'auto';
                                    }
                                },
                                ease: 'easeInOutQuad',
                            }
                            : {}
                    }
                    moment={phoneOpen ? 300 : 0}
                    reverse={phoneOpen}
                >
                    <Menu
                        mode={isMobile ? 'inline' : 'horizontal'}
                        theme="dark"
                        selectedKeys={[""]}
                    >
                        <Menu.Item className="landing-nav-item" onClick={onClickLogin}>
                            <div className="landing-nav-item-block">
                                <div>
                                    <span>
                                        Log in
                                    </span>
                                </div>
                            </div>
                        </Menu.Item>
                        <Menu.Item className="landing-nav-item" onClick={onClickSignUp}>
                            <div className="landing-nav-item-block">
                                <div>
                                    <span>
                                        Sign up
                                    </span>
                                </div>
                            </div>
                        </Menu.Item>
                    </Menu>
                </TweenOne>
            </div>
        </TweenOne>
    );
};

export default LandingNav;

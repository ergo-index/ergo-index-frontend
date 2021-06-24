import React, { useState } from 'react';
import { Menu } from 'antd';
import TweenOne from 'rc-tween-one';

import './Nav.scss';
import './Landing0.scss';

/**
 * Nav bar on the landing page for unauthenticated users.
 */
interface NavProps {
    isMobile: boolean
    onClickLogin: () => void
    onClickSignUp: () => void
}
const Nav = ({ isMobile, onClickLogin, onClickSignUp }: NavProps) => {
    const [phoneOpen, setPhoneOpen] = useState(false);

    return (
        <TweenOne
            component="nav"
            animation={{ opacity: 0, type: 'from' }}
            className="header0 home-page-wrapper"
        >
            <div
                className={`home-page${phoneOpen ? ' open' : ''}`}
            >
                <TweenOne
                    animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
                    className="header0-logo"
                >
                    <img height="90%" width="90%" src="/ergo-index.fund_large.png" alt="logo" />
                </TweenOne>
                {isMobile && (
                    <div
                        className="header0-mobile-menu"
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
                    className="header0-menu"
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
                        <Menu.Item className="header0-item" onClick={onClickLogin}>
                            <div className="header0-item-block">
                                <div>
                                    <span>
                                        Log in
                                    </span>
                                </div>
                            </div>
                        </Menu.Item>
                        <Menu.Item className="header0-item" onClick={onClickSignUp}>
                            <div className="header0-item-block">
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

export default Nav;

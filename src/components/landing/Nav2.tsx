import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu } from 'antd';
import TweenOne from 'rc-tween-one';

import {dashboard, logOut} from '../../state/ducks/user/UserDuck';
import { RootState } from '../../state/store';
import './Nav2.scss';


/**
 * Nav bar on the authenticated users.
 */
interface NavProps {
    isMobile: boolean
    onClickDashboard: () => void
}

const Nav2 = ({ isMobile, onClickDashboard }: NavProps) => {
    const dispatch = useDispatch();
    const [phoneOpen, setPhoneOpen] = useState(false);
    const { jwtAxiosId } = useSelector(
        (state: RootState) => state.userState
    );

    return (
        <TweenOne
            component="nav"
            animation={{ opacity: 0, type: 'from' }}
            className="header1 home-page-wrapper"
        >
            <div
                className={`home-page${phoneOpen ? ' open' : ''}`}
            >
                <TweenOne
                    animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
                    className="header1-logo"
                >
                    <img height="90%" width="90%" src="/ergo-index.fund_large.png" alt="logo" />
                </TweenOne>
                {isMobile && (
                    <div
                        className="header1-mobile-menu"
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
                    className="header1-menu"
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
                        <Menu.Item className="header1-item">
                            <div className="header1-item-block">
                                <div>
                                    <span onClick={onClickDashboard}>
                                        Dashboard
                                    </span>
                                </div>
                            </div>
                        </Menu.Item>
                        <Menu.Item className="header1-item">
                            <div className="header1-item-block">
                                <div>
                                    <span onClick={() => { dispatch(logOut(jwtAxiosId))}}>
                                        Log out
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

export default Nav2;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import TweenOne from 'rc-tween-one';

import { logOut } from '../../state/ducks/user/UserDuck';
import { RootState } from '../../state/store';
import useIsMobile from './common';
import './AuthenticatedNav.scss';
import './common.scss';


/**
 * Nav bar displayed to authenticated users.
 */
const AuthenticatedNav = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [phoneOpen, setPhoneOpen] = useState(false);
    const { jwtAxiosId } = useSelector(
        (state: RootState) => state.userState
    );
    const isMobile = useIsMobile();

    const onClickDashboard = () => {
        history.push('/dashboard');
    }

    const onClickPortfolio = () => {
        history.push('/portfolio');
    }

    return (
        <div className="authenticated-nav">
            <div
                className={`content-container${phoneOpen ? ' open' : ''}`}
            >
                <div className="authenticated-nav-logo" onClick={onClickDashboard}>
                    <img height="90%" width="90%" src="/ergo-index.fund_large.png" alt="logo" />
                </div>
                {isMobile && (
                    <div
                        className="authenticated-nav-mobile-menu"
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
                    className="authenticated-nav-menu"
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
                        disabledOverflow={true}
                        mode={isMobile ? 'inline' : 'horizontal'}
                        theme="dark"
                        selectedKeys={[""]}
                    >
                        <Menu.Item
                            onClick={onClickPortfolio}
                            className={`${location.pathname === '/portfolio' ? 'active-route' : ''} 'authenticated-nav-item'`}
                        >
                            <div className="authenticated-nav-item-block">
                                <div>
                                    <span>
                                        Portfolio
                                    </span>
                                </div>
                            </div>
                        </Menu.Item>
                        <Menu.Item
                            onClick={() => { dispatch(logOut(jwtAxiosId))}}
                            className="authenticated-nav-item"
                        >
                            <div className="authenticated-nav-item-block">
                                <div>
                                    <span>
                                        Log out
                                    </span>
                                </div>
                            </div>
                        </Menu.Item>
                    </Menu>
                </TweenOne>
            </div>
        </div>
    );
};

export default AuthenticatedNav;

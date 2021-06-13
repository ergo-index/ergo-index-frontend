import React, { useState } from 'react';
import TweenOne from 'rc-tween-one';

import './Nav.scss';

/**
 * Nav bar on the landing page for unauthenticated users.
 */
const Nav00DataSource = {
    page: { className: 'home-page' },
    logo: {
        className: 'header0-logo',
        children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
    },
    Menu: {
        className: 'header0-menu',
        children: [
            {
                name: 'item0',
                className: 'header0-item',
                children: {
                    href: '#',
                    children: [{ children: '导航一', name: 'text' }],
                },
                subItem: [
                    {
                        name: 'sub0',
                        className: 'item-sub',
                        children: {
                            className: 'item-sub-item',
                            children: [
                                {
                                    name: 'image0',
                                    className: 'item-image',
                                    children:
                                        'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                                },
                                {
                                    name: 'title',
                                    className: 'item-title',
                                    children: 'Ant Design',
                                },
                                {
                                    name: 'content',
                                    className: 'item-content',
                                    children: '企业级 UI 设计体系',
                                },
                            ],
                        },
                    },
                    {
                        name: 'sub1',
                        className: 'item-sub',
                        children: {
                            className: 'item-sub-item',
                            children: [
                                {
                                    name: 'image0',
                                    className: 'item-image',
                                    children:
                                        'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                                },
                                {
                                    name: 'title',
                                    className: 'item-title',
                                    children: 'Ant Design',
                                },
                                {
                                    name: 'content',
                                    className: 'item-content',
                                    children: '企业级 UI 设计体系',
                                },
                            ],
                        },
                    },
                ],
            },
            {
                name: 'item1',
                className: 'header0-item',
                children: {
                    href: '#',
                    children: [{ children: '导航二', name: 'text' }],
                },
            },
            {
                name: 'item2',
                className: 'header0-item',
                children: {
                    href: '#',
                    children: [{ children: '导航三', name: 'text' }],
                },
            },
            {
                name: 'item3',
                className: 'header0-item',
                children: {
                    href: '#',
                    children: [{ children: '导航四', name: 'text' }],
                },
            },
        ],
    },
    mobileMenu: { className: 'header0-mobile-menu' },
};
interface NavProps {
    isMobile: boolean
}
const Nav = ({ isMobile }: NavProps) => {
    const [phoneOpen, setPhoneOpen] = useState(false);
    const dataSource = Nav00DataSource;

    return (
        <TweenOne
            component="nav"
            animation={{ opacity: 0, type: 'from' }}
            className="header0 home-page-wrapper"
        >
            <div
                {...dataSource.page}
                className={`${dataSource.page.className}${phoneOpen ? ' open' : ''}`}
            >
                <TweenOne
                    animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
                    {...dataSource.logo}
                >
                    <img width="100%" src={dataSource.logo.children} alt="img" />
                </TweenOne>
                {isMobile && (
                    <div
                        {...dataSource.mobileMenu}
                        onClick={() => {
                            setPhoneOpen(prevPhoneOpen => !prevPhoneOpen)
                        }}
                    >
                        <em />
                        <em />
                        <em />
                    </div>
                )}
            </div>
        </TweenOne>
    );
};

export default Nav;

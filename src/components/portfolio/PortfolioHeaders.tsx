import React from 'react';

import * as LedgerConstants from './PortfolioConstants';

import './PortfolioHeaders.scss';

export const PortfolioHeaders = () => {

    const headers = {
        token: 'Token',
        portfolioPercent: '% of Portfolio',
        buyTarget: 'Price to Buy',
        sellTarget: 'Price to Sell'
    };

    return (
        <div id="headers-container">
            <div style={{minWidth: LedgerConstants.TOKEN_WIDTH}}>{headers.token}</div>
            <div style={{minWidth: LedgerConstants.PORTFOLIO_PERCENT_WIDTH}}>{headers.portfolioPercent}</div>
            <div style={{minWidth: LedgerConstants.BUY_TARGET_WIDTH}}>{headers.buyTarget}</div>
            <div style={{minWidth: LedgerConstants.SELL_TARGET_WIDTH}}>{headers.sellTarget}</div>
            <div style={{width: "14px"}} />
        </div>
    );
};

export default PortfolioHeaders;

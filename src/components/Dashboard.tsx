import React from 'react';

import { Button } from 'antd';

import './Dashboard.scss';

// TODO: Users need to be able to create a fund and modify its portfolio
// Don't worry about accounts for now -- we just need simple portfolio management

// TODO: These types will need to be in their own files (probably in the api folder)
/**
 * An index or mutual fund that users can pool their money into.
 */
interface Fund {
    ownerEmail: string
    portfolio: Portfolio
}

/**
 * A portfolio of tokens that a fund invests in.
 * The goal of this is to eventually support cross-chain assets rather than just Ergo tokens.
 * The sum of all tokens' portfolioPercent variables must equal 100.
 */
interface Portfolio {
    tokens: TokenInfo[]
}

/**
 * Investment information about when to buy/sell a token in a portfolio.
 * The amount purchased will be impacted by portfolioPercentage and by the size of the fund's pooled assets.
 * For example, a fund with 100 Ergs will purchase 10 Erg if portfolioPercent is set to 10.
 */
interface TokenInfo {
    token: string // the name (might be changed to a hash or id later) of the token
    portfolioPercent: number // the percentage of the portfolio that will be invested in this token
    buyTarget: number // the price to purchase the token at
    sellTarget: number // the price to sell the token at
}

/**
 * The main dashboard for logged in users.
 */
const Dashboard = () => {
    return (
        <div>
            Dashboard
            <div>
                <Button>Create Index</Button>
            </div>
        </div>
    );
};

export default Dashboard;

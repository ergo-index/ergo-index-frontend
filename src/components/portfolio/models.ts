// TODO: This type should probably be moved elsewhere once there's a Fund component
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
export interface Portfolio {
    tokens: TokenInfo[]
}

/**
 * Investment information about when to buy/sell a token in a portfolio.
 * The amount purchased will be impacted by portfolioPercentage and by the size of the fund's pooled assets.
 * For example, a fund with 100 Ergs will purchase 10 Erg if portfolioPercent is set to 10.
 */
export interface TokenInfo {
    token: TokenType;
    portfolioPercent: number // the percentage of the portfolio that will be invested in this token
    buyTarget: number // the price to purchase the token at
    sellTarget: number // the price to sell the token at
}
export type TokenType = 'testToken1' | 'testToken2' | 'testToken3' | 'testToken4' | 'testToken5';

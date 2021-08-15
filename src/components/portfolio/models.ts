// TODO: This type should probably be moved elsewhere once there's a Fund component
/**
 * An index or mutual fund that users can pool their money into.
 */
export interface FundModel {
    ownerEmail: string
    id: string
    portfolio: PortfolioModel
}

/**
 * A portfolio of tokens that a fund invests in.
 * The goal of this is to eventually support cross-chain assets rather than just Ergo tokens.
 * The sum of all tokens' portfolioPercent variables must equal 100.
 */
export interface PortfolioModel {
    tokens: TokenInfoModel[]
}


/**
 * Investment information about when to buy/sell a token in a portfolio.
 * The amount purchased will be impacted by portfolioPercentage and by the size of the fund's pooled assets.
 * For example, a fund with 100 Ergs will purchase 10 Erg if portfolioPercent is set to 10.
 */
export interface TokenInfoModel {
    token: TokenType;
    portfolioPercent: string // the percentage of the portfolio that will be invested in this token
    buyTarget: string // the price to purchase the token at
    sellTarget: string // the price to sell the token at
}
export type TokenType = 'testToken1' | 'testToken2' | 'testToken3' | 'testToken4' | 'testToken5';


export interface FundSummaryRow {
    name: string;
    AUM: number;
    investors: number
    totalReturnValue: number
    totalReturnPercent: number
}

export interface FundSummaryHeader{
    sortID: keyof FundSummaryRow, // keyof ensures val is a key in FundSummaryRow
    name: string
}

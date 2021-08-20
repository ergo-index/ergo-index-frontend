import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useImmer } from 'use-immer';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

import { FundSummaryRow, TokenInfoModel } from '../models/models';
import InputRow from './InputRow';
import { postFund } from '../../state/ducks/funds/FundsDuck'
import PortfolioHeaders from './PortfolioHeaders';
import './Portfolio.scss';

/**
 * A portfolio editor with rows and columns for changing information
 * about which tokens to buy/sell, when to buy/sell them, and how much to buy.
 */
export const Portfolio = () => {
    const [rows, setRows] = useImmer([{ token: "testToken1" } as TokenInfoModel]);
    const [fundName, setFundName] = useState("" as string); // Acts as ID for fund
    const dispatch = useDispatch()

    const onUpdateName = (e: any) => {
        setFundName(e.target.value);
    };

    /**
     * Updates the given key/value pair at the given row index.
     * @param row the index of the row that is being updated
     * @param dataKey the key to update
     * @param dataValue the new value of the given key
     */
    const onUpdateData = (row: number, dataKey: keyof TokenInfoModel, dataValue: any) => {
        setRows(prevRows => { prevRows[row][dataKey] = dataValue });
    }

    /**
     * Adds a new (empty) row to the portfolio editor.
     */
    const addRow = () => {
        setRows(prevRows => { prevRows.push({ token: "testToken1" } as TokenInfoModel) })
    }

    const createFundSummary = (): FundSummaryRow => {
        function getRandomInt(max: number) {
            return Math.floor(Math.random() * max);
        }
        const fakeSummary = {
            id: fundName,
            AUM: getRandomInt(1000),
            investors: getRandomInt(100),
            totalReturnValue: getRandomInt(1000),
            totalReturnPercent: getRandomInt(100)
        }

        return fakeSummary
    }

    const onClickSave = () => {
        if (validPortfolioPercent()) {
            const portfolio = { tokens: [...rows] }
            dispatch(postFund({ id: fundName, ownerEmail: "hardcoded", isOwner: true, isInvestor: false, portfolio, portfolioSummary: createFundSummary() }))
        }
        else {
            alert("Your addition is wrong. Tokens must add up to 100% of portfolio.")
        }
    }


    /**
     * Removes a row from the portfolio editor.
     * @param row the index of the row to remove
     */
    const removeRow = (row: number) => {
        if (row === 0) {
            setRows(prevRows => { prevRows.length > 1 ? prevRows.shift() : prevRows = [{ token: "testToken1" } as TokenInfoModel] })
        } else if (row === rows.length - 1) {
            setRows(prevRows => { prevRows.pop() })
        } else {
            setRows(prevRows => { prevRows.splice(row, 1) })
        }
    }

    const validPortfolioPercent = () => {
        let total = 0
        rows.forEach(tokenInfo => total += Number(tokenInfo.portfolioPercent))
        return total === 100 ? true : false
    }


    return (

        <div className="portfolio__container">
            <h1 className="portfolio__header">Create Fund</h1>

            <div className="portfolio__table">
                <PortfolioHeaders />
                {rows && rows.map((row, index) => (
                    <InputRow
                        key={index}
                        onUpdateData={(key: keyof TokenInfoModel, value: any) => onUpdateData(index, key, value)}
                        onRemoveRow={() => removeRow(index)}
                        token={row.token}
                        portfolioPercent={row.portfolioPercent}
                        buyTarget={row.buyTarget}
                        sellTarget={row.sellTarget}
                    />
                ))}


                <Button type="dashed" onClick={() => addRow()} block icon={<PlusOutlined />}>
                    Add token
                </Button>


                <div className="portfolio__name">
                    Fund Name (acts as unique ID)
                    <Input value={fundName} onChange={onUpdateName} />
                </div>
            </div>
            <div>
                <Button onClick={onClickSave} style={{ color: validPortfolioPercent() ? "green" : "red" }}>Save</Button>
            </div>
        </div>
    )
}

export default Portfolio;

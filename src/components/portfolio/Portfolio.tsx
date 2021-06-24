import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

import { TokenInfoModel, PortfolioModel, FundModel } from './models';
import InputRow from './InputRow';
import { useSelector, useDispatch } from 'react-redux'
import { createFund } from '../../state/ducks/funds/FundsDuck'
import { Button, Input } from 'antd';
import PortfolioHeaders from './PortfolioHeaders';
import Nav2 from '../landing/Nav2';



import './Portfolio.scss';
import {dashboard, dashboardLoadAction} from "../../state/ducks/user/UserDuck";
import { useHistory } from "react-router-dom";


/**
 * A portfolio editor with rows and columns for changing information
 * about which tokens to buy/sell, when to buy/sell them, and how much to buy.
 */
export const Portfolio = () => {

    const history = useHistory();
    const [rows, setRows] = useState([{ token: "testToken1" } as TokenInfoModel]);
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
    const onUpdateData = (row: number, dataKey: string, dataValue: any) => {
        setRows(prevRows => (
            [...prevRows.slice(0, row),
            { ...prevRows[row], [dataKey]: dataValue },
            ...prevRows.slice(row + 1)]
        ));
    }

    /**
     * Adds a new (empty) row to the portfolio editor.
     */
    const addRow = () => {
        setRows(prevRows => ([...prevRows, { token: "testToken1" } as TokenInfoModel]))
    }

    /**
     * Removes a row from the portfolio editor.
     * @param row the index of the row to remove
     */
    const removeRow = (row: number) => {
        if (row === 0) {
            setRows(prevRows => (prevRows.length > 1 ? [...prevRows.slice(1)] : [{ token: "testToken1" } as TokenInfoModel]))
        } else if (row === rows.length - 1) {
            setRows(prevRows => ([...prevRows.slice(0, row)]))
        } else {
            setRows(prevRows => ([...prevRows.slice(0, row), ...prevRows.slice(row + 1)]))
        }
    }

    const onClickSave = () => {
        dispatch(createFund({ id: fundName, ownerEmail: "hardcoded", portfolio: { tokens: [...rows] } }))
    }

    function loadDashboard() {
        history.push('/dashboard')
    }

    return (

        <div className="portfolio__container">
            <Nav2
                isMobile={false}
                onClickDashboard={loadDashboard}
            />
            <h1 className="portfolio__header">Create Fund</h1>

            <div className="portfolio__table">
                <PortfolioHeaders />
                {rows && rows.map((row, index) => (
                    <InputRow
                        key={index}
                        onUpdateData={(key: string, value: any) => onUpdateData(index, key, value)}
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
                <Button onClick={onClickSave}>Save</Button>
            </div>
        </div>
    )
}

export default Portfolio;

import React, { useState } from 'react';

import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { TokenType } from './models';
import InputRow from './InputRow';
import './Portfolio.scss';

/**
 * A portfolio editor with rows and columns for changing information
 * about which tokens to buy/sell, when to buy/sell them, and how much to buy.
 */
export const Portfolio = () => {
    interface InputRowType {
        token: TokenType
        portfolioPercent: string
        buyTarget: string
        sellTarget: string
    }

    const [rows, setRows] = useState([{} as InputRowType]);

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
            ...prevRows.slice(row + 1) ]
        ));
    }

    /**
     * Adds a new (empty) row to the portfolio editor.
     */
    const addRow = () => {
        setRows(prevRows => ([...prevRows, {} as InputRowType]))
    }

    /**
     * Removes a row from the portfolio editor.
     * @param row the index of the row to remove
     */
    const removeRow = (row: number) => {
        if (row === 0) {
            setRows(prevRows => (prevRows.length > 1 ? [...prevRows.slice(1)] : [{} as InputRowType]))
        } else if (row === rows.length - 1) {
            setRows(prevRows => ([...prevRows.slice(0, row)]))
        } else {
            setRows(prevRows => ([...prevRows.slice(0, row), ...prevRows.slice(row + 1)]))
        }
    }

    const onClickSave = () => {
        alert("Saving data (no backend connected yet)");
    }

    return (
        <>
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
            <div>
                <Button onClick={() => onClickSave}>Save</Button>
            </div>
        </>
    )
}

export default Portfolio;

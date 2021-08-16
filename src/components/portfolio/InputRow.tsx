import React from 'react';

import { InputNumber, Select } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';

import { TokenType } from '../models/models';
import * as PortfolioConstants from './PortfolioConstants';

import './InputRow.scss';

/**
 * Component for inputting a row into the portfolio, where a row
 * represents a unique token that will be purchased.
 */
interface InputRowProps {
    onUpdateData: any
    onRemoveRow: () => void
    token: TokenType
    portfolioPercent: string
    buyTarget: string
    sellTarget: string
}
const InputRow = (
    {
        onUpdateData,
        onRemoveRow,
        token,
        portfolioPercent,
        buyTarget,
        sellTarget
    }: InputRowProps) => {

    const onChangeToken = (value: TokenType, _: any) => {
        onUpdateData("token", value);
    };

    const onChangePortfolioPercent = (value: string) => {
        onUpdateData("portfolioPercent", value);
    };

    const onChangeBuyTarget = (value: string) => {
        onUpdateData("buyTarget", value);
    };

    const onChangeSellTarget = (value: string) => {
        onUpdateData("sellTarget", value);
    };

    return (
        <div className="row-container">
            <Select
                style={{ minWidth: PortfolioConstants.TOKEN_WIDTH }}
                value={token}
                defaultValue="testToken1"
                onChange={onChangeToken}
                id="options"
            >
                <Select.Option value="testToken1">Test Token 1</Select.Option>
                <Select.Option value="testToken2">Test Token 2</Select.Option>
                <Select.Option value="testToken3">Test Token 3</Select.Option>
                <Select.Option value="testToken4">Test Token 4</Select.Option>
                <Select.Option value="testToken5">Test Token 5</Select.Option>
            </Select>
            <InputNumber
                min={"0"}
                style={{ minWidth: PortfolioConstants.PORTFOLIO_PERCENT_WIDTH }}
                value={portfolioPercent}
                onChange={onChangePortfolioPercent}
            />
            <InputNumber
                min={"0"}
                style={{ minWidth: PortfolioConstants.BUY_TARGET_WIDTH }}
                value={buyTarget}
                onChange={onChangeBuyTarget}
            />
            <InputNumber
                min={"0"}
                style={{ minWidth: PortfolioConstants.SELL_TARGET_WIDTH }}
                value={sellTarget}
                onChange={onChangeSellTarget}
            />
            <MinusCircleOutlined onClick={onRemoveRow} />
        </div>
    );
};

export default InputRow;

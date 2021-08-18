import axios from 'axios';
import { FundModel, FundSummaryRow } from '../components/models/models';
import { mockServerBase } from './api';
import { useMemo } from 'react';

export const http = axios.create({
    baseURL: mockServerBase
});

export const getFunds = async () => {
    console.log("FETCHING FUNDS");
    const { data } = await http.get<FundModel[]>("/funds")  
    return data
}

export const fundSummarySelector = (funds: FundModel[]): FundSummaryRow[] => {
    console.log("Funds Summary Selector");
    return funds.map(fund => fund.portfolioSummary)
}
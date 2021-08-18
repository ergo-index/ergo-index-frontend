import axios from 'axios';
import { FundModel, FundSummaryRow } from '../components/models/models';
import { mockServerBase } from './api';

export const http = axios.create({
    baseURL: mockServerBase
});

export const getFunds = async () => {
    const { data } = await http.get<FundModel[]>("/funds")  
    return data
}

export const fundSummarySelector = (funds: FundModel[]): FundSummaryRow[] => {
    return funds.map(fund => fund.portfolioSummary)
}
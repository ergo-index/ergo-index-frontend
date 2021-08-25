import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { mockServerBase } from '../../api/api';
import { FundModel, FundSummaryRow } from '../../models/models';

export const fundsApi = createApi({
  reducerPath: 'fundsApi',
  baseQuery: fetchBaseQuery({ baseUrl: mockServerBase }),

  endpoints: (build) => ({
    getFundSummaries: build.query<FundSummaryRow[], void>({
      query: () => `funds/`,
      transformResponse: (rawResult: FundModel[]) => {
        return rawResult.map(fund => fund.portfolioSummary)
      },
    }),
  }),
});

export const { useGetFundSummariesQuery, useLazyGetFundSummariesQuery, usePrefetch } = fundsApi;
 
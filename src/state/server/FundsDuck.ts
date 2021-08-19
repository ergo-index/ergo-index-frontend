/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { mockServerBase } from '../../api/api'
import { FundModel, FundSummaryRow } from '../../models/models'

// Define a service using a base URL and expected endpoints
export const fundsApi = createApi({
  reducerPath: 'fundsApi', // unique key that your service will be mounted to in your store.
  baseQuery: fetchBaseQuery({ baseUrl: mockServerBase }), // All queries for this service based off this URL -  https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery

  // All endpoints for this service live here - https://redux-toolkit.js.org/rtk-query/usage/queries -
  endpoints: (build) => ({
    //                              ResultType      QueryArgType
    //                                  v             v
    getFundSummaries: build.query<FundSummaryRow[], void>({
      // Args inferred `void` from the `QueryArg` type
      //       v
      query: () => `funds/`,
      // An explicit type must be provided to the raw result that the query returns when using `transformResponse`
      //                                           v
      transformResponse: (rawResult: FundModel[]) => {
        // The return value for `transformResponse` must match `ResultType` 
        return rawResult.map(fund => fund.portfolioSummary)
      },
    }),
  }),
})

// https://redux-toolkit.js.org/rtk-query/api/created-api/hooks#usequery
export const { useGetFundSummariesQuery, useLazyGetFundSummariesQuery, usePrefetch } = fundsApi;

 
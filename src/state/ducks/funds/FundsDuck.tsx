import { FundModel, FundState } from "../../../components/models/models";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store';
import _ from 'lodash';
import { http } from "../../../api/fundsApi";



// The default state of the fund
const initialState: FundState = {
  funds: {}
};

const fundSlice = createSlice({
  name: "funds",
  initialState,
  reducers: {
    // Payload is ID of fund to delete
    deleteFund(state, action: PayloadAction<string>) {
      delete state.funds[action.payload]
    },
    updateFund(state, action: PayloadAction<FundModel>) {
      state.funds[action.payload.id] = action.payload
    },
    createFund(state, action: PayloadAction<FundModel>) {
      state.funds[action.payload.id] = action.payload
    },
    fetchFunds(state, action: PayloadAction<FundModel[]>) {
      state.funds = _.mapKeys(action.payload, "id")
    },
  }
});

export const {
  deleteFund,
  updateFund,
  createFund,
  fetchFunds
} = fundSlice.actions;

export default fundSlice.reducer;


export const getAllFunds = (): AppThunk => async dispatch => {
  try {
    let response = await http.get<FundModel[]>("/funds")
    dispatch(fetchFunds(response.data))
  } catch (e) {
    console.log('Error: ', e.message)
  }
};

export const postFund = (fund: FundModel): AppThunk => async dispatch => {
  try {
    await http.post<FundModel>("/funds", fund)
    dispatch(createFund(fund))
  } catch (e) {
    console.log('Error: ', e.message)
  }
};


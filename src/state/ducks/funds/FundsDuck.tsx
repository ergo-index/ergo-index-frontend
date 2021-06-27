import { FundModel } from "../../../components/portfolio/models";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface FundState {
  funds: {
    [id: string]: FundModel
  }
}

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
      const { [action.payload]: _, ...newFunds } = state.funds;
      state.funds = newFunds;
    },
    updateFund(state, action: PayloadAction<FundModel>) {
      state.funds = { [action.payload.id]: action.payload, ...state.funds };
    },
    createFund(state, action: PayloadAction<FundModel>) {
      state.funds = { [action.payload.id]: action.payload, ...state.funds };
    },
  }
});

export const {
  deleteFund,
  updateFund,
  createFund,
} = fundSlice.actions;

export default fundSlice.reducer;



















// const DELETEFUND: string = 'UPDATEFUND';
// const UPDATEFUND: string = 'UPDATEFUND';
// const CREATEFUND: string = 'CREATEFUND';


// export default (state = initialState, action: any) => {
//   switch (action.type) {
//     // case DELETEFUND:
//     //   return _.omit(state, action.payload.id);
//     case UPDATEFUND:
//       return { ...state, [action.payload.id]: action.payload };
//     case CREATEFUND:
//       return { ...state, [action.payload.id]: action.payload };
//     default:
//       return state;
//   }
// };


// // action creators
// export const deleteFund = (id: string): AppThunk => async (dispatch) => {
//   // await requestToSomewhere.delete(`FUND/${id}`); - idfk
//   dispatch({ type: DELETEFUND, payload: { id } });
// };

// export const updateFund = (updatedFund: FundModel): AppThunk => async (dispatch) => {
//   // const response = await requestToSomewhere.put(`FUND/${id}`, updateFUND);
//   dispatch({ type: UPDATEFUND, payload: updatedFund });
// };

// export const createFund = (newFund: FundModel): AppThunk => async (dispatch) => {
//   // const response = await requestToSomewhere.post(`FUND/${id}`, neFUND);
//   dispatch({ type: CREATEFUND, payload: newFund });
// };


// interface FundState {
//   funds: {
//     [id: string]: FundModel
//   }
// }

// // The default state of the fund
// const initialState: FundState = {
//   funds: {}
// };
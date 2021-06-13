
import {
  Fund
} from "../../../components/portfolio/models";
import { AppThunk } from '../../store';
// import _ from "lodash";


const DELETEFUND: string = 'UPDATEFUND';
const UPDATEFUND: string = 'UPDATEFUND';
const CREATEFUND: string = 'CREATEFUND';

interface FundState {
  funds: {
    [id: string]: Fund
  }
}

// The default state of the fund
const initialState: FundState = {
  funds: {}
};


export default (state = initialState, action: any) => {
  switch (action.type) {
    // case DELETEFUND:
    //   return _.omit(state, action.payload.id);
    case UPDATEFUND:
      return { ...state, [action.payload.id]: action.payload };
    case CREATEFUND:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};


// action creators
export const deleteFund = (id: string): AppThunk => async (dispatch) => {
  // await requestToSomewhere.delete(`FUND/${id}`); - idfk
  dispatch({ type: DELETEFUND, payload: { id } });
};

export const updateFund = (updatedFund: Fund): AppThunk => async (dispatch) => {
  // const response = await requestToSomewhere.put(`FUND/${id}`, updateFUND);
  dispatch({ type: UPDATEFUND, payload: updatedFund });
};

export const createFund = (newFund: Fund): AppThunk => async (dispatch) => {
  // const response = await requestToSomewhere.post(`FUND/${id}`, neFUND);
  dispatch({ type: CREATEFUND, payload: newFund });
};

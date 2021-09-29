import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

import { AppThunk } from '../store';
import {
  apiLoadProfile,
  UserModel,
} from '../../api/userApi';

interface UserState {
  profile: UserModel | null
  profileLoading: 'idle' | 'pending'
  profileErrMsg: string
}

// The default state of the user
const initialState: UserState = {
  profile: null,
  profileLoading: 'idle',
  profileErrMsg: '',
};

// Create a slice that makes actions and reducers for us
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadProfileStartAction(state) {
      if (state.profileLoading === 'idle') state.profileLoading = 'pending';
    },
    loadProfileSuccessAction(state, action: PayloadAction<UserModel>) {
      if (state.profileLoading === 'pending') {
        state.profile = action.payload;
        state.profileErrMsg = '';
        state.profileLoading = 'idle';
      }
    },
    loadProfileFailAction(state, action: PayloadAction<string>) {
      if (state.profileLoading === 'pending') {
        state.profileErrMsg = action.payload;
        state.profileLoading = 'idle';
      }
    },
  },
});

export const {
  loadProfileStartAction,
  loadProfileSuccessAction,
  loadProfileFailAction,
} = userSlice.actions;

export default userSlice.reducer;

/**
 * Loads the user's profile, including information about funds they're invested in.
 * @param user the auth user whose profile information will be loaded
 */
export const loadProfile = (user: User): AppThunk => async (dispatch) => {
  dispatch(loadProfileStartAction());
  apiLoadProfile(user)
    .then((response) => {
      dispatch(loadProfileSuccessAction(response.data));
    })
    .catch((error) => {
      console.log(error.toString());
      if (error.response) {
        if (error.response.status === 401) { // Unauthorized -- log the user out
        }
      }
      dispatch(loadProfileFailAction('There was a problem loading your profile.'));
    });
};

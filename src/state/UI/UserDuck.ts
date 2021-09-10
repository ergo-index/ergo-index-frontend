import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';
import { message } from 'antd';

import { AppThunk } from '../store';
import {
  apiLoadProfile,
  apiLogInUser, apiSignUpUser,
  setupJwtInterceptor,
  teardownJwtInterceptor,
  UserModel
} from '../../api/userAPI';

interface UserState {
  profile: UserModel | null
  loginLoading: 'idle' | 'pending'
  signUpLoading: 'idle' | 'pending'
  profileLoading: 'idle' | 'pending'
  errMsg: string
  isAuthenticated: boolean | null
  jwtAxiosId: number | null
}

// The default state of the user
const initialState: UserState = {
  profile: null,
  loginLoading: 'idle',
  signUpLoading: 'idle',
  profileLoading: 'idle',
  errMsg: '',
  isAuthenticated: null,
  jwtAxiosId: null
};

// Create a slice that makes actions and reducers for us
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthenticationCheckedAction(state) {
      if (state.isAuthenticated === null) state.isAuthenticated = false
    },
    loginStartAction(state) {
      if (state.loginLoading === 'idle') state.loginLoading = 'pending';
    },
    loginSuccessAction(state) {
      state.errMsg = '';
      state.isAuthenticated = true;
      state.loginLoading = 'idle';
    },
    loginFailAction(state, action: PayloadAction<string>) {
      state.errMsg = action.payload
      state.isAuthenticated = false
      state.loginLoading = 'idle'
    },
    signUpStartAction(state) {
      if (state.signUpLoading === 'idle') state.signUpLoading = 'pending';
    },
    signUpSuccessAction(state) {
      state.errMsg = '';
      state.isAuthenticated = true;
      state.signUpLoading = 'idle';
    },
    signUpFailAction(state, action: PayloadAction<string>) {
      state.errMsg = action.payload
      state.isAuthenticated = false
      state.signUpLoading = 'idle'
    },
    logoutAction(state) {
      state.isAuthenticated = false;
      state.errMsg = '';
    },
    loadProfileStartAction(state) {
      if (state.profileLoading === 'idle') state.profileLoading = 'pending';
    },
    loadProfileSuccessAction(state, action: PayloadAction<UserModel>) {
      if (state.profileLoading === 'pending') {
        state.profile = action.payload;
        state.errMsg = '';
        state.profileLoading = 'idle';
      }
    },
    loadProfileFailAction(state, action: PayloadAction<string>) {
      if (state.profileLoading === 'pending') {
        state.errMsg = action.payload;
        state.profileLoading = 'idle';
      }
    },
    setJwtAxiosIdAction(state, action: PayloadAction<number | null>) {
      state.jwtAxiosId = action.payload;
    },
    clearErrMsgAction(state) {
      state.errMsg = '';
    }
  }
});

export const {
  setAuthenticationCheckedAction,
  loginStartAction,
  loginSuccessAction,
  loginFailAction,
  signUpStartAction,
  signUpSuccessAction,
  signUpFailAction,
  logoutAction,
  loadProfileStartAction,
  loadProfileSuccessAction,
  loadProfileFailAction,
  setJwtAxiosIdAction,
  clearErrMsgAction
} = userSlice.actions;

export default userSlice.reducer;

/**
 * Logs a user in by:
 * 1. updating the loginLoading state to 'pending'
 * 2. attempting to login (generate a JWT) using the given email and password
 * 3. updating the loginLoading state to 'idle'
 * 4. if successful, setting the JWT axios interceptor (to automatically add
 *    (the JWT to future API calls for automatic authentication) and setting a
 *    cookie to save the JWT
 * 5. if unsuccessful, setting an error message
 * @param email the email address of the user to login
 * @param password the password associated with the given email address
 * @param jwtAxiosId the ID of the axios interceptor, or null if it's not setup (it should be null when logging in)
 */
export const logIn = (
  email: string,
  password: string,
  jwtAxiosId: number | null
): AppThunk => async dispatch => {
  dispatch(loginStartAction());
  apiLogInUser(email, password)
    .then(response => {
      dispatch(loginSuccessAction());
      dispatch(setJwt(response.data.access, jwtAxiosId));
      dispatch(loadProfile(jwtAxiosId, email));
    })
    .catch(_ => {
      dispatch(loginFailAction("Wrong email/password combination"));
    })
};

/**
 * Attempts to create a new user with the given information, updating the signUpLoading state during the process.
 * @param email the (unique) email address of the new user
 * @param name the name of the new user
 * @param password the password of the new user
 * @param jwtAxiosId the ID of the axios interceptor, or null if it's not setup (it should be null when signing up)
 */
export const signUp = (
    email: string,
    password: string,
    name: string,
    jwtAxiosId: number | null
): AppThunk => async dispatch => {
  dispatch(signUpStartAction());
  apiSignUpUser(email, password, name)
      .then(_ => {
        dispatch(signUpSuccessAction())
        dispatch(logIn(email, password, jwtAxiosId))
      }).catch(error => {
        if (error.response && error.response.data && error.response.data.error) {
          // TODO: Use the actual response instead of just pretending the error is from a duplicate email
          // (Make backend changes to send an error message in this format)
        }
        dispatch(signUpFailAction("Unable to create an account with that email address because it already exists in the system."));
  })
}

export const setJwt = (
    jwt: string | null,
    jwtAxiosId: number | null
): AppThunk => async dispatch => {
  if (jwt === null && jwtAxiosId !== null) {
    teardownJwtInterceptor(jwtAxiosId);
    setJwtAxiosIdAction(null);
  } else if (jwt !== null) {
    const decodedJwt = jwt_decode<{ exp: number }>(jwt);
    setCookie("ERGO_INDEX_FUND", jwt, decodedJwt.exp);
    setJwtAxiosIdAction(setupJwtInterceptor("Bearer " + jwt));
  } else {
    console.log("ERROR: The JWT and axios interceptor ID were not both set or both unset. " +
        "This should never happen -- they should either both have a value or both be unset.");
  }
};

/**
 * Logs the user out.
 * @param jwtAxiosId the ID of the axios interceptor, or null if it's not setup
 * @param staleSession true if the reason for being logged out is that the session was stale
 */
export const logOut = (
    jwtAxiosId: number | null,
    staleSession?: boolean
): AppThunk => async dispatch => {
  dispatch(setJwt(null, jwtAxiosId));
  document.cookie = "ERGO_INDEX_FUND=";
  dispatch(logoutAction());
  if (staleSession) {
    message.info('You have been automatically logged out due to inactivity');
  }
};

/**
 * Loads all data needed to view the dashboard
 * @param jwtAxiosId
 */
export const dashboard = (
    jwtAxiosId: number | null
): AppThunk => async dispatch => {
  // TODO: Load funds and anything else needed to view the dashboard (don't re-load funds if they're already loaded)
  // You could do this in a stateful way like how login has loginLoading = 'pending' | 'idle' and display
  // a loading bar on Dashboard.tsx when loginLoading === 'pending'
};

/**
 * Checks the browser's cookies to see if the user is authenticated, and
 * automatically logs them in if they are.
 * @param jwtAxiosId the ID of the axios interceptor, or null if it's not setup
 */
export const checkAuthentication = (
    jwtAxiosId: number | null
): AppThunk => async dispatch => {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    if (cookie.split("=")[0] === "ERGO_INDEX_FUND" && cookie.split("=")[1]) {
      // TODO: Check if cookie expired? Or do they get removed automatically?
      dispatch(loginSuccessAction());
      dispatch(setJwt(cookie.split("=")[1], jwtAxiosId));
      return;
    }
  }
  setTimeout(() => {
    dispatch(setAuthenticationCheckedAction())
  }, 1)
};

/**
 * Loads the user's profile, including information about funds they're invested in.
 * @param jwtAxiosId the ID of the axios interceptor, or null if it's not setup
 * @param email the email address of the user to load the profile of
 */
// TODO: Change the backend to use the JWT's email if none is provided (and make this param optional here)
export const loadProfile = (
    jwtAxiosId: number | null,
    email: string
): AppThunk => async dispatch => {
  dispatch(loadProfileStartAction())
  apiLoadProfile(email)
      .then(response => {
        dispatch(loadProfileSuccessAction(response.data))
      })
      .catch(error => {
        console.log(error.toString())
        if (error.response) {
          if (error.response.status === 401) { // Unauthorized -- log the user out
            dispatch(logOut(jwtAxiosId, true))
          }
        }
        dispatch(loadProfileFailAction("There was a problem loading your profile."))
      });
};

/**
 * Stores in the user's browser a cookie that contains the JWT. This allows
 * the website to retrieve this cookie next time they re-visit the site, preventing
 * the need for the user to re-login.
 * @param name the name of the cookie
 * @param value the value of the cookie
 * @param expire the number of seconds after which the cookie will expire
 */
const setCookie = (name: string, value: string, expire: number) => {
  let expireDate = new Date(expire * 1000);
  document.cookie = (name + " = " + value +
    "; expires = " + expireDate.toUTCString() //+
    //"; site=ergo-index.fund; secure; samesite
    )
  // TODO: Uncomment security additions when running in prod
  // TODO: Store refresh token as cookie instead of access token since this way is very insecure
};

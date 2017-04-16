

/**
  Login actions and action creators
*/
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const loginRequest = (payload, meta) => ({
    type: LOGIN_REQUEST,
    payload,
    meta,
});


export const LOGIN_SUCCEED = 'LOGIN_SUCCEED';
export const loginSucceed = (user) => ({
    type: LOGIN_SUCCEED,
    user
});


export const LOGIN_FAILED = 'LOGIN_FAILED';
export const loginFailed = (errors) => ({
    type: LOGIN_FAILED,
    errors,
});


/**
  Logout actions and action creators
*/
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const LOGOUT_SUCCEED = 'LOGOUT_SUCCEED';
export const logoutSucceed = () => ({
  type: LOGOUT_SUCCEED,
});

export const LOGOUT_FAILED = 'LOGOUT_FAILED';
export const logoutFailed = (errors) => ({
  type: LOGOUT_FAILED,
  errors,
});


/**
  Sign up actions and action creators
*/
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const signupRequest = (payload, meta) => ({
    type: SIGNUP_REQUEST,
    payload,
    meta,
});


export const SIGNUP_SUCCEED = 'SIGNUP_SUCCEED';
export const signupSucceed = (user) => ({
    type: SIGNUP_SUCCEED,
    user,
});

export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const signupFailed = (errors) => ({
  type: SIGNUP_FAILED,
  errors,
});


/**
  DATA actions and action creators
*/
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const fetchDataStart = (values) => ({
  type: FETCH_DATA_START,
  payload: {
    values,
  }
});

export const FETCH_DATA_SUCCEED = 'FETCH_DATA_SUCCEED';
export const fetchDataSucceed = (data) => ({
  type: FETCH_DATA_SUCCEED,
  data,
});

export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';
export const fetchDataFailed = (error) => ({
  type: FETCH_DATA_FAILED,
  error,
});

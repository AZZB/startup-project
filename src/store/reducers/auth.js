import { LOGIN_SUCCEED, LOGIN_FAILED, SIGNUP_SUCCEED, SIGNUP_FAILED, LOGOUT_SUCCEED } from '../actions/auth';


const initialState = {
  currentUser: null,
  errors: null,
};

function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCEED:
      return Object.assign({}, state, {currentUser: action.user, errors: null});
    case LOGIN_FAILED:
      return Object.assign({}, state, {currentUser: null, errors: action.errors});
    case LOGOUT_SUCCEED:
      return initialState;
    case SIGNUP_SUCCEED:
      return state;
    case SIGNUP_FAILED:
      return state
    default:
      return state;
  }
}


export default auth;

import { fork, put } from 'redux-saga/effects';
import { getLoggedUser } from '../endpoints/api/auth';
import { loginSucceed, logoutRequest } from '../actions/auth';



export default function* init() {
  yield [
    fork(loggedUser)
  ]
}


function* loggedUser() {
  try {
    const token = localStorage.getItem('token@toshare');

    if(token) {
      const result = yield getLoggedUser(token);
      if(result.success) yield put(loginSucceed(result.user));
    }

  } catch (e) {
    console.log(e);
    yield put(logoutRequest());
  }
}

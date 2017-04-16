import { take, call, put, takeLatest } from 'redux-saga/effects';
import { GET_USER_USERNAME_REQUEST } from '../actions/user';
import { setProfileSpinner } from '../actions/ui';
import { getUserByUsernameSuccess, getUserByUsernameFailed} from '../actions/user';
import * as UserApi from '../endpoints/api/user';



export default function* watchUser() {
  yield [
    takeLatest(GET_USER_USERNAME_REQUEST, requestUserByUsername),
  ]
}


function* requestUserByUsername(action) {
  try {
    yield put(setProfileSpinner(true));
    const user = yield UserApi.getUserByUsername(action.username);
    console.log('user for profile: ', user);
    yield put(setProfileSpinner(false));
  } catch (e) {
    console.log(e);
    yield put(setProfileSpinner(false));
  }
}

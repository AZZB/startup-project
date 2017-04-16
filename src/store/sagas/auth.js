import { take, call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { SubmissionError } from 'redux-form';
import {
  LOGIN_REQUEST, LOGOUT_REQUEST, SIGNUP_REQUEST,
  loginSucceed, loginFailed, signupSucceed, signupFailed, logoutSucceed
 } from '../actions/auth';

import * as Api from '../endpoints/api/auth';
import HttpError from '../endpoints/HttpError';

export default function* watchAuth() {
  yield [
    takeLatest(SIGNUP_REQUEST, register),
    takeLatest(LOGIN_REQUEST, login),
    takeLatest(LOGOUT_REQUEST, logout),
  ]
}


function* register(action) {
  try {
    const result = yield call(Api.signUp, action.payload);
    if(result.success) yield put(push('/login'));
  } catch (e) {
    console.log('HttpError : ', e);
    const {errors} = yield e.json();
    action.meta.reject(new SubmissionError(errors));
  }

}


function* login(action) {
  try {
    const result = yield call(Api.login, action.payload);
    if(result.success) {
      localStorage.setItem('token@toshare', result.token);
      yield put(loginSucceed(result.user));
      yield put(push('/'));
    } else {
      yield put(loginFailed(result.message));
    }
  } catch (e) {
    const {errors} = yield e.json();
    action.meta.reject(new SubmissionError(errors));
  }

}


function* logout() {
  localStorage.removeItem('token@toshare');
  yield put(logoutSucceed())
  yield put(push('/login'));
}

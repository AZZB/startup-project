import { fork } from 'redux-saga/effects';
import auth from './auth';
import user from './user';
import init from './init';

export default function* main() {
  yield [
    fork(init),
    fork(auth),
    fork(user),
  ]
}

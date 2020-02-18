import { all } from 'redux-saga/effects';
import { songsSaga } from './songs/saga';

export function* rootSaga(services = {}) {
  yield all([songsSaga()]);
}

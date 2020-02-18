import { call, put, takeLatest } from 'redux-saga/effects';

import { get } from '../../common/axios';

import {
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_STARTED,
} from './consts';

export function* fetchSongs({ payload }) {
  try {
    const { term } = payload;
    const request = yield call(get, `search?entity=song&limit=100&term=${term}`);
    console.log(request);
    yield put({ type: FETCH_SONGS_SUCCESS, payload: request });
  } catch (e) {
    yield put({ type: FETCH_SONGS_FAILURE, message: e });
  }
}

export function* songsSaga() {
  yield takeLatest(FETCH_SONGS_STARTED, fetchSongs);
}
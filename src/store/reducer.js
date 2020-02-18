import { combineReducers } from 'redux';

import { songsReducer } from './songs/reducer';

const reducers = {
  songs: songsReducer,
};

export const rootReducer = combineReducers(reducers);
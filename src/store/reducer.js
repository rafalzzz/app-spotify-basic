import { combineReducers } from 'redux';

import { fetchSongsReducer } from './fetchSongs/reducer';
import { favSongsReducer } from './favSongs/reducer'

const reducers = {
  fetchSongs: fetchSongsReducer,
  favSongs: favSongsReducer
};

export const rootReducer = combineReducers(reducers);
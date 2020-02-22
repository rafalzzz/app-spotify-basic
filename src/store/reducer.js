import { combineReducers } from 'redux';

import { fetchSongsReducer } from './fetchSongs/reducer';
import { favSongsReducer } from './favSongs/reducer'
import { playlistReducer } from './playlists/reducer'
import { currentItemsReducer } from './currentItems/reducer'

const reducers = {
  fetchSongs: fetchSongsReducer,
  favSongs: favSongsReducer,
  playlists: playlistReducer,
  currentItems: currentItemsReducer
};

export const rootReducer = combineReducers(reducers);
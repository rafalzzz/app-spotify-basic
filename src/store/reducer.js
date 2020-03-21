import { combineReducers } from "redux";

import { fetchSongsReducer } from "./fetchSongs/reducer";
import { favSongsReducer } from "./favSongs/reducer";
import { playlistReducer } from "./playlists/reducer";
import { currentItemsReducer } from "./currentItems/reducer";
import { playerReducer } from "./player/reducer";

const reducers = {
  fetchSongs: fetchSongsReducer,
  favSongs: favSongsReducer,
  playlists: playlistReducer,
  currentItems: currentItemsReducer,
  player: playerReducer
};

export const rootReducer = combineReducers(reducers);

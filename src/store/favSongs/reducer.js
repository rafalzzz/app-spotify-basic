import {
  ADD_SONG_TO_FAV_LIST, 
  DELETE_SONG_FROM_FAV_LIST, 
} from './consts';

export const favSongsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SONG_TO_FAV_LIST:
      return [
        ...state,
        action.payload
      ]
    case DELETE_SONG_FROM_FAV_LIST:
      return state.filter(song =>
        song.song.previewUrl !== action.id)
    default:
      return state;
  }
};
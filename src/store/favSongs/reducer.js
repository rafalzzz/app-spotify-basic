import {
  ADD_SONG_TO_FAV_LIST, 
  DELETE_SONG_FROM_FAV_LIST, 
} from './consts';

const initialState = []

export const favSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG_TO_FAV_LIST:
      return [
        ...state,
        action.payload
      ]
    case DELETE_SONG_FROM_FAV_LIST:
      return state.filter(song =>
        song.song.previewUrl !== action.payload.id)
    default:
      return state;
  }
};
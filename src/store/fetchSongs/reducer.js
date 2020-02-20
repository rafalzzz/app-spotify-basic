import {
  FETCH_SONGS_STARTED,
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_SUCCESS,
} from './consts';

export const initialState = {
  songs: [],
  songsLoading: false,
  isError: false,
};

export const fetchSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS_STARTED:
      return {
        ...state,
        songs: [],
        songsLoading: true,
        isError: false,
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        songs: action.payload,
        songsLoading: false,
        isError: false,
      };
    case FETCH_SONGS_FAILURE:
      return {
        ...state,
        songs: [],
        songsLoading: false,
        isError: true,
      };
    default:
      return { ...state };
  }
};
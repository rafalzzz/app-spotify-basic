import {
  FETCH_SONGS_STARTED,
  FETCH_SONGS_FAILURE,
  FETCH_SONGS_SUCCESS
} from "./consts";

export const initialState = {
  songs: [],
  isLoading: false,
  isError: false
};

export const fetchSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS_STARTED:
      return {
        ...state,
        songs: [],
        isLoading: true,
        isError: false
      };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        songs: action.payload,
        isLoading: false,
        isError: false
      };
    case FETCH_SONGS_FAILURE:
      return {
        ...state,
        songs: [],
        isLoading: false,
        isError: true
      };
    default:
      return { ...state };
  }
};

import { 
  ADD_SONG_TO_PLAYLIST,
  DELETE_MUSIC_FROM_PLAYLIST,
  CREATE_PLAYLIST, 
  DELETE_PLAYLIST
} from "./consts";

const initialState = []

export const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG_TO_PLAYLIST:
      console.log(action)
      // eslint-disable-next-line array-callback-return
      return state.forEach(playlist => {
        if (playlist.name === action.payload.name) {
          playlist.songs.push(action.payload.song)
        }
        })  
    case DELETE_MUSIC_FROM_PLAYLIST:
      console.log(action)
      return state.forEach(playlist => {
        if (playlist.name === action.payload.name) {
          playlist.songs.filter(song =>
            song.previewUrl !== action.payload.song.previewUrl)
        }
        })
    case CREATE_PLAYLIST:
      console.log(action)
      return [
        ...state,
        {
          name: action.payload.name,
          songs: [],
        }
      ]
    case DELETE_PLAYLIST:
      console.log(action)
      return state.filter(playlist =>
        playlist.name !== action.payload.name)
    default:
      return state;
  }
};
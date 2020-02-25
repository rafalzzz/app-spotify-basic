import { 
  CURRENT_SONG, 
  CURRENT_PLAYLIST,
  PLAY_OR_STOP,
  PLAY_THIS_SONG
} from "./consts";

const initialState = {
  song: {song: {previewUrl: ""}},
  playlist: "",
  play: false,
  currentPlayed: {song: {previewUrl: ""}}
}

export const currentItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_SONG:
      console.log(action)
      return { ...state,
        song: action.payload
      }  
    case CURRENT_PLAYLIST:
      console.log(action)
      return { ...state,
        playlist: action.payload.name
      }
    case PLAY_OR_STOP:
      console.log(action)
      return { ...state,
        play: action.payload.play
      }
    case PLAY_THIS_SONG:
      console.log(action)
      return { ...state,
        currentPlayed: action.payload.song
      }
    default:
      return state;
  }
};
import { 
  CURRENT_SONG, 
  CURRENT_INDEX,
  CURRENT_PLAYLIST,
  PLAY_OR_STOP,
  SHUFFLE,
  PLAY_THIS_SONG,
  CURRENT_CATEGORY,
  PLAY_NEXT_SONG,
  PLAY_PREV_SONG
} from "./consts";

const initialState = {
  song: {song: {previewUrl: ""}},
  index: 0,
  category: "search",
  playlist: "",
  play: false,
  shuffle: false,
  currentPlayed: {song: {previewUrl: ""}},
}

export const currentItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_SONG:
      return { ...state,
        song: action.payload
      }  
    case CURRENT_INDEX:
      console.log(action)
      return { ...state,
        index: action.payload.id - 1
      }  
    case CURRENT_CATEGORY:
      console.log(action)
      return { ...state,
        category: action.payload.term
      }  
    case CURRENT_PLAYLIST:
      return { ...state,
        playlist: action.payload.name
      }
    case PLAY_OR_STOP:
      return { ...state,
        play: action.payload.play
      }
    case SHUFFLE:
      return { ...state,
        shuffle: action.payload.shuffle
      }
    case PLAY_THIS_SONG:
      return { ...state,
        currentPlayed: action.payload.song
      }
    case PLAY_NEXT_SONG:
      return { ...state,
        index: state.index + action.payload.value
      }
    case PLAY_PREV_SONG:
      console.log(action)
      return { ...state,
        index: state.index - action.payload.value
      }
    default:
      return state;
  }
};
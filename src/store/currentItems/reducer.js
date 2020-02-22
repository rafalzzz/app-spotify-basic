import { 
  CURRENT_SONG, 
  CURRENT_PLAYLIST
} from "./consts";

const initialState = {
  song: "",
  playlist: ""
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
    default:
      return state;
  }
};
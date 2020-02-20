import { 
    ADD_SONG_TO_FAV_LIST, 
    DELETE_SONG_FROM_FAV_LIST, 
} from "./consts";


export const addSongToFav = payload => ({
    type: ADD_SONG_TO_FAV_LIST, 
    payload,
});

export const deleteSongFromFav = payload => ({
    type: DELETE_SONG_FROM_FAV_LIST,
    payload,
});
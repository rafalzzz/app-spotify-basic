import { 
    CURRENT_SONG, 
    CURRENT_PLAYLIST
} from "./consts";

export const setCurrentSong = payload => ({
    type: CURRENT_SONG, 
    payload,
});

export const setCurrentPlaylist = payload => ({
    type: CURRENT_PLAYLIST, 
    payload,
});


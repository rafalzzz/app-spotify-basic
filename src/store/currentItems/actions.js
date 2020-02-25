import { 
    CURRENT_SONG, 
    CURRENT_PLAYLIST,
    PLAY_OR_STOP,
    PLAY_THIS_SONG
} from "./consts";

export const setCurrentSong = payload => ({
    type: CURRENT_SONG, 
    payload,
});

export const setCurrentPlaylist = payload => ({
    type: CURRENT_PLAYLIST, 
    payload,
});

export const handlePlayOrStop = payload => ({
    type: PLAY_OR_STOP,
    payload
});

export const handlePlayThisSong = payload => ({
    type: PLAY_THIS_SONG,
    payload
});
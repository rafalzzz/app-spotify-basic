import { 
    ADD_SONG_TO_PLAYLIST,
    DELETE_MUSIC_FROM_PLAYLIST,
    CREATE_PLAYLIST, 
    DELETE_PLAYLIST
} from "./consts";

export const addSongToPlaylist = payload => ({
    type: ADD_SONG_TO_PLAYLIST, 
    payload,
});

export const deleteSongFromPlaylist = payload => ({
    type: DELETE_MUSIC_FROM_PLAYLIST, 
    payload,
});

export const createPlaylist = payload => ({
    type: CREATE_PLAYLIST, 
    payload,
});

export const deletePlaylist = payload => ({
    type: DELETE_PLAYLIST,
    payload,
});

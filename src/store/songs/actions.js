import { 
    FETCH_SONGS_STARTED, 
    FETCH_SONGS_SUCCESS, 
    FETCH_SONGS_FAILURE 
} from "./consts";


export const fetchSongsStarted = payload => ({
    type: FETCH_SONGS_STARTED, 
    payload
});

export const fetchSongsSuccess = payload => ({
    type: FETCH_SONGS_SUCCESS,
    payload,
});

export const fetchSongsFailure = () => ({type: FETCH_SONGS_FAILURE});
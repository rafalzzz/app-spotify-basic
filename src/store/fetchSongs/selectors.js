export const songsCount = state => state.fetchSongs.songs.resultCount;

export const songsArray = state => state.fetchSongs.songs.results;

export const loadingSongs = state => state.fetchSongs.songsLoading;

export const isError = state => state.fetchSongs.isError;

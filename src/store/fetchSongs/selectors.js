export const songsCount = state => state.fetchSongs.songs.resultCount;

export const songsArray = state => state.fetchSongs.songs.results;

export const songsArrayLength = state => state.fetchSongs.songs.resultCount;

export const isLoading = state => state.fetchSongs.isLoading;

export const isError = state => state.fetchSongs.isError;

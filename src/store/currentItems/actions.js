import {
  CURRENT_SONG,
  CURRENT_INDEX,
  CURRENT_CATEGORY,
  CURRENT_PLAYLIST,
  PLAY_OR_STOP,
  SHUFFLE,
  PLAY_THIS_SONG,
  PLAY_NEXT_SONG,
  PLAY_PREV_SONG
} from "./consts";

export const setCurrentSong = payload => ({
  type: CURRENT_SONG,
  payload
});

export const setCurrentIndex = payload => ({
  type: CURRENT_INDEX,
  payload
});

export const setCurrentCategory = payload => ({
  type: CURRENT_CATEGORY,
  payload
});

export const setCurrentPlaylist = payload => ({
  type: CURRENT_PLAYLIST,
  payload
});

export const handlePlayOrStop = payload => ({
  type: PLAY_OR_STOP,
  payload
});

export const handleShuffle = payload => ({
  type: SHUFFLE,
  payload
});

export const handlePlayThisSong = payload => ({
  type: PLAY_THIS_SONG,
  payload
});

export const handlePlayNextSong = payload => ({
  type: PLAY_NEXT_SONG,
  payload
});

export const handlePlayPrevSong = payload => ({
  type: PLAY_PREV_SONG,
  payload
});

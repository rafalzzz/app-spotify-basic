import {
  SET_PLAYED,
  SET_PIP,
  SET_CONTROLS,
  SET_LIGHT,
  SET_VOLUME,
  SET_MUTED,
  SET_LOADED,
  SET_DURATION,
  SET_PLAYBACK_RATE,
  SET_LOOP,
  SEEK_TO
} from "./consts";

export const setPlayed = payload => ({
  type: SET_PLAYED,
  payload
});

export const setPip = payload => ({
  type: SET_PIP,
  payload
});

export const setControls = payload => ({
  type: SET_CONTROLS,
  payload
});

export const setLight = payload => ({
  type: SET_LIGHT,
  payload
});

export const setVolume = payload => ({
  type: SET_VOLUME,
  payload
});

export const setMuted = payload => ({
  type: SET_MUTED,
  payload
});

export const setLoaded = payload => ({
  type: SET_LOADED,
  payload
});

export const setDuration = payload => ({
  type: SET_DURATION,
  payload
});

export const setPlaybackRate = payload => ({
  type: SET_PLAYBACK_RATE,
  payload
});

export const setLoop = payload => ({
  type: SET_LOOP,
  payload
});

export const seekTo = payload => ({
  type: SEEK_TO,
  payload
});

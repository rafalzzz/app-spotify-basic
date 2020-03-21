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

const initialState = {
  played: 0,
  pip: false,
  controls: false,
  light: false,
  volume: 0.8,
  muted: false,
  loaded: 0,
  duration: 0,
  playbackRate: 0,
  loop: false,
  seekTo: 0
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYED:
      console.log(action);
      return { ...state, played: action.payload.played };
    case SET_PIP:
      return { ...state, pip: action.payload.pip };
    case SET_CONTROLS:
      return { ...state, controls: action.payload.controls };
    case SET_LIGHT:
      return { ...state, light: action.payload.light };
    case SET_VOLUME:
      return { ...state, volume: action.payload.volume };
    case SET_MUTED:
      return { ...state, muted: action.payload.muted };
    case SET_LOADED:
      return { ...state, loaded: action.payload.loaded };
    case SET_DURATION:
      return { ...state, duration: action.payload.duration };
    case SET_PLAYBACK_RATE:
      return { ...state, playbackRate: action.payload.playbackRate };
    case SET_LOOP:
      return { ...state, loop: action.payload.loop };
    case SEEK_TO:
      return { ...state, seekTo: action.payload.seekTo };
    default:
      return state;
  }
};

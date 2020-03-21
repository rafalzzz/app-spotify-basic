import React from "react";

import { useSelector } from "react-redux";

import { NowPlayedSong } from "../../../../store/currentItems/selectors";

import { SongInfoLayout } from "./layout";

export const SongInfo = () => {
  const currentPlayedSong = useSelector(NowPlayedSong);

  return <SongInfoLayout currentPlayedSong={currentPlayedSong} />;
};

import React from "react";

import { SongInfo } from "./components/songInfo";
import { PlayerButtons } from "./components/playerButtons";
import { ReactMusicPlayer } from "./components/reactPlayer";
import { Bar } from "./components/bar";
import { Volume } from "./components/volume";

import { LayoutContainer } from "./layout.styled";

export const FooterLayout = React.forwardRef(({ currentPlayedSong }, ref) => {
  return (
    <LayoutContainer>
      <SongInfo />
      <div className="musicPlayer">
        <PlayerButtons />
        <ReactMusicPlayer />
        <Bar />
      </div>
      <Volume />
    </LayoutContainer>
  );
});

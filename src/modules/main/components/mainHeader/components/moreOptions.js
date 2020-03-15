import React from "react";

import { MoreOptionsContainer } from "./moreOptions.styled";

export const MoreOptions = ({
  moreOptionsIsOpen,
  handleAddSongToPlaylist,
  handleDeleteSongFromPlaylist,
  handleDeletePlaylist,
  currentPlaylistName,
  currentSongName
}) => (
  <MoreOptionsContainer>
    <div
      className="moreOptions"
      style={{ display: moreOptionsIsOpen ? "block" : "none" }}
    >
      <div
        onClick={handleAddSongToPlaylist(currentPlaylistName, currentSongName)}
      >
        Add music to playlist
      </div>
      <div
        onClick={handleDeleteSongFromPlaylist(
          currentPlaylistName,
          currentSongName
        )}
      >
        Delete music from playlist
      </div>
      <div onClick={handleDeletePlaylist(currentPlaylistName)}>
        Delete playlist
      </div>
    </div>
  </MoreOptionsContainer>
);

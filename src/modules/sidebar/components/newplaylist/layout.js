import React from "react";

import { NewPlaylistContainer } from "./layout.styled";

import { NewPlaylistForm } from "./components/newplaylistForm";

export const NewPlaylistLayout = ({
  handleOnSubmit,
  playlistFormIsOpen,
  handlePlaylistForm,
  handlePlaylistName,
}) => (
  <NewPlaylistContainer>
    <div onClick={handlePlaylistForm(playlistFormIsOpen)}>
      <i className="icon-plus" />
      New Playlist
    </div>
    <div style={{ display: playlistFormIsOpen ? "block" : "none" }}>
      <NewPlaylistForm
        handlePlaylistForm={handlePlaylistForm}
        handleOnSubmit={handleOnSubmit}
        handlePlaylistName={handlePlaylistName}
      />
      \
    </div>
  </NewPlaylistContainer>
);

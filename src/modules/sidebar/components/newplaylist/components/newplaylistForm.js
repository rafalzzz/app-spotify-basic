import React from "react";

import { NewPlaylistFormContainer } from "./newplaylistForm.styled";

export const NewPlaylistForm = ({
  handlePlaylistForm,
  handleOnSubmit,
  handlePlaylistName
}) => (
  <NewPlaylistFormContainer>
    <div className="formContainer">
      <div className="formContainerTitle">Create new playlist</div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Playlist name ..."
          onChange={handlePlaylistName}
        ></input>
        <div className="formContainerButtons">
          <button onClick={handlePlaylistForm()}>Cancel</button>
          <button type="submit">OK</button>
        </div>
      </form>
    </div>
  </NewPlaylistFormContainer>
);

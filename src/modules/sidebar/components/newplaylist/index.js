import React, { useState, useCallback } from "react";

import { useDispatch } from "react-redux";

import { createPlaylist } from "../../../../store/playlists/actions";

import { NewPlaylistLayout } from "./layout";

import { handleAddPlaylistToFirestore } from "../../../../helpers/FireStoreData";

export const NewPlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [playlistFormIsOpen, setPlaylistFormIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handlePlaylistForm = useCallback(
    (isOpen) => (event) => {
      if (isOpen === false) {
        setPlaylistFormIsOpen(true);
      } else if (isOpen === true) {
        setPlaylistFormIsOpen(false);
      }
    },
    [playlistFormIsOpen]
  );

  const handlePlaylistName = (e) => {
    e.preventDefault();
    setPlaylistName(e.target.value);
  };

  const handleCreatePlaylist = useCallback((name) => {
    dispatch(createPlaylist({ name }));

    handleAddPlaylistToFirestore(name);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (playlistName === "") {
      setPlaylistFormIsOpen(false);
    } else if (playlistName !== "") {
      handleCreatePlaylist(playlistName);
      setPlaylistName("");
      setPlaylistFormIsOpen(false);
    }
  };

  return (
    <NewPlaylistLayout
      playlistFormIsOpen={playlistFormIsOpen}
      handlePlaylistForm={handlePlaylistForm}
      handleOnSubmit={handleOnSubmit}
      handlePlaylistName={handlePlaylistName}
    />
  );
};

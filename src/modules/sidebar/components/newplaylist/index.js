import React, { useState, useCallback } from "react";

import { db } from "../../../../common/firebase";

import { useDispatch } from "react-redux";

import { createPlaylist } from "../../../../store/playlists/actions";

import { NewPlaylistLayout } from "./layout";
import { NewPlaylistContainer } from "./layout.styled";

export const NewPlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [playlistFormIsOpen, setPlaylistFormIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handlePlaylistForm = useCallback(
    event => () => {
      setPlaylistFormIsOpen(!playlistFormIsOpen);
    },
    []
  );

  const handlePlaylistName = e => {
    e.preventDefault();
    setPlaylistName(e.target.value);
  };

  const handleCreatePlaylist = useCallback(name => {
    dispatch(createPlaylist({ name }));

    db.collection("playlists")
      .doc(name)
      .set({
        name: name,
        songs: []
      })
      .then(function() {
        console.log("Playlist successfully created!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }, []);

  const handleOnSubmit = e => {
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
      onClick={handlePlaylistForm}
      handlePlaylistForm={handlePlaylistForm}
      handleOnSubmit={handleOnSubmit}
      handlePlaylistName={handlePlaylistName}
    />
  );
};

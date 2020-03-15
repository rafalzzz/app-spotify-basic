import React, { useState, useCallback, memo } from "react";

import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { MainHeaderLayout } from "./layout";

import {
  currentSong,
  currentPlaylist,
  playOrStop
} from "../../../../store/currentItems/selectors";

import { handlePlayOrStop } from "../../../../store/currentItems/actions";

import {
  addSongToPlaylist,
  deleteSongFromPlaylist,
  deletePlaylist
} from "../../../../store/playlists/actions";

import {
  handleAddSongToPlaylistOnFirestore,
  handleDeleteSongFromPlaylistOnFirestore,
  handleDeletePlaylistFromFirestore
} from "../../../../helpers/FireStoreData";

export const MainHeader = memo(() => {
  const [favListIsOpen, setFavListIsOpen] = useState(false);
  const [moreOptionsIsOpen, setMoreOptionsIsOpen] = useState(false);

  const currentPlaylistName = useSelector(currentPlaylist);
  const currentSongName = useSelector(currentSong);
  const playOrNot = useSelector(playOrStop);

  const dispatch = useDispatch();

  // Redirect to FavList function

  let history = useHistory();

  const handleOpenFavList = useCallback(event => {
    history.push("/user/favourite-list");
    setFavListIsOpen(true);
  }, []);

  const handleCloseFavList = useCallback(event => {
    history.push("/user/main");
    setFavListIsOpen(false);
  }, []);

  // PlayButton function

  const handlePlayPause = useCallback(
    event => {
      playOrNot
        ? dispatch(handlePlayOrStop({ play: false }))
        : dispatch(handlePlayOrStop({ play: true }));
    },
    [playOrNot]
  );

  // Open/Close more

  const handleMoreOptions = useCallback(
    event => {
      moreOptionsIsOpen
        ? setMoreOptionsIsOpen(false)
        : setMoreOptionsIsOpen(true);
    },
    [moreOptionsIsOpen]
  );

  // Playlists functions

  const handleAddSongToPlaylist = useCallback(
    (playlist, song) => event => {
      dispatch(addSongToPlaylist({ playlistName: playlist, song: song }));
      handleAddSongToPlaylistOnFirestore(playlist, song);
      setMoreOptionsIsOpen(false);
    },
    []
  );

  const handleDeleteSongFromPlaylist = useCallback(
    (playlist, song) => event => {
      dispatch(deleteSongFromPlaylist({ playlistName: playlist, song: song }));
      handleDeleteSongFromPlaylistOnFirestore(playlist, song);
      setMoreOptionsIsOpen(false);
    },
    []
  );

  const handleDeletePlaylist = useCallback(
    name => event => {
      dispatch(deletePlaylist({ name }));
      handleDeletePlaylistFromFirestore(name);
      setMoreOptionsIsOpen(false);
    },
    []
  );

  return (
    <MainHeaderLayout
      favListIsOpen={favListIsOpen}
      handleOpenFavList={handleOpenFavList}
      handleCloseFavList={handleCloseFavList}
      moreOptionsIsOpen={moreOptionsIsOpen}
      handleMoreOptions={handleMoreOptions}
      currentSongName={currentSongName}
      currentPlaylistName={currentPlaylistName}
      playOrNot={playOrNot}
      handlePlayPause={handlePlayPause}
      handleAddSongToPlaylist={handleAddSongToPlaylist}
      handleDeleteSongFromPlaylist={handleDeleteSongFromPlaylist}
      handleDeletePlaylist={handleDeletePlaylist}
    />
  );
});

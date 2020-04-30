import React, { useState, useEffect, useCallback, memo } from "react";

import { useSelector, useDispatch } from "react-redux";

import { isLoading, isError } from "../../../../store/fetchSongs/selectors";

import { favSongsList } from "../../../../store/favSongs/selectors";

import { playlists } from "../../../../store/playlists/selectors";

import {
  currentSong,
  currentIndex,
  currentPlaylist,
  playOrStop,
  NowPlayedSong,
} from "../../../../store/currentItems/selectors";

import {
  addSongToFav,
  deleteSongFromFav,
} from "../../../../store/favSongs/actions";

import {
  setCurrentCategory,
  setCurrentSong,
} from "../../../../store/currentItems/actions";

import {
  handleSendFavSongToFirestore,
  handleDeleteFavSongFromFirestore,
} from "../../../../helpers/FireStoreData";

import { PlaylistLayout } from "./layout";

export const Playlist = memo(() => {
  const [currentPlaylistSongsList, setCurrentPlaylistSongsList] = useState([]);

  // Selectors

  const favList = useSelector(favSongsList);
  const currentSongName = useSelector(currentSong);
  const NowIsPlaying = useSelector(NowPlayedSong);
  const playOrNot = useSelector(playOrStop);

  const currentPlaylistSongs = useSelector(playlists);
  const currentPlaylistName = useSelector(currentPlaylist);

  const currentSongIndex = useSelector(currentIndex);

  const loading = useSelector(isLoading);
  const error = useSelector(isError);

  const dispatch = useDispatch();

  // Download songs from current playlist

  const returnCurrentPlaylistSongs = () => {
    currentPlaylistSongs.map((playlist) =>
      playlist.name === currentPlaylistName
        ? setCurrentPlaylistSongsList(playlist.songs)
        : null
    );
  };

  useEffect(() => {
    dispatch(setCurrentCategory({ term: "playlist" }));
    returnCurrentPlaylistSongs();
  }, []);

  // Favourite songs functions

  const handleAddSongToFav = useCallback(
    (song) => (event) => {
      dispatch(addSongToFav({ song }));
      handleSendFavSongToFirestore(song);
    },
    []
  );

  const handleDeleteSongFromFav = useCallback(
    (song, id) => (event) => {
      dispatch(deleteSongFromFav({ id }));
      handleDeleteFavSongFromFirestore(song);
    },
    []
  );

  // CurrentItems function

  const handleSetCurrentSong = useCallback(
    (song) => (event) => {
      dispatch(setCurrentSong({ song }));
    },
    [currentSongIndex]
  );

  return (
    <PlaylistLayout
      songs={currentPlaylistSongsList}
      favList={favList}
      currentSongName={currentSongName}
      NowIsPlaying={NowIsPlaying}
      playOrNot={playOrNot}
      handleAddSongToFav={handleAddSongToFav}
      handleDeleteSongFromFav={handleDeleteSongFromFav}
      handleSetCurrentSong={handleSetCurrentSong}
      loading={loading}
      error={error}
    />
  );
});

import React, { useEffect, useCallback, memo } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  songsArray,
  loadingSongs,
  isError
} from "../../../../store/fetchSongs/selectors";

import { favSongsList } from "../../../../store/favSongs/selectors";

import {
  currentSong,
  currentIndex,
  playOrStop,
  NowPlayedSong
} from "../../../../store/currentItems/selectors";

import { fetchSongsStarted } from "../../../../store/fetchSongs/actions";

import {
  addSongToFav,
  deleteSongFromFav
} from "../../../../store/favSongs/actions";

import {
  setCurrentCategory,
  setCurrentSong
} from "../../../../store/currentItems/actions";

import {
  handleSendFavSongToFirestore,
  handleDeleteFavSongFromFirestore
} from "../../../../helpers/FireStoreData";

import { SearchListLayout } from "./layout";

export const SearchList = memo(() => {
  // Selectors

  const songs = useSelector(songsArray);
  const favList = useSelector(favSongsList);
  const currentSongName = useSelector(currentSong);
  const NowIsPlaying = useSelector(NowPlayedSong);
  const playOrNot = useSelector(playOrStop);

  const loading = useSelector(loadingSongs);
  const error = useSelector(isError);

  const currentSongIndex = useSelector(currentIndex);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentCategory({ term: "search" }));
    dispatch(fetchSongsStarted({ term: "pop" }));
  }, []);

  // Favourite songs functions

  const handleAddSongToFav = useCallback(
    song => event => {
      dispatch(addSongToFav({ song }));
      handleSendFavSongToFirestore(song);
    },
    []
  );

  const handleDeleteSongFromFav = useCallback(
    (song, id) => event => {
      dispatch(deleteSongFromFav({ id }));
      handleDeleteFavSongFromFirestore(song);
    },
    []
  );

  // CurrentItems function

  const handleSetCurrentSong = useCallback(
    song => event => {
      dispatch(setCurrentSong({ song }));
    },
    [currentSongIndex]
  );

  return (
    <SearchListLayout
      songs={songs}
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

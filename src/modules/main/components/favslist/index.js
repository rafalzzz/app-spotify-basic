import React, { useEffect, useCallback, memo } from "react";

import { useSelector, useDispatch } from "react-redux";

import { isLoading, isError } from "../../../../store/fetchSongs/selectors";

import { favSongsList } from "../../../../store/favSongs/selectors";

import {
  currentSong,
  currentIndex,
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

import { FavsListLayout } from "./layout";

export const FavsList = memo(() => {
  // Selectors
  const favList = useSelector(favSongsList);
  const currentSongName = useSelector(currentSong);
  const NowIsPlaying = useSelector(NowPlayedSong);
  const playOrNot = useSelector(playOrStop);

  const loading = useSelector(isLoading);
  const error = useSelector(isError);

  const currentSongIndex = useSelector(currentIndex);

  const dispatch = useDispatch();

  const changeCategory = () => {
    dispatch(setCurrentCategory({ term: "favList" }));
  };

  useEffect(() => {
    dispatch(setCurrentCategory({ term: "favList" }));
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
    <FavsListLayout
      songs={favList}
      favList={favList}
      currentSongName={currentSongName}
      NowIsPlaying={NowIsPlaying}
      playOrNot={playOrNot}
      handleAddSongToFav={handleAddSongToFav}
      handleDeleteSongFromFav={handleDeleteSongFromFav}
      handleSetCurrentSong={handleSetCurrentSong}
      loading={loading}
      error={error}
      changeCategory={changeCategory}
    />
  );
});

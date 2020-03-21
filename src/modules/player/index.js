import React, { memo } from "react";

import { FooterLayout } from "./layout";

export const Player = memo(() => {
  /* const handleEnded = useCallback(() => {
    console.log("On End");
    let song = searchSongsArr[currentSongIndex];
    if (category === "search") {
      song = searchSongsArr[currentSongIndex];
    } else if (category === "favList") {
      song = favSongArr[currentSongIndex].song;
    } else if (category === "playlist") {
      song = currentPlaylistSongsList[currentSongIndex];
    }

    dispatch(handlePlayThisSong({ song }));
  }, [currentSongIndex, searchSongsArr, currentPlaylistSongsList, category]);

  const handleStart = useCallback(() => {
    if (shuffleSongs === true) {
      let number = 0;
      if (category === "favList") {
        number = Math.floor(Math.random() * (favSongArr.length - 1) + 1);
      } else if (category === "playlist") {
        number = Math.floor(
          Math.random() * (currentPlaylistSongsList.length - 1) + 1
        );
      } else {
        number = Math.floor(Math.random() * (searchSongsArrLength - 1) + 1);
      }
      dispatch(setCurrentIndex({ id: number }));
    } else {
      if (
        category === "search" &&
        currentSongIndex === searchSongsArrLength - 1
      ) {
        dispatch(setCurrentIndex({ id: 1 }));
      } else if (
        category === "favList" &&
        currentSongIndex === favSongArr.length - 1
      ) {
        dispatch(setCurrentIndex({ id: 1 }));
      } else if (
        category === "playlist" &&
        currentSongIndex === currentPlaylistSongsList.length - 1
      ) {
        dispatch(setCurrentIndex({ id: 1 }));
      } else {
        dispatch(handlePlayNextSong({ value: 1 }));
      }
    }
  }, [
    currentSongIndex,
    searchSongsArr,
    currentPlaylistSongsList,
    category,
    shuffleSongs
  ]); */

  return <FooterLayout />;
});

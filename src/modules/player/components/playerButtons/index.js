import React, { useState, useCallback, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  playOrStop,
  shuffle,
  currentCategory,
  currentIndex,
  currentPlaylist,
  NowPlayedSong
} from "../../../../store/currentItems/selectors";

import { loopRX } from "../../../../store/player/selectors";

import {
  songsArray,
  songsArrayLength
} from "../../../../store/fetchSongs/selectors";
import { favSongsList } from "../../../../store/favSongs/selectors";
import { playlists } from "../../../../store/playlists/selectors";

import {
  handleShuffle,
  handlePlayOrStop,
  handlePlayThisSong,
  setCurrentIndex,
  setCurrentSong
} from "../../../../store/currentItems/actions";

import { setLoop } from "../../../../store/player/actions";

import { PlayerButtonsLayout } from "./layout";

export const PlayerButtons = () => {
  const [currentPlaylistSongsList, setCurrentPlaylistSongsList] = useState([]);

  const shuffleSongs = useSelector(shuffle);
  const playing = useSelector(playOrStop);
  const loop = useSelector(loopRX);
  const currentSongIndex = useSelector(currentIndex);
  const currentPlayedSong = useSelector(NowPlayedSong);

  const category = useSelector(currentCategory);
  const searchSongsArr = useSelector(songsArray);
  const searchSongsArrLength = useSelector(songsArrayLength);
  const favSongArr = useSelector(favSongsList);
  const currentPlaylistSongs = useSelector(playlists);
  const currentPlaylistName = useSelector(currentPlaylist);

  console.log("NowIsPlaying", currentPlayedSong);

  const dispatch = useDispatch();

  useEffect(() => {
    currentPlaylistSongs.map(playlist =>
      playlist.name === currentPlaylistName
        ? setCurrentPlaylistSongsList(playlist.songs)
        : null
    );
    console.log("playlistArr", currentPlaylistSongsList);
  }, [currentPlaylistName]);

  const handleShuffleButton = useCallback(
    event => {
      shuffleSongs
        ? dispatch(handleShuffle({ shuffle: false }))
        : dispatch(handleShuffle({ shuffle: true }));
      console.log("asd", shuffleSongs);
    },
    [shuffleSongs]
  );

  const handlePreviewButton = useCallback(
    event => {
      let song = searchSongsArr[currentSongIndex];
      let newIndex = currentSongIndex;

      if (currentSongIndex !== 0 && category === "search") {
        song = searchSongsArr[currentSongIndex - 1];
        newIndex = searchSongsArr.findIndex(
          songArr => songArr.previewUrl === currentPlayedSong.previewUrl
        );
      } else if (currentSongIndex !== 0 && category === "favList") {
        song = favSongArr[currentSongIndex - 1].song;
        newIndex = searchSongsArr.findIndex(
          songArr => songArr.previewUrl === currentPlayedSong.previewUrl
        );
      } else if (currentSongIndex !== 0 && category === "playlist") {
        song = currentPlaylistSongsList[currentSongIndex - 1];
        newIndex = searchSongsArr.findIndex(
          songArr => songArr.previewUrl === currentPlayedSong.previewUrl
        );
      } else if (currentSongIndex === 0 && category === "search") {
        return null;
      } else if (currentSongIndex === 0 && category === "favList") {
        return null;
      } else if (currentSongIndex === 0 && category === "playlist") {
        return null;
      }

      dispatch(handlePlayThisSong({ song }));
      dispatch(setCurrentIndex({ id: newIndex }));
      console.log(newIndex);
    },
    [
      category,
      currentSongIndex,
      currentPlayedSong,
      favSongArr,
      currentPlaylistSongsList
    ]
  );

  const handlePlayPause = useCallback(
    event => {
      playing === true
        ? dispatch(handlePlayOrStop({ play: false }))
        : dispatch(handlePlayOrStop({ play: true }));
    },
    [playing]
  );

  const handleNextButton = useCallback(
    event => {
      let song = searchSongsArr[currentSongIndex];
      let newIndex = currentSongIndex;

      if (category === "search") {
        song = searchSongsArr[currentSongIndex + 1];
        newIndex = searchSongsArr.findIndex(
          songArr => songArr.previewUrl === currentPlayedSong.previewUrl
        );
      } else if (
        currentSongIndex !== favSongArr.length - 1 &&
        category === "favList"
      ) {
        song = favSongArr[currentSongIndex + 1].song;
        newIndex = searchSongsArr.findIndex(
          songArr => songArr.previewUrl === currentPlayedSong.previewUrl
        );
      } else if (
        currentSongIndex !== currentPlaylistSongsList.length - 1 &&
        category === "playlist"
      ) {
        song = currentPlaylistSongsList[currentSongIndex + 1];
        newIndex = searchSongsArr.findIndex(
          songArr => songArr.previewUrl === currentPlayedSong.previewUrl
        );
      } else if (
        currentSongIndex === searchSongsArrLength - 1 &&
        category === "search"
      ) {
        song = searchSongsArr[currentSongIndex + 1];
        newIndex = currentSongIndex + 1;
      } else if (
        currentSongIndex === favSongArr.length - 1 &&
        category === "favList"
      ) {
        return null;
      } else if (
        currentSongIndex === currentPlaylistSongsList.length - 1 &&
        category === "playlist"
      ) {
        return null;
      }

      dispatch(handlePlayThisSong({ song }));
      dispatch(setCurrentSong({ song }));
      dispatch(setCurrentIndex({ id: newIndex }));
      console.log("asdsad", song);
    },
    [
      category,
      currentSongIndex,
      currentPlayedSong,
      favSongArr,
      currentPlaylistSongsList
    ]
  );

  const handleToggleLoop = useCallback(
    event => {
      loop === true
        ? dispatch(setLoop({ loop: false }))
        : dispatch(setLoop({ loop: true }));
    },
    [loop]
  );

  return (
    <PlayerButtonsLayout
      handleShuffleButton={handleShuffleButton}
      shuffleSongs={shuffleSongs}
      handlePreviewButton={handlePreviewButton}
      handlePlayPause={handlePlayPause}
      playing={playing}
      handleNextButton={handleNextButton}
      handleToggleLoop={handleToggleLoop}
      loop={loop}
    />
  );
};

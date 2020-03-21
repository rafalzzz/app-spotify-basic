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
  handlePlayNextSong,
  handlePlayPrevSong
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

  console.log("Index -------", currentSongIndex);

  const dispatch = useDispatch();

  useEffect(() => {
    currentPlaylistSongs.map(playlist =>
      playlist.name === currentPlaylistName
        ? setCurrentPlaylistSongsList(playlist.songs)
        : null
    );
  }, [currentPlaylistName]);

  const handleShuffleButton = useCallback(
    event => {
      shuffleSongs
        ? dispatch(handleShuffle({ shuffle: false }))
        : dispatch(handleShuffle({ shuffle: true }));
    },
    [shuffleSongs]
  );

  const handlePreviewButton = useCallback(
    event => {
      if (category === "search") {
        if (currentSongIndex === 0) {
          let song = searchSongsArr[searchSongsArrLength - 1];
          let index = searchSongsArrLength;
          dispatch(handlePlayThisSong({ song }));
          dispatch(setCurrentIndex({ id: index }));
        } else if (currentSongIndex > searchSongsArrLength - 1) {
          let song = searchSongsArr[searchSongsArrLength - 1];
          let index = searchSongsArrLength;
          dispatch(handlePlayThisSong({ song }));
          dispatch(setCurrentIndex({ id: index }));
        } else if (currentSongIndex === searchSongsArrLength - 1) {
          let song = searchSongsArr[currentSongIndex - 1];
          dispatch(handlePlayThisSong({ song }));
          dispatch(handlePlayPrevSong({ value: 1 }));
        } else {
          let song = searchSongsArr[currentSongIndex - 1];
          dispatch(handlePlayThisSong({ song }));
          dispatch(handlePlayPrevSong({ value: 1 }));
        }
      } else if (category === "favList") {
        if (currentSongIndex === 0) {
          let song = favSongArr[favSongArr.length - 1].song;
          let index = favSongArr.length;
          dispatch(handlePlayThisSong({ song }));
          dispatch(setCurrentIndex({ id: index }));
        } else if (currentSongIndex > favSongArr.length - 1) {
          let song = favSongArr[favSongArr.length - 1].song;
          let index = favSongArr.length;
          dispatch(handlePlayThisSong({ song }));
          dispatch(setCurrentIndex({ id: index }));
        } else if (currentSongIndex === favSongArr.length - 1) {
          let song = favSongArr[currentSongIndex - 1].song;
          dispatch(handlePlayThisSong({ song }));
          dispatch(handlePlayPrevSong({ value: 1 }));
        } else {
          let song = favSongArr[currentSongIndex - 1].song;
          dispatch(handlePlayThisSong({ song }));
          dispatch(handlePlayPrevSong({ value: 1 }));
        }
      } else if (category === "playlist") {
        if (currentSongIndex === 0) {
          let song =
            currentPlaylistSongsList[currentPlaylistSongsList.length - 1];
          let index = currentPlaylistSongsList.length;
          dispatch(handlePlayThisSong({ song }));
          dispatch(setCurrentIndex({ id: index }));
        } else if (currentSongIndex > currentPlaylistSongsList.length - 1) {
          let song =
            currentPlaylistSongsList[currentPlaylistSongsList.length - 1];
          let index = currentPlaylistSongsList.length;
          dispatch(handlePlayThisSong({ song }));
          dispatch(setCurrentIndex({ id: index }));
        } else if (currentSongIndex === currentPlaylistSongsList.length - 1) {
          let song = currentPlaylistSongsList[currentSongIndex - 1];
          dispatch(handlePlayThisSong({ song }));
          dispatch(handlePlayPrevSong({ value: 1 }));
        } else {
          let song = currentPlaylistSongsList[currentSongIndex - 1];
          dispatch(handlePlayThisSong({ song }));
          dispatch(handlePlayPrevSong({ value: 1 }));
        }
      }
    },
    [
      currentSongIndex,
      searchSongsArr,
      favSongArr,
      currentPlaylistSongsList,
      category,
      currentPlayedSong
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
      if (category === "search") {
        if (currentSongIndex < searchSongsArrLength - 1) {
          let song = searchSongsArr[currentSongIndex + 1];
          dispatch(handlePlayThisSong({ song }));
          dispatch(handlePlayNextSong({ value: 1 }));
        } else {
          let song = searchSongsArr[0];
          dispatch(handlePlayThisSong({ song }));
          dispatch(setCurrentIndex({ id: 0 }));
        }
      } else if (category === "favList") {
        if (currentSongIndex < favSongArr.length - 1) {
          let song = favSongArr[currentSongIndex + 1].song;
          dispatch(handlePlayThisSong({ song }));
          dispatch(handlePlayNextSong({ value: 1 }));
        } else {
          let song = favSongArr[0].song;
          dispatch(handlePlayThisSong({ song }));
          dispatch(setCurrentIndex({ id: 0 }));
        }
      } else if (category === "playlist") {
        if (currentSongIndex < currentPlaylistSongsList.length - 1) {
          let song = currentPlaylistSongsList[currentSongIndex + 1];
          dispatch(handlePlayThisSong({ song }));
          dispatch(handlePlayNextSong({ value: 1 }));
        } else {
          let song = currentPlaylistSongsList[0];
          dispatch(handlePlayThisSong({ song }));
          dispatch(setCurrentIndex({ id: 0 }));
        }
      }
    },
    [
      currentSongIndex,
      searchSongsArr,
      favSongArr,
      currentPlaylistSongsList,
      category,
      currentPlayedSong
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

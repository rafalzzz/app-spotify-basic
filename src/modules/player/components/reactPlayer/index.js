import React, { memo, useState, useCallback, useEffect, useRef } from "react";

import ReactPlayer from "react-player";

import { useSelector, useDispatch } from "react-redux";

import {
  pipRX,
  volumeRX,
  mutedRX,
  loopRX,
  seekToRX
} from "../../../../store/player/selectors";

import { setPlayed, setDuration } from "../../../../store/player/actions";

import {
  currentIndex,
  currentCategory,
  currentPlaylist,
  playOrStop,
  shuffle,
  NowPlayedSong
} from "../../../../store/currentItems/selectors";
import {
  songsArray,
  songsArrayLength
} from "../../../../store/fetchSongs/selectors";
import { favSongsList } from "../../../../store/favSongs/selectors";
import { playlists } from "../../../../store/playlists/selectors";

import {
  handlePlayOrStop,
  handlePlayThisSong,
  setCurrentIndex
} from "../../../../store/currentItems/actions";

export const ReactMusicPlayer = memo(() => {
  // Functions consts
  const shuffleSongs = useSelector(shuffle);
  const currentSongIndex = useSelector(currentIndex);
  const category = useSelector(currentCategory);

  const searchSongsArr = useSelector(songsArray);
  const searchSongsArrLength = useSelector(songsArrayLength);
  const favSongArr = useSelector(favSongsList);
  const currentPlaylistSongs = useSelector(playlists);
  const currentPlaylistName = useSelector(currentPlaylist);

  const [currentPlaylistSongsList, setCurrentPlaylistSongsList] = useState([]);

  // Player consts
  const playing = useSelector(playOrStop);
  const currentPlayedSong = useSelector(NowPlayedSong);
  let url = currentPlayedSong.previewUrl;
  const pip = useSelector(pipRX);
  const volume = useSelector(volumeRX);
  const muted = useSelector(mutedRX);
  const loop = useSelector(loopRX);
  const seekTo = useSelector(seekToRX);

  const dispatch = useDispatch();

  // ReactPlayer functions

  const handlePlay = useCallback(event => {
    dispatch(handlePlayOrStop({ play: true }));
  }, []);

  const handlePause = useCallback(event => {
    dispatch(handlePlayOrStop({ play: false }));
  }, []);

  const handleBuffer = useCallback(() => {
    let newIndex = currentSongIndex + 1;
    dispatch(setCurrentIndex({ id: newIndex }));
  }, [currentSongIndex, category, currentPlayedSong]);

  const handleStart = useCallback(() => {
    /* if (shuffleSongs === true) {
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
    } */
  }, [
    currentSongIndex,
    searchSongsArr,
    currentPlaylistSongsList,
    category,
    shuffleSongs
  ]);

  const handleEnded = useCallback(() => {
    console.log("On End");
    let song = searchSongsArr[currentSongIndex];
    if (category === "search") {
      song = searchSongsArr[currentSongIndex + 1];
    } else if (category === "favList") {
      song = favSongArr[currentSongIndex + 1].song;
    } else if (category === "playlist") {
      song = currentPlaylistSongsList[currentSongIndex + 1];
    }

    dispatch(handlePlayThisSong({ song }));
    dispatch(handlePlayOrStop({ play: true }));
  }, [
    currentSongIndex,
    searchSongsArr,
    currentPlaylistSongsList,
    category,
    currentPlayedSong
  ]);

  const ref = useRef(null);

  const handleProgress = value => {
    let playedValue = parseFloat(value.played);
    dispatch(setPlayed({ played: playedValue }));
  };

  const handleDuration = duration => {
    dispatch(setDuration({ duration: duration }));
  };

  // Skip song to optional second

  useEffect(() => {
    ref.current.seekTo(seekTo);
  }, [seekTo]);

  // Get current playlist songs

  useEffect(() => {
    currentPlaylistSongs.map(playlist =>
      playlist.name === currentPlaylistName
        ? setCurrentPlaylistSongsList(playlist.songs)
        : null
    );
    console.log("playlistArr", currentPlaylistSongsList);
  }, [currentPlaylistName]);

  return (
    <ReactPlayer
      ref={ref}
      className="react-player"
      width="0px"
      height="0px"
      url={url}
      pip={pip}
      playing={playing}
      loop={loop}
      volume={volume}
      muted={muted}
      onReady={() => console.log("onReady")}
      onPlay={handlePlay}
      onPause={handlePause}
      onBuffer={handleBuffer}
      onSeek={e => console.log("onSeek", e)}
      onStart={handleStart}
      onEnded={handleEnded}
      onError={e => console.log("onError", e)}
      onProgress={handleProgress}
      onDuration={handleDuration}
    />
  );
});

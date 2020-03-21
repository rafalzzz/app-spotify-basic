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
  setCurrentIndex,
  handlePlayNextSong
} from "../../../../store/currentItems/actions";

export const ReactMusicPlayer = () => {
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

  console.log("index", currentSongIndex);
  console.log("tablica", favSongArr);
  console.log("dlugosc tablicy", favSongArr.length);

  // ReactPlayer functions

  const handlePlay = useCallback(event => {
    dispatch(handlePlayOrStop({ play: true }));
  }, []);

  const handlePause = useCallback(event => {
    dispatch(handlePlayOrStop({ play: false }));
  }, []);

  const handleEnded = useCallback(() => {
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
    dispatch(handlePlayOrStop({ play: true }));
  }, [
    currentSongIndex,
    searchSongsArr,
    favSongArr,
    currentPlaylistSongsList,
    category,
    currentPlayedSong
  ]);

  const ref = useRef(null);

  const handleProgress = value => {
    console.log("obecnyIndex", currentSongIndex);
    let playedValue = parseFloat(value.played);
    dispatch(setPlayed({ played: playedValue }));
  };

  const handleDuration = duration => {
    dispatch(setDuration({ duration: duration }));
  };

  // Skip song to optional second

  useEffect(() => {
    ref.current.seekTo(seekTo);
    dispatch(setPlayed({ played: seekTo }));
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
      onBuffer={() => console.log("onBuffer")}
      onSeek={e => console.log("onSeek", e)}
      onStart={() => console.log("onStart")}
      onEnded={handleEnded}
      onError={e => console.log("onError", e)}
      onProgress={handleProgress}
      onDuration={handleDuration}
    />
  );
};

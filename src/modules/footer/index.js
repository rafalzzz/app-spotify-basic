import React, { useState, useCallback, useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  currentIndex,
  currentCategory,
  currentPlaylist,
  playOrStop,
  shuffle,
  NowPlayedSong
} from "../../store/currentItems/selectors";
import { songsArray, songsArrayLength } from "../../store/fetchSongs/selectors";
import { favSongsList } from "../../store/favSongs/selectors";
import { playlists } from "../../store/playlists/selectors";

import {
  handlePlayOrStop,
  handleShuffle,
  handlePlayThisSong,
  setCurrentIndex,
  handlePlayNextSong,
  handlePlayPrevSong
} from "../../store/currentItems/actions";

import { FooterLayout } from "./layout";

export const Footer = () => {
  // Selectors

  const playOrNot = useSelector(playOrStop);
  const shuffleSongs = useSelector(shuffle);
  const currentPlayedSong = useSelector(NowPlayedSong);
  const currentSongIndex = useSelector(currentIndex);
  const category = useSelector(currentCategory);

  const dispatch = useDispatch();

  // ReactPlayer consts

  const [played, setPlayed] = useState(0);
  const [url, setUrl] = useState(
    "https://audio-ssl.itunes.apple.com/itunes-assets/Music7/v4/3c/e7/ac/3ce7ac90-4834-151a-667e-2259c7e7bd38/mzaf_760160703636187828.plus.aac.p.m4a"
  );
  const pip = false;
  const controls = false;
  const light = false;
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const loaded = 0;
  const [duration, setDuration] = useState(0);
  const playbackRate = 1.0;
  const [loop, setLoop] = useState(false);
  const [showRemaining, setShowRemaining] = useState(false);
  const [volumeIcon, setVolumeIcon] = useState("icon-volume-up");

  // Loop consts

  /* const [songIndex, setSongIndex] = useState(0) */
  const [currentPlaylistSongsList, setCurrentPlaylistSongsList] = useState([]);

  //FetchSongs consts

  const searchSongsArr = useSelector(songsArray);
  const searchSongsArrLength = useSelector(songsArrayLength);

  //FavList consts

  const favSongArr = useSelector(favSongsList);

  //Playlists consts

  const currentPlaylistSongs = useSelector(playlists);
  const currentPlaylistName = useSelector(currentPlaylist);

  useEffect(() => {
    currentPlaylistSongs.map(playlist =>
      playlist.name === currentPlaylistName
        ? setCurrentPlaylistSongsList(playlist.songs)
        : null
    );
    console.log("playlistArr", currentPlaylistSongsList);
  }, [currentPlaylistName]);

  // Other functions

  // Change url of playing song

  const setSongUrl = useCallback(
    songUrl => {
      setUrl(currentPlayedSong.previewUrl);
    },
    [currentPlayedSong.previewUrl]
  );

  // Play another song

  useEffect(() => {
    dispatch(handlePlayOrStop({ play: false }));
    setSongUrl(currentPlayedSong.previewUrl);
    dispatch(handlePlayOrStop({ play: true }));
  }, [currentPlayedSong.previewUrl]);

  // ReactPlayer functions

  const handlePlayPause = useCallback(
    event => {
      playOrNot === true
        ? dispatch(handlePlayOrStop({ play: false }))
        : dispatch(handlePlayOrStop({ play: true }));
    },
    [playOrNot]
  );

  const handleToggleLoop = useCallback(
    event => {
      setLoop(!loop);
    },
    [loop]
  );

  const ref = useRef(null);

  const handleProgress = value => {
    setPlayed(parseFloat(value.played));
  };

  const handleSeekChange = e => {
    setPlayed(parseFloat(e.target.value));
    ref.current.seekTo(parseFloat(e.target.value));
  };

  const handleVolumeChange = e => {
    setVolume(parseFloat(e.target.value));
    handleSetVolumeIcon(parseFloat(e.target.value));
  };

  const handleToggleMuted = useCallback(
    event => {
      setMuted(!muted);
    },
    [muted]
  );

  const handlePlay = useCallback(event => {
    dispatch(handlePlayOrStop({ play: true }));
  }, []);

  const handlePause = useCallback(event => {
    dispatch(handlePlayOrStop({ play: false }));
  }, []);

  const handleEnded = useCallback(() => {
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
  ]);

  const handleDuration = duration => {
    console.log("onDuration", duration);
    setDuration(duration);
  };

  const handleSetRemaining = useCallback(
    event => {
      setShowRemaining(!showRemaining);
    },
    [showRemaining]
  );

  // Bar buttons functions

  // Shuffle songs

  const handleShuffleButton = useCallback(
    event => {
      shuffleSongs
        ? dispatch(handleShuffle({ shuffle: false }))
        : dispatch(handleShuffle({ shuffle: true }));
      console.log("asd", shuffleSongs);
    },
    [shuffleSongs]
  );

  // Play preview song

  const handlePreviewButton = useCallback(
    event => {
      let song = searchSongsArr[currentSongIndex - 2];

      if (category === "favList") {
        song = favSongArr[currentSongIndex - 2].song;
      } else if (category === "playlist") {
        song = currentPlaylistSongsList[currentSongIndex - 2];
      } else {
        song = searchSongsArr[currentSongIndex - 2];
      }

      if (currentSongIndex <= 2) {
        dispatch(handlePlayPrevSong({ value: 0 }));
      } else if (currentSongIndex > 2) {
        dispatch(handlePlayPrevSong({ value: 2 }));
      }

      dispatch(handlePlayThisSong({ song }));
    },
    [
      category,
      currentSongIndex,
      currentPlayedSong,
      favSongArr,
      currentPlaylistSongsList
    ]
  );

  // Play next song

  const handleNextButton = useCallback(
    event => {
      handleEnded();
    },
    [category, currentSongIndex, currentPlayedSong]
  );

  // Volume icon function

  const handleSetVolumeIcon = useCallback(
    volume => {
      switch (true) {
        case volume === 0:
          setVolumeIcon("icon-volume-off");
          break;
        case volume > 0 && volume <= 0.3:
          setVolumeIcon("icon-volume-down");
          break;
        case volume > 0.3 && volume <= 0.6:
          setVolumeIcon("icon-volume");
          break;
        case volume > 0.6 && volume <= 1:
          setVolumeIcon("icon-volume-up");
          break;
        default:
          setVolumeIcon("icon-volume-up");
      }
    },
    [volume]
  );

  return (
    <FooterLayout
      played={played}
      url={url}
      pip={pip}
      playing={playOrNot}
      controls={controls}
      light={light}
      volume={volume}
      muted={muted}
      loaded={loaded}
      duration={duration}
      playbackRate={playbackRate}
      loop={loop}
      showRemaining={showRemaining}
      volumeIcon={volumeIcon}
      ref={ref}
      shuffleSongs={shuffleSongs}
      handlePlayPause={handlePlayPause}
      handleToggleLoop={handleToggleLoop}
      handleProgress={handleProgress}
      handleSeekChange={handleSeekChange}
      handleVolumeChange={handleVolumeChange}
      handleToggleMuted={handleToggleMuted}
      handlePlay={handlePlay}
      handlePause={handlePause}
      handleStart={handleStart}
      handleEnded={handleEnded}
      handleDuration={handleDuration}
      handleSetRemaining={handleSetRemaining}
      handleShuffleButton={handleShuffleButton}
      handleNextButton={handleNextButton}
      handlePreviewButton={handlePreviewButton}
      currentPlayedSong={currentPlayedSong}
    />
  );
};

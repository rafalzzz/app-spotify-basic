import React, {useState, useCallback, memo} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {songsArray, loadingSongs, isError} from '../../store/fetchSongs/selectors';
import {favSongsList} from '../../store/favSongs/selectors';
import {currentSong, currentPlaylist, playOrStop} from '../../store/currentItems/selectors';

import {fetchSongsStarted} from '../../store/fetchSongs/actions';
import {addSongToFav, deleteSongFromFav} from '../../store/favSongs/actions';
import {addSongToPlaylist, deleteSongFromPlaylist, deletePlaylist} from '../../store/playlists/actions';
import {setCurrentSong, handlePlayOrStop, handlePlayThisSong} from '../../store/currentItems/actions';

import {ListLayout} from './layout'

export const List = memo(() => {

  const [term, setTerm] = useState('');
  const [moreOptionsIsOpen, setMoreOptionsIsOpen] = useState(false)

  // Selectors

  const songs = useSelector(songsArray)
  const loading = useSelector(loadingSongs)
  const error = useSelector(isError)
  const playOrNot = useSelector(playOrStop)

  const currentPlaylistName = useSelector(currentPlaylist)
  const currentSongName = useSelector(currentSong)

  const dispatch = useDispatch();

  // Searchbar functions

  const handleFetchSongs = useCallback((term) => {
    dispatch(fetchSongsStarted({ term: term }));
  }, []);

  const handleOnChange = (e) => {
    setTerm(e.target.value)
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleFetchSongs(term);
  };
  
  // PlayButton function

  const handlePlayPause = useCallback(event => {
    if (playOrNot === false) {
        dispatch(handlePlayOrStop({ play: true }))
    } else if (playOrNot === true) {
        dispatch(handlePlayOrStop({ play: false }))
    }
}, [playOrNot])

  // Favourite songs functions

  const favList = useSelector(favSongsList)

  const handleAddSongToFav = useCallback((song) => {
      dispatch(addSongToFav({ song }));
  }, []);
  
  const handleDeleteSongFromFav = useCallback((id) => {
      dispatch(deleteSongFromFav({ id }));
  }, []);

  // Playlists functions

  console.log(currentPlaylistName)

  const handleAddSongToPlaylist = useCallback((playlist, song) => event => {
    dispatch(addSongToPlaylist({ playlistName: playlist, song: song }));
  }, []);

  const handleDeleteSongFromPlaylist = useCallback((playlist, song) => event => {
    dispatch(deleteSongFromPlaylist({ playlistName: playlist, song: song }));
  }, []);

  const handleDeletePlaylist = useCallback(name => event => {
    dispatch(deletePlaylist({ name }));
  }, []);

  // CurrentItems functions

  const handleSetCurrentSong = useCallback(song => event => {
    dispatch(setCurrentSong({ song }));
  }, []);

  const handlePlayThisSongNow = useCallback(song => event => {
    dispatch(handlePlayThisSong({ song }))
  }, [])

  // Other functions

  const handleOpenMoreOptions = useCallback(event => () => {
    setMoreOptionsIsOpen(true);
  }, []);

  const handleCloseMoreOptions = useCallback(event => () => {
    setMoreOptionsIsOpen(false);
  }, []);

    return (
        <ListLayout
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}

          moreOptionsIsOpen={moreOptionsIsOpen}
          handleOpenMoreOptions={handleOpenMoreOptions}

          currentSongName={currentSongName}
          currentPlaylistName={currentPlaylistName}

          playOrNot={playOrNot}
          handlePlayPause={handlePlayPause}

          handleCloseMoreOptions={handleCloseMoreOptions}
          handleAddSongToPlaylist={handleAddSongToPlaylist}
          handleDeleteSongFromPlaylist={handleDeleteSongFromPlaylist}
          handleDeletePlaylist={handleDeletePlaylist}

          handleFetchSongs={handleFetchSongs}
          handleAddSongToFav={handleAddSongToFav}
          handleDeleteSongFromFav={handleDeleteSongFromFav}
          handleSetCurrentSong={handleSetCurrentSong}
          handlePlayThisSongNow={handlePlayThisSongNow}

          songs={songs}
          loading={loading}
          error={error}
          favList={favList}
        />
  );
});
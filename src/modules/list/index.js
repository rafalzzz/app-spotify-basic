import React, {useState, useCallback} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {songsArray, loadingSongs, isError} from '../../store/fetchSongs/selectors';
import {favSongsList} from '../../store/favSongs/selectors';
import {currentPlaylist} from '../../store/currentItems/selectors';

import {fetchSongsStarted} from '../../store/fetchSongs/actions';
import {addSongToFav, deleteSongFromFav} from '../../store/favSongs/actions';
import {addSongToPlaylist, deleteSongFromPlaylist, deletePlaylist} from '../../store/playlists/actions';

import {ListLayout} from './layout'

export const List = () => {

  const [term, setTerm] = useState('');

// Selectors

  const songs = useSelector(songsArray);
  const loading = useSelector(loadingSongs);
  const error = useSelector(isError);

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
  
// Favourite songs functions

  const favList = useSelector(favSongsList)

  const handleAddSongToFav = useCallback((song) => {
      dispatch(addSongToFav({ song }));
  }, []);
  
  const handleDeleteSongFromFav = useCallback((id) => {
      dispatch(deleteSongFromFav({ id }));
  }, []);

// Playlists functions

  const currentPlaylistName = useSelector(currentPlaylist)

  console.log(currentPlaylistName)

  const handleAddSongToPlaylist = useCallback((name) => {
    dispatch(addSongToPlaylist({ name }));
  }, []);

  const handleDeleteSongFromPlaylist = useCallback((name) => {
    dispatch(deleteSongFromPlaylist({ name }));
  }, []);

  const handleDeletePlaylist = useCallback((name) => {
    dispatch(deletePlaylist({ name }));
  }, []);

  const handleDeletePlaylistButton = (currentPlaylistName) => {
    handleDeletePlaylist(currentPlaylistName)
  }

    return (
    <div>
        <ListLayout
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}

          handleDeletePlaylistButton={handleDeletePlaylistButton}

          handleFetchSongs={handleFetchSongs}
          handleAddSongToFav={handleAddSongToFav}
          handleDeleteSongFromFav={handleDeleteSongFromFav}

          songs={songs}
          loading={loading}
          error={error}
          favList={favList}
        />
    </div>
  );
};
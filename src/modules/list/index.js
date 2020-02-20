import React, {useEffect, useState, useCallback} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {songsArray, loadingSongs, isError} from '../../store/fetchSongs/selectors';
import {favSongsList} from '../../store/favSongs/selectors';

import {fetchSongsStarted} from '../../store/fetchSongs/actions';
import {addSongToFav, deleteSongFromFav} from '../../store/favSongs/actions';

import {ListLayout} from './layout'

export const List = () => {

  const [term, setTerm] = useState('');

  const songs = useSelector(songsArray);
  const loading = useSelector(loadingSongs);
  const error = useSelector(isError);

  const favList = useSelector(favSongsList)

  const dispatch = useDispatch();
  const handleFetchSongs = useCallback((term) => {
  dispatch(fetchSongsStarted({ term: term }));
  }, []);

  const handleAddSongToFav = useCallback((song) => {
    dispatch(addSongToFav({ song }));
  }, []);

  const handleDeleteSongFromFav = useCallback((id) => {
    dispatch(deleteSongFromFav({ id }));
    }, []);

  useEffect(() => {
    handleFetchSongs('pop');
  }, []);

  const handleOnChange = (e) => {
      setTerm(e.target.value)
  };

  const handleOnSubmit = (e) => {
      e.preventDefault();
      handleFetchSongs(term);
  };

  console.log(favList)

    return (
    <div>
        <ListLayout
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}

          handleAddSongToFav={handleAddSongToFav}
          handleDeleteSongFromFav={handleDeleteSongFromFav}

          songs={songs}
          loading={loading}
          error={error}
        />
    </div>
  );
};
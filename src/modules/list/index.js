import React, {useEffect, useState, useCallback} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {songsCount, songsArray, loadingSongs, isError} from '../../store/songs/selectors';

import {fetchSongsStarted} from '../../store/songs/actions';

import {ListLayout} from './layout'

export const List = () => {

  const [term, setTerm] = useState('');
  const [songsArr, setSongsArr] = useState([]);

  const itemsNumber = useSelector(songsCount);
  const songs = useSelector(songsArray);
  const loading = useSelector(loadingSongs);
  const error = useSelector(isError);

  const dispatch = useDispatch();
  const handleFetchSongs = useCallback((term) => {
  dispatch(fetchSongsStarted({ term: term }));
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

    return (
    <div>
        <ListLayout
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}

          songs={songs}
          loading={loading}
          error={error}
        />
    </div>
  );
};
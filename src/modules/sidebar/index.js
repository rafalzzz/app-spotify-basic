import React, {memo, useState, useCallback} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {playlists} from '../../store/playlists/selectors';
import {currentPlaylist} from '../../store/currentItems/selectors';

import {createPlaylist} from '../../store/playlists/actions';
import {setCurrentPlaylist} from '../../store/currentItems/actions';

import {SidebarLayout} from './layout'

export const Sidebar = memo(() => {

  const [playlistName, setPlaylistName] = useState("")
  const [playlistFormIsOpen, setPlaylistFormIsOpen] = useState(false)

  const playlistsList = useSelector(playlists);

  console.log(playlistsList)
  
  const dispatch = useDispatch();

  const handleCreatePlaylist = useCallback((name) => {
    dispatch(createPlaylist({ name }));
  }, []);

  const handleSetCurrentPlaylist = useCallback((name) => {
    dispatch(setCurrentPlaylist({ name }));
  }, []);

  const handlePlaylistName = (e) => {
    e.preventDefault()
    setPlaylistName(e.target.value)
  };

  const handleOnSubmit = (e) => {
    e.preventDefault()
    handleCreatePlaylist(playlistName)
    setPlaylistName("")
    setPlaylistFormIsOpen(false)
  };

  const handlePlaylistForm = () => {
    setPlaylistFormIsOpen(!playlistFormIsOpen)
  }

  const handleCurrentPlaylistName = (e) => {
    handleSetCurrentPlaylist(e.target.value)
  }

  /* console.log(showCurrentPlaylist) */

  return (
    <div>
        <SidebarLayout
          playlists={playlistsList}
          handleCurrentPlaylistName={handleCurrentPlaylistName}

          handleOnSubmit={handleOnSubmit}
          playlistFormIsOpen={playlistFormIsOpen}
          handlePlaylistForm={handlePlaylistForm}
          handlePlaylistName={handlePlaylistName}
        />
    </div>
  );
});
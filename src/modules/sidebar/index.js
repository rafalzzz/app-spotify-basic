import React, {useState, useCallback} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {playlists} from '../../store/playlists/selectors';
import {currentPlaylist} from '../../store/currentItems/selectors';

import {createPlaylist} from '../../store/playlists/actions';
import {setCurrentPlaylist} from '../../store/currentItems/actions';

import {SidebarLayout} from './layout'

export const Sidebar = () => {

  const [playlistName, setPlaylistName] = useState("")
  const [playlistFormIsOpen, setPlaylistFormIsOpen] = useState(false)

  const playlistsList = useSelector(playlists);
  const currentPlaylistName = useSelector(currentPlaylist);

  console.log(playlistsList)
  
  const dispatch = useDispatch();

  const handlePlaylistForm = useCallback( event => () => {
    setPlaylistFormIsOpen(!playlistFormIsOpen)
  }, [])

  const handlePlaylistName = (e) => {
    e.preventDefault()
    setPlaylistName(e.target.value)
  }

  const handleCreatePlaylist = useCallback((name) => {
    dispatch(createPlaylist({ name }));
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (playlistName === "") {
      setPlaylistFormIsOpen(false)
    } else if (playlistName !== "") {
      handleCreatePlaylist(playlistName)
      setPlaylistName("")
      setPlaylistFormIsOpen(false)
    }
  };

  const handleSetCurrentPlaylist = useCallback( name => event => {
    dispatch(setCurrentPlaylist({ name }));
    console.log(currentPlaylistName)
  }, [])

  return (
    <div>
        <SidebarLayout
          playlists={playlistsList}
          handleSetCurrentPlaylist={handleSetCurrentPlaylist}
          currentPlaylistName={currentPlaylistName}

          handleOnSubmit={handleOnSubmit}
          playlistFormIsOpen={playlistFormIsOpen}
          handlePlaylistForm={handlePlaylistForm}
          handlePlaylistName={handlePlaylistName}
        />
    </div>
  );
};
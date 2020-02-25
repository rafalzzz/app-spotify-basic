import React from 'react';

import {SidebarContainer} from './layout.styled';

import {Menu} from './components/menu'
import {Playlists} from './components/playlists'
import {NewPlaylist} from './components/newplaylist'

export const SidebarLayout = ({playlists, handleSetCurrentPlaylist, currentPlaylistName, handleOnSubmit, playlistFormIsOpen, handlePlaylistForm, handlePlaylistName}) => (
    <SidebarContainer>
        <Menu/>
        <Playlists
            playlists={playlists}
            handleSetCurrentPlaylist={handleSetCurrentPlaylist}
            currentPlaylistName={currentPlaylistName}
        />
        <NewPlaylist
            handleOnSubmit={handleOnSubmit}
            playlistFormIsOpen={playlistFormIsOpen}
            handlePlaylistForm={handlePlaylistForm}
            handlePlaylistName={handlePlaylistName}
        />
    </SidebarContainer>
)
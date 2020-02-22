import React from 'react';

import {SidebarContainer} from './layout.styled';

import {Menu} from './components/menu'
import {Playlists} from './components/playlists'
import {NewPlaylist} from './components/newplaylist'
import {Album} from './components/album'

export const SidebarLayout = ({playlists, handleCurrentPlaylistName, handleOnSubmit, playlistFormIsOpen, handlePlaylistForm, handlePlaylistName}) => (
    <SidebarContainer>
        <Menu/>
        <Playlists
            playlists={playlists}
            handleCurrentPlaylistName={handleCurrentPlaylistName}
        />
        <NewPlaylist
            handleOnSubmit={handleOnSubmit}
            playlistFormIsOpen={playlistFormIsOpen}
            handlePlaylistForm={handlePlaylistForm}
            handlePlaylistName={handlePlaylistName}
        />
        <Album/>
    </SidebarContainer>
)
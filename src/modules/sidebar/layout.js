import React from 'react';

import {SidebarContainer} from './layout.styled';

import {Menu} from './components/menu'
import {Playlists} from './components/playlists'
import {NewPlaylist} from './components/newplaylist'
import {Album} from './components/album'

export const SidebarLayout = () => (
    <SidebarContainer>
        <Menu/>
        <Playlists/>
        <NewPlaylist/>
        <Album/>
    </SidebarContainer>
)
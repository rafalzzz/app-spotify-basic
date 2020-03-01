import React from 'react';

import {PlaylistsContainer} from './playlists.styled'

export const Playlists = ({playlists, handleSetCurrentPlaylist, currentPlaylistName}) => {

    return (
    <PlaylistsContainer>
        <div className="playlistsTitle">PLAYLISTS</div>
        {playlists && playlists.map((playlist, i) => {
            return (
            <div key={i} style={{backgroundColor : currentPlaylistName === playlist.name ? "#ffffff10" : "transparent"}} className="playlistElement" onClick={handleSetCurrentPlaylist(playlist.name)}>{playlist.name}</div>
            )
        })}
    </PlaylistsContainer>
    )
}
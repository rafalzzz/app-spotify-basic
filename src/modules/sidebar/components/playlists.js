import React from 'react';

import {PlaylistsContainer} from './playlists.styled'

export const Playlists = ({playlists, handleCurrentPlaylistName}) => {

    return (
    <PlaylistsContainer>
        <div className="playlistsTitle">PLAYLISTS</div>
        {playlists.map((playlist, i) => {
            return (
            <button key={i} className="playlistElement" value={playlist.name} onClick={handleCurrentPlaylistName}>{playlist.name}</button>
            )
        })}
    </PlaylistsContainer>
    )
}
import React from 'react';

import {Link} from "react-router-dom";

import {ListHeaderContainer} from './listHeader.styled'

export const ListHeader = ({moreOptionsIsOpen, handleOpenMoreOptions, handleCloseMoreOptions, currentSongName, currentPlaylistName, handleAddSongToPlaylist, handleDeleteSongFromPlaylist, handleDeletePlaylist}) => {

    return (
        <ListHeaderContainer>
            <div>
                <div className="album">
                </div>
                <p>All Out 80s</p>
                
                <button className="more rb" 
                style={{border: moreOptionsIsOpen ? "solid 1px white" : "solid 1px #7f7f7f" }}
                onClick={moreOptionsIsOpen ? handleCloseMoreOptions() : handleOpenMoreOptions()}>
                    <i className="icon-dot-3"/>
                </button>
                <div className="moreOptions" 
                style={{display: moreOptionsIsOpen ? "block" : "none" }}>
                    <div onClick={handleAddSongToPlaylist(currentPlaylistName, currentSongName)}>Add music to playlist</div>
                    <div onClick={handleDeleteSongFromPlaylist(currentPlaylistName, currentSongName)}>Delete music from playlist</div>
                    <div onClick={handleDeletePlaylist(currentPlaylistName)}>Delete playlist</div>
                </div>
                <Link to="/user/favourite-list">
                    <button className="favs rb"><i className="icon-heart"/></button>
                </Link>
                <button className="pause">PAUSE</button>
            </div>
        </ListHeaderContainer>
    )
}
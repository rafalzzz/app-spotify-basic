import React from 'react';

import {ListHeaderContainer} from './listHeader.styled'
import { currentSong } from '../../../store/currentItems/selectors';

export const ListHeader = ({favListIsOpen, handleOpenFavList, handleCloseFavList, moreOptionsIsOpen, handleOpenMoreOptions, handleCloseMoreOptions, currentSongName, currentPlaylistName, playOrNot, handlePlayPause,handleAddSongToPlaylist, handleDeleteSongFromPlaylist, handleDeletePlaylist}) => {

    return (
        <ListHeaderContainer>
            <div>
                {currentSongName.song.previewUrl !== "" && 
                <div className="album">
                    <img src={currentSongName.song.artworkUrl100} alt="album" />
                </div> }
                {currentSongName.song.collectionName && 
                <p>{currentSongName.song.collectionName}</p>
                }
                {currentSongName.song.collectionName && 
                <div className="artist">{currentSongName.song.artistName}</div>
                }
                {currentSongName.song.collectionName && 
                <div className="title">{currentSongName.song.trackName}</div>
                }
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
                    <button className="favs rb" 
                    onClick={favListIsOpen ? handleCloseFavList : handleOpenFavList}
                    style={{border : favListIsOpen ? 'solid 1px white' : 'solid 1px #7f7f7f'}}>
                        <i className="icon-heart"/></button>
                <button className="pause" onClick={handlePlayPause}>{playOrNot ? "PAUSE" : "PLAY"}</button>
            </div>
        </ListHeaderContainer>
    )
}
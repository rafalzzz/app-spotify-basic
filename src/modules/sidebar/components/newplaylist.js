import React from 'react';

import {NewPlaylistForm} from './newplaylistForm'
import {NewPlaylistContainer} from './newplaylist.styled'

export const NewPlaylist = ({handlePlaylistForm, playlistFormIsOpen, handleOnSubmit, handlePlaylistName}) => {

    return (
        <NewPlaylistContainer>
            <div onClick={handlePlaylistForm()}><i className="icon-plus"/>
                New Playlist
            </div>
            <div style={{display: playlistFormIsOpen ? 'block' : "none"}}>
                <NewPlaylistForm
                    handlePlaylistForm={handlePlaylistForm}
                    handleOnSubmit={handleOnSubmit}
                    handlePlaylistName={handlePlaylistName}
                    />\
            </div>
        </NewPlaylistContainer>
    )
}
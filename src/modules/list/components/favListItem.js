import React from 'react';

import {FavListItemContainer} from './favListItem.styled'

export const FavListItem = ({favListItem, handleDeleteSongFromFav}) => {

    const handleOnClick = (id) => {
            handleDeleteSongFromFav(id)
    }

    return (
            <FavListItemContainer>
                <div className="row">
                    <div className="favo" onClick={(e) => handleOnClick(favListItem.song.previewUrl)}>
                        <i className="icon-heart"/>
                    </div>
                    <div className="titl">{favListItem.song.trackName}</div>
                    <div className="auth">{favListItem.song.artistName}</div>
                    <div className="date">{favListItem.song.releaseDate.slice(0, 10)}</div>
                </div>
            </FavListItemContainer>
    )
}
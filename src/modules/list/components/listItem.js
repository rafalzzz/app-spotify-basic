import React, {useState} from 'react';

import {ListItemContainer} from './listItem.styled'

export const ListItem = ({song, handleAddSongToFav, handleDeleteSongFromFav}) => {

    const [favChecked, setFavChecked] = useState(false)

    const handleOnClick = (song, id) => {
        if (favChecked === false) {
            handleAddSongToFav(song);
            setFavChecked(true);
        } if (favChecked === true) {
            handleDeleteSongFromFav(id)
            setFavChecked(false)
        }
    }

    return (
            <ListItemContainer>
                <div className="row">
                    <div className="favo" onClick={(e) => handleOnClick(song, song.previewUrl)}>
                        {
                        favChecked ? 
                        <i className="icon-heart"/>
                            :
                        <i className="icon-heart-empty"/>
                        }
                    </div>
                    <div className="titl">{song.trackName}</div>
                    <div className="auth">{song.artistName}</div>
                    <div className="date">{song.releaseDate.slice(0, 10)}</div>
                </div>
            </ListItemContainer>
    )
}
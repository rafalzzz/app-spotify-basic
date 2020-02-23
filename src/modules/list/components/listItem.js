import React, {useState, useEffect} from 'react';

import {ListItemContainer} from './listItem.styled'

export const ListItem = ({song, currentSongName, handleAddSongToFav, handleDeleteSongFromFav, handleSetCurrentSong, favList}) => {

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

    useEffect(() => {
        favList.map(favListItem => {
            if (favListItem.song.previewUrl === song.previewUrl)
            setFavChecked(true)
        });
    }, []);

    return (
            <ListItemContainer>
                <div className="row" style={{backgroundColor: currentSongName.song.previewUrl === song.previewUrl  ? "#ffffff10" : "transparent"}}>
                    <div className="favo" onClick={(e) => handleOnClick(song, song.previewUrl)}>
                        {
                        favChecked ? 
                        <i className="icon-heart"/>
                            :
                        <i className="icon-heart-empty"/>
                        }
                    </div>
                    <div className="titl" onClick={handleSetCurrentSong(song)}>{song.trackName}</div>
                    <div className="auth">{song.artistName}</div>
                    <div className="date">{song.releaseDate.slice(0, 10)}</div>
                </div>
            </ListItemContainer>
    )
}
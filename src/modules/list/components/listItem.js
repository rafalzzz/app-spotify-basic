import React, {useState, useEffect} from 'react';

import Duration from '../../../helpers/Duration'

import {ListItemContainer} from './listItem.styled'

export const ListItem = ({song, currentSongName, handleAddSongToFav, handleDeleteSongFromFav, handleSetCurrentSong, handlePlayThisSongNow, favList, handlePlayStopIcon, NowIsPlaying}) => {

    const [favChecked, setFavChecked] = useState(false)

    const handleOnClick = (song, id) => {
        if (favChecked === false) {
            handleAddSongToFav(song);
            setFavChecked(true);
        } if (favChecked === true) {
            handleDeleteSongFromFav(song, id)
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
            <div className="row"
                onClick={handleSetCurrentSong(song)}>
                    <div className="playStopIconBorder"
                        style={{backgroundColor: currentSongName.song.previewUrl === song.previewUrl  ? "#ffffff10" : "transparent"}}
                        onClick={handlePlayThisSongNow(song)}
                        >
                            <div className="playStopIcon">
                                <i className="icon-play"/>
                            </div>
                    </div>
                    <div className="favo" 
                        style={{backgroundColor: currentSongName.song.previewUrl === song.previewUrl  ? "#ffffff10" : "transparent"}} 
                        onClick={(e) => handleOnClick(song, song.previewUrl)}>
                        {
                        favChecked ? 
                        <i className="icon-heart"/>
                            :
                        <i className="icon-heart-empty"/>
                        }
                    </div>
                    <div className="titl" 
                        style={{backgroundColor: currentSongName.song.previewUrl === song.previewUrl  ? "#ffffff10" : "transparent",
                        color: NowIsPlaying.previewUrl === song.previewUrl ? "#1ed760" : "#b3b3b3"}} 
                        >
                            {song.trackName}
                        </div>
                    <div className="auth" 
                        style={{backgroundColor: currentSongName.song.previewUrl === song.previewUrl  ? "#ffffff10" : "transparent",
                        color: NowIsPlaying.previewUrl === song.previewUrl ? "#1ed760" : "#b3b3b3"}}
                        >
                            {song.artistName}
                        </div>
                    <div className="album" 
                        style={{backgroundColor: currentSongName.song.previewUrl === song.previewUrl  ? "#ffffff10" : "transparent",
                        color: NowIsPlaying.previewUrl === song.previewUrl ? "#1ed760" : "#b3b3b3"}}
                        >
                            {song.collectionName}
                        </div>
                    <div className="date" 
                        style={{backgroundColor: currentSongName.song.previewUrl === song.previewUrl  ? "#ffffff10" : "transparent",
                        color: NowIsPlaying.previewUrl === song.previewUrl ? "#1ed760" : "#b3b3b3"}}>
                            {song.releaseDate.slice(0, 10)}
                        </div>
                    <div className="time" 
                        style={{backgroundColor: currentSongName.song.previewUrl === song.previewUrl  ? "#ffffff10" : "transparent",
                        color: NowIsPlaying.previewUrl === song.previewUrl ? "#1ed760" : "#b3b3b3"}}
                        >
                            <Duration seconds={parseInt(song.trackTimeMillis / 1000)} />
                        </div>
                </div>
            </ListItemContainer>
    )
}
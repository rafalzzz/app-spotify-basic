import React, {useState, useEffect} from 'react';

import Duration from '../../../helpers/Duration'

import {PlaylistItemContainer} from './playlistItem.styled'

export const PlaylistItem = ({playlistSong, handleAddSongToFav, handleDeleteSongFromFav, handleSetCurrentSong, handlePlayThisSongNow, currentSongName, NowIsPlaying, favList}) => {

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
            if (favListItem.song.previewUrl === playlistSong.previewUrl)
            setFavChecked(true)
        });
    }, []);

    return (
            <PlaylistItemContainer>
                <div className="row"
                onClick={handleSetCurrentSong(playlistSong)}>
                    <div className="playStopIconBorder"
                        style={{backgroundColor: currentSongName.song.previewUrl === playlistSong.previewUrl  ? "#ffffff10" : "transparent"}}
                        onClick={handlePlayThisSongNow(playlistSong)}
                        >
                            <div className="playStopIcon">
                                <i className="icon-play"/>
                            </div>
                    </div>
                    <div className="favo" 
                        style={{backgroundColor: currentSongName.song.previewUrl === playlistSong.previewUrl  ? "#ffffff10" : "transparent"}} 
                        onClick={(e) => handleOnClick(playlistSong, playlistSong.previewUrl)}>
                        {
                        favChecked ? 
                        <i className="icon-heart"/>
                            :
                        <i className="icon-heart-empty"/>
                        }
                    </div>
                    <div className="titl" 
                        style={{backgroundColor: currentSongName.song.previewUrl === playlistSong.previewUrl  ? "#ffffff10" : "transparent",
                        color: NowIsPlaying.previewUrl === playlistSong.previewUrl ? "#1ed760" : "#b3b3b3"}} 
                        >
                            {playlistSong.trackName}
                        </div>
                    <div className="auth" 
                        style={{backgroundColor: currentSongName.song.previewUrl === playlistSong.previewUrl  ? "#ffffff10" : "transparent",
                        color: NowIsPlaying.previewUrl === playlistSong.previewUrl ? "#1ed760" : "#b3b3b3"}}
                        >
                            {playlistSong.artistName}
                        </div>
                    <div className="album" 
                        style={{backgroundColor: currentSongName.song.previewUrl === playlistSong.previewUrl  ? "#ffffff10" : "transparent",
                        color: NowIsPlaying.previewUrl === playlistSong.previewUrl ? "#1ed760" : "#b3b3b3"}}
                        >
                            {playlistSong.collectionName}
                        </div>
                    <div className="date" 
                        style={{backgroundColor: currentSongName.song.previewUrl === playlistSong.previewUrl  ? "#ffffff10" : "transparent",
                        color: NowIsPlaying.previewUrl === playlistSong.previewUrl ? "#1ed760" : "#b3b3b3"}}>
                            {playlistSong.releaseDate.slice(0, 10)}
                        </div>
                    <div className="time" 
                        style={{backgroundColor: currentSongName.song.previewUrl === playlistSong.previewUrl  ? "#ffffff10" : "transparent",
                        color: NowIsPlaying.previewUrl === playlistSong.previewUrl ? "#1ed760" : "#b3b3b3"}}
                        >
                            <Duration seconds={parseInt(playlistSong.trackTimeMillis / 1000)} />
                        </div>
                </div>
            </PlaylistItemContainer>
    )
}
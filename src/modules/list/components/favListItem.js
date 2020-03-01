import React from 'react';

import Duration from '../../../helpers/Duration'

import {FavListItemContainer} from './favListItem.styled'

export const FavListItem = ({favListItem, handleDeleteSongFromFav, handleSetCurrentSong, handlePlayThisSongNow, currentSongName, NowIsPlaying}) => {

    return (
            <FavListItemContainer>
                <div className="row"
                onClick={handleSetCurrentSong(favListItem.song)}>
                    <div className="playStopIconBorder"
                        style={{backgroundColor: currentSongName.song.previewUrl === favListItem.song.previewUrl  ? "#ffffff10" : "transparent"}}
                        onClick={handlePlayThisSongNow(favListItem.song)}
                        >
                            <div className="playStopIcon">
                                <i className="icon-play"/>
                            </div>
                    </div>
                    <div className="favo" 
                        style={{backgroundColor: currentSongName.song.previewUrl === favListItem.song.previewUrl  ? "#ffffff10" : "transparent"}} 
                        onClick={(e) => handleDeleteSongFromFav(favListItem.song, favListItem.song.previewUrl)}>
                        <i className="icon-heart"/>
                    </div>
                    <div className="titl" 
                        style={{backgroundColor: currentSongName.song.previewUrl === favListItem.song.previewUrl  ? "#ffffff10" : "transparent",
                        color: NowIsPlaying.previewUrl === favListItem.song.previewUrl ? "#1ed760" : "#b3b3b3"}} 
                        >
                            {favListItem.song.trackName}
                        </div>
                    <div className="auth" 
                        style={{backgroundColor: currentSongName.song.previewUrl === favListItem.song.previewUrl  ? "#ffffff10" : "transparent",
                        color: NowIsPlaying.previewUrl === favListItem.song.previewUrl ? "#1ed760" : "#b3b3b3"}}
                        >
                            {favListItem.song.artistName}
                        </div>
                    <div className="album" 
                        style={{backgroundColor: currentSongName.song.previewUrl === favListItem.song.previewUrl  ? "#ffffff10" : "transparent",
                        color: NowIsPlaying.previewUrl === favListItem.song.previewUrl ? "#1ed760" : "#b3b3b3"}}
                        >
                            {favListItem.song.collectionName}
                        </div>
                    <div className="date" 
                        style={{backgroundColor: currentSongName.song.previewUrl === favListItem.song.previewUrl  ? "#ffffff10" : "transparent",
                        color: NowIsPlaying.previewUrl === favListItem.song.previewUrl ? "#1ed760" : "#b3b3b3"}}>
                            {favListItem.song.releaseDate.slice(0, 10)}
                        </div>
                    <div className="time" 
                        style={{backgroundColor: currentSongName.song.previewUrl === favListItem.song.previewUrl  ? "#ffffff10" : "transparent",
                        color: NowIsPlaying.previewUrl === favListItem.song.previewUrl ? "#1ed760" : "#b3b3b3"}}
                        >
                            <Duration seconds={parseInt(favListItem.song.trackTimeMillis / 1000)} />
                        </div>
                </div>
            </FavListItemContainer>
    )
}
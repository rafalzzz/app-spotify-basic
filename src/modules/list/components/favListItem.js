import React, {useState, useEffect, useCallback} from 'react';

import Duration from '../../../helpers/Duration'

import {handlePlayOrStop, handlePlayThisSong} from '../../../store/currentItems/actions';
import {useDispatch} from 'react-redux';

import {FavListItemContainer} from './favListItem.styled'

export const FavListItem = ({favListItem, handleDeleteSongFromFav, handleSetCurrentSong, currentSongName, NowIsPlaying, playOrNot}) => {

    const [playingThisSongNow, setPlayingThisSongNow] = useState(false)
    const [showPlayButton, setShowPlayButton] = useState(false)

    const dispatch = useDispatch()

    const handleOnMouseEnter = useCallback(event => {
        setShowPlayButton(true)
    }, [showPlayButton])

    const handleOnMouseLeave = useCallback(event => {
        if (playingThisSongNow) {
            setShowPlayButton(true)
        } else {
            setShowPlayButton(false)
        }
    }, [showPlayButton, playingThisSongNow])

    const handlePlayThisSongNow = useCallback(event => {
        if (NowIsPlaying.previewUrl === favListItem.song.previewUrl) {
            if (playOrNot === true) {
                dispatch(handlePlayOrStop({ play: false }))
                setPlayingThisSongNow(false)
                setShowPlayButton(true)
            } else {
                dispatch(handlePlayOrStop({ play: true }))
                setPlayingThisSongNow(true)
                setShowPlayButton(true)
            }
        } else {
            let song = favListItem.song
            dispatch(handlePlayThisSong({ song }))
            setPlayingThisSongNow(true)
            setShowPlayButton(true)
        }
    }, [currentSongName])

    useEffect(() => {
        if (NowIsPlaying.previewUrl === favListItem.song.previewUrl) {
            if (playOrNot === true) {
                setShowPlayButton(true)
                setPlayingThisSongNow(true)
            } else if (playOrNot === false) {
                setShowPlayButton(true)
                setPlayingThisSongNow(false)
            }
        } else {
            setShowPlayButton(false)
            setPlayingThisSongNow(false)
        }
    }, [NowIsPlaying, playOrNot, playingThisSongNow]);

    useEffect(() => {
        NowIsPlaying.previewUrl !== favListItem.song.previewUrl ? 
        setPlayingThisSongNow(false) : 
        setPlayingThisSongNow(true)
    }, [showPlayButton]);

    console.log(favListItem)

    return (
            <FavListItemContainer>
                <div className="row"
                onClick={handleSetCurrentSong(favListItem.song)}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}>
                    <div className="playStopIconBorder"
                        style={{backgroundColor: currentSongName.song.previewUrl === favListItem.song.previewUrl  ? "#ffffff10" : "transparent"}}
                        onClick={handlePlayThisSongNow}
                        >
                            <div className="playStopIcon" style={{visibility: showPlayButton ? 'visible' : 'hidden'}}>
                                {playingThisSongNow ?
                                <i className="icon-pause"/> :
                                <i className="icon-play"/>
                                }
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
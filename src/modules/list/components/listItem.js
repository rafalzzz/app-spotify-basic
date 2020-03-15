import React, {useState, useEffect, useCallback} from 'react';

import Duration from '../../../helpers/Duration'

import {setCurrentIndex, handlePlayOrStop, handlePlayThisSong} from '../../../store/currentItems/actions';
import {useDispatch} from 'react-redux';

import {ListItemContainer} from './listItem.styled'

export const ListItem = ({song, currentSongName, handleAddSongToFav, handleDeleteSongFromFav, handleSetCurrentSong, favList, id, NowIsPlaying, playOrNot}) => {

    const [favChecked, setFavChecked] = useState(false)
    const [playingThisSongNow, setPlayingThisSongNow] = useState(false)
    const [showPlayButton, setShowPlayButton] = useState(false)

    const dispatch = useDispatch()

    const handleOnClick = (song, id) => {
        if (favChecked === false) {
            handleAddSongToFav(song);
            setFavChecked(true);
        } if (favChecked === true) {
            handleDeleteSongFromFav(song, id)
            setFavChecked(false)
        }
    }

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
        if (NowIsPlaying.previewUrl === song.previewUrl) {
            if (playOrNot === true) {
                dispatch(handlePlayOrStop({ play: false }))
                setPlayingThisSongNow(false)
                setShowPlayButton(true)
                dispatch(setCurrentIndex({ id }))
            } else {
                dispatch(handlePlayOrStop({ play: true }))
                setPlayingThisSongNow(true)
                setShowPlayButton(true)
                dispatch(setCurrentIndex({ id }))
            }
        } else {
            dispatch(handlePlayThisSong({ song }))
            setPlayingThisSongNow(true)
            setShowPlayButton(true)
            dispatch(setCurrentIndex({ id }))
        }
    }, [currentSongName])

    useEffect(() => {
        favList.map(favListItem => {
            if (favListItem.song.previewUrl === song.previewUrl)
            setFavChecked(true)
        });
    }, []);

    useEffect(() => {
        if (NowIsPlaying.previewUrl === song.previewUrl) {
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
        NowIsPlaying.previewUrl !== song.previewUrl ? 
        setPlayingThisSongNow(false) : 
        setPlayingThisSongNow(true)
    }, [showPlayButton]);

    return (
            <ListItemContainer>
            <div className="row"
                onClick={handleSetCurrentSong(song)}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}>
                    <div className="playStopIconBorder"
                        style={{backgroundColor: currentSongName.song.previewUrl === song.previewUrl  ? "#ffffff10" : "transparent"}}
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
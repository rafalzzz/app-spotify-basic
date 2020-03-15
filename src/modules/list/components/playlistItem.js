import React, {useState, useEffect, useCallback} from 'react';

import Duration from '../../../helpers/Duration'

import {setCurrentIndex, handlePlayOrStop, handlePlayThisSong} from '../../../store/currentItems/actions';
import {useDispatch} from 'react-redux';

import {PlaylistItemContainer} from './playlistItem.styled'

export const PlaylistItem = ({playlistSong, id, handleAddSongToFav, handleDeleteSongFromFav, handleSetCurrentSong, currentSongName, NowIsPlaying, favList, playOrNot}) => {

    const [favChecked, setFavChecked] = useState(false)
    const [playingThisSongNow, setPlayingThisSongNow] = useState(false)
    const [showPlayButton, setShowPlayButton] = useState(false)

    const dispatch = useDispatch()

    const handleOnClick = (playlistSong, id) => {
        if (favChecked === false) {
            handleAddSongToFav(playlistSong);
            setFavChecked(true);
        } if (favChecked === true) {
            handleDeleteSongFromFav(playlistSong, id)
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
        if (NowIsPlaying.previewUrl === playlistSong.previewUrl) {
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
            let song = playlistSong
            dispatch(handlePlayThisSong({ song }))
            setPlayingThisSongNow(true)
            setShowPlayButton(true)
            dispatch(setCurrentIndex({ id }))
        }
    }, [currentSongName])

    useEffect(() => {
        favList.map(favListItem => {
            if (favListItem.song.previewUrl === playlistSong.previewUrl)
            setFavChecked(true)
        });
    }, []);

    useEffect(() => {
        if (NowIsPlaying.previewUrl === playlistSong.previewUrl) {
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
        NowIsPlaying.previewUrl !== playlistSong.previewUrl ? 
        setPlayingThisSongNow(false) : 
        setPlayingThisSongNow(true)
    }, [showPlayButton]);


    return (
            <PlaylistItemContainer>
                <div className="row"
                onClick={handleSetCurrentSong(playlistSong)}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}>
                    <div className="playStopIconBorder"
                        style={{backgroundColor: currentSongName.song.previewUrl === playlistSong.previewUrl  ? "#ffffff10" : "transparent"}}
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
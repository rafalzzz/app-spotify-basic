import React, {useState, useCallback, useEffect, useRef} from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {playOrStop, NowPlayedSong} from '../../store/currentItems/selectors'
import {songsArrayToPlay} from '../../store/fetchSongs/selectors'

import {handlePlayOrStop, handlePlayThisSong} from '../../store/currentItems/actions';

import {FooterLayout} from './layout'

export const Footer = () => {

    const playOrNot = useSelector(playOrStop)
    const currentPlayedSong = useSelector(NowPlayedSong)
    const songsArr = useSelector(songsArrayToPlay)

    console.log(songsArr)

    const dispatch = useDispatch()

    const [played, setPlayed] = useState(0)
    const [url, setUrl] = useState("https://audio-ssl.itunes.apple.com/itunes-assets/Music7/v4/3c/e7/ac/3ce7ac90-4834-151a-667e-2259c7e7bd38/mzaf_760160703636187828.plus.aac.p.m4a")
    const pip = false
    const controls = false
    const light = false
    const [volume, setVolume] = useState(0.8)
    const [muted, setMuted] = useState(false)
    const loaded = 0
    const [duration, setDuration] = useState(0)
    const playbackRate = 1.0
    const [loop, setLoop] = useState(false)
    const [showRemaining, setShowRemaining] = useState(false)
    const [volumeIcon, setVolumeIcon] = useState("icon-volume-up")

    const setSongUrl = useCallback(songUrl => {
        setUrl(currentPlayedSong.previewUrl)
    }, [currentPlayedSong.previewUrl])

    useEffect(() => {
        dispatch(handlePlayOrStop({ play: false }))
        setSongUrl(currentPlayedSong.previewUrl)
        dispatch(handlePlayOrStop({ play: true }))
    }, [currentPlayedSong.previewUrl])

    const handlePlayPause = useCallback(event => {
        playOrNot === true ? 
        dispatch(handlePlayOrStop({ play: false }))
        :
        dispatch(handlePlayOrStop({ play: true }))
    }, [playOrNot])

    const handleToggleLoop = useCallback(event => {
        setLoop(!loop)
    }, [loop])

    const ref = useRef(null)

    const handleProgress =  value => {
        setPlayed(parseFloat(value.played))
    }

    const handleSeekChange = e => {
        setPlayed(parseFloat(e.target.value))
        ref.current.seekTo(parseFloat(e.target.value))
    }


    const handleVolumeChange = e => {
        setVolume(parseFloat(e.target.value))
        handleSetVolumeIcon(parseFloat(e.target.value))
    }
    
    const handleToggleMuted = useCallback(event => {
        setMuted(!muted)
    }, [muted])

    const handlePlay = useCallback(event => {
        dispatch(handlePlayOrStop({ play: true }))
    }, [])
    
    const handlePause = useCallback(event => {
        dispatch(handlePlayOrStop({ play: false }))
    }, [])
    
    const handleEnded = useCallback(event => {
        console.log('onEnded')
        let song = songsArr.results[7]
        console.log(song)
        /* dispatch(handlePlayThisSong({ song })) */
        /* dispatch(handlePlayOrStop({ play: false })) */
    }, [])
    
    const handleDuration = duration => {
        console.log('onDuration', duration)
        setDuration(duration)
    }

    const handleSetRemaining = useCallback(event => {
        setShowRemaining(!showRemaining)
    }, [showRemaining])

    const handleSetVolumeIcon = useCallback((volume) => {
        switch (true) {
            case volume === 0:
                setVolumeIcon("icon-volume-off")
            break;
            case volume > 0 && volume <= 0.3:
                setVolumeIcon("icon-volume-down")
            break;
            case volume > 0.3 && volume <= 0.6:
                setVolumeIcon("icon-volume")
            break;
            case volume > 0.6 && volume <= 1:
                setVolumeIcon("icon-volume-up")
            break;
            default:
                setVolumeIcon("icon-volume-up")
        }
    }, [volume])

    return (
        <FooterLayout 
        played={played}
        url={url}
        pip={pip}
        playing={playOrNot}
        controls={controls}
        light={light}
        volume={volume}
        muted={muted}
        loaded={loaded}
        duration={duration}
        playbackRate={playbackRate}
        loop={loop}
        showRemaining={showRemaining}
        volumeIcon={volumeIcon}
        ref={ref}

        handlePlayPause={handlePlayPause}
        handleToggleLoop={handleToggleLoop}
        handleProgress={handleProgress}
        handleSeekChange={handleSeekChange}
        handleVolumeChange={handleVolumeChange}
        handleToggleMuted={handleToggleMuted}
        handlePlay={handlePlay}
        handlePause={handlePause}
        handleEnded={handleEnded}
        handleDuration={handleDuration}
        handleSetRemaining={handleSetRemaining}

        currentPlayedSong={currentPlayedSong}
        />
    )   
}
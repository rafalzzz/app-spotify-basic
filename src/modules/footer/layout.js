import React from 'react';

import ReactPlayer from 'react-player'

import {Volume} from './components/volume'
import {SongInfo} from './components/songInfo'
import {Bar} from './components/bar'

import {LayoutContainer} from './layout.styled'

export const FooterLayout = React.forwardRef(({url, pip, playing, volume, muted, duration, loop, showRemaining, volumeIcon, handlePlayPause, handleToggleLoop, handleVolumeChange, handleToggleMuted, handlePlay, handlePause, handleEnded, handleDuration, handleSetRemaining, currentPlayedSong, played, handleProgress, handleSeekChange}, ref) => {
  
    return (
    <LayoutContainer>
        <SongInfo
        currentPlayedSong={currentPlayedSong}
        />
        <div className="musicPlayer">
            <div className="icons">
                <div className="iconLeft"><i className="icon-shuffle"/></div>
                <div className="icon"><i className="icon-to-start"/></div>
                <div className="icon mainIcon" onClick={handlePlayPause}>{playing ? <i className="icon-pause"/> : <i className="icon-play"/>}</div>
                <div className="icon"><i className="icon-to-end"/></div>
                <div className="icon iconRight" 
                    onClick={handleToggleLoop}
                    style={{color: loop ? '#1ed760' : "#b3b3b3"}}>
                        <i className="icon-loop-alt"/>
                </div>
                <ReactPlayer
                    ref={ref}
                    className='react-player'
                    width='0px'
                    height='0px'
                    url={url}
                    pip={pip}
                    playing={playing}
                    loop={loop}
                    volume={volume}
                    muted={muted}
                    onReady={() => console.log('onReady')}
                    onStart={() => console.log('onStart')}
                    onPlay={handlePlay}
                    onPause={handlePause}
                    onBuffer={() => console.log('onBuffer')}
                    onSeek={e => console.log('onSeek', e)}
                    onEnded={handleEnded}
                    onError={e => console.log('onError', e)}
                    onProgress={handleProgress}
                    onDuration={handleDuration}
                />
            </div>
            <Bar
                    played={played}
                    duration={duration}
                    showRemaining={showRemaining}
                    handleSeekChange={handleSeekChange}
                    handleSetRemaining={handleSetRemaining}
            />
        </div>
            <Volume
                volume={volume}
                muted={muted}
                volumeIcon={volumeIcon}
                handleVolumeChange={handleVolumeChange}
                handleToggleMuted={handleToggleMuted}
            />
    </LayoutContainer>
    )
});
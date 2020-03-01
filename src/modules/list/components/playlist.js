import React, {useEffect} from 'react';

import {PlaylistContainer} from './playlist.styled'
import {TableHeader} from './tableHeader'
import {PlaylistItem} from './playlistItem'

export const Playlist = ({handleAddSongToFav, handleDeleteSongFromFav, handleSetCurrentSong, handlePlayThisSongNow, currentSongName, NowIsPlaying, favList, currentPlaylistSongsList, returnCurrentPlaylistSongs}) => {

    useEffect(() => {
        returnCurrentPlaylistSongs()
    }, [])

    return (    
    <PlaylistContainer>
        <div className="table">
            <TableHeader/>
            {currentPlaylistSongsList && currentPlaylistSongsList.map((playlistSong, i=0) => (
                <div key={i++}>
                    <PlaylistItem
                        playlistSong={playlistSong}

                        handleAddSongToFav={handleAddSongToFav}
                        handleDeleteSongFromFav={handleDeleteSongFromFav}

                        handleSetCurrentSong={handleSetCurrentSong}
                        handlePlayThisSongNow={handlePlayThisSongNow}
                        currentSongName={currentSongName}
                        NowIsPlaying={NowIsPlaying}
                        favList={favList}
                    />
                </div>
            ))}
        </div>
    </PlaylistContainer>
    )
}
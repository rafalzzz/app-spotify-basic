import React, {useEffect} from 'react';

import {TableContainer} from './table.styled'
import {TableHeader} from './tableHeader'
import {ListItem} from './listItem'

export const Table = ({songs, loading, error, favList, handleFetchSongs, currentSongName, handleAddSongToFav, handleDeleteSongFromFav, handleSetCurrentSong, handlePlayThisSongNow, handlePlayStopIcon, NowIsPlaying, playOrNot}) => {

    useEffect(() => {
        handleFetchSongs('pop');
      }, []);

    return (    
    <TableContainer>
        <div className="table">
            <TableHeader/>
            {songs && songs.map((song, i=0) => (
                <div key={i++}>
                    <ListItem
                        song={song}
                        favList={favList}
                        id={i++}

                        currentSongName={currentSongName}
                        handleAddSongToFav={handleAddSongToFav}
                        handleDeleteSongFromFav={handleDeleteSongFromFav}
                        handleSetCurrentSong={handleSetCurrentSong}
                        handlePlayThisSongNow={handlePlayThisSongNow}
                        handlePlayStopIcon={handlePlayStopIcon}
                        NowIsPlaying={NowIsPlaying}
                    />
                </div>
            ))}
            <div style={{height: '17px'}}></div>
        </div>
    </TableContainer>
    )
}
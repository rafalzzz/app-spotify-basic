import React, {useEffect} from 'react';

import {TableContainer} from './table.styled'
import {TableHeader} from './tableHeader'
import {ListItem} from './listItem'

export const Table = ({selectCategory, songs, loading, error, favList, handleFetchSongs, currentSongName, handleAddSongToFav, handleDeleteSongFromFav, handleSetCurrentSong, handlePlayThisSongNow, handlePlayStopIcon, NowIsPlaying, playOrNot}) => {

    useEffect(() => {
        selectCategory('search')
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
                        playOrNot={playOrNot}

                        currentSongName={currentSongName}
                        handleAddSongToFav={handleAddSongToFav}
                        handleDeleteSongFromFav={handleDeleteSongFromFav}
                        handleSetCurrentSong={handleSetCurrentSong}
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
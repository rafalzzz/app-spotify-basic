import React from 'react';

import {FavListContainer} from './favList.styled'
import {TableHeader} from './tableHeader'
import {FavListItem} from './favListItem'

export const FavList = ({favList, handleDeleteSongFromFav, handleSetCurrentSong, handlePlayThisSongNow, currentSongName, NowIsPlaying, playOrNot}) => {

    return (    
    <FavListContainer>
        <div className="table">
            <TableHeader/>
            {favList && favList.map((favListItem, i=0) => (
                <div key={i++}>
                    <FavListItem
                        favListItem={favListItem}
                        playOrNot={playOrNot}

                        handleDeleteSongFromFav={handleDeleteSongFromFav}

                        handleSetCurrentSong={handleSetCurrentSong}
                        handlePlayThisSongNow={handlePlayThisSongNow}
                        currentSongName={currentSongName}
                        NowIsPlaying={NowIsPlaying}
                    />
                </div>
            ))}
        </div>
    </FavListContainer>
    )
}
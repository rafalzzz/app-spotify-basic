import React from 'react';

import {SongInfoContainer} from './songInfo.styled'

export const SongInfo = (/* {volume, handleVolumeChange} */) => {

    return(
        <SongInfoContainer>
            <div className="songAlbum"></div>
            <div className="songTitle">Drift</div>
            <div className="songArtist">Mata</div>
        </SongInfoContainer>
    )
}
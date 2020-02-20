import React from 'react';

import {FavListContainer} from './favList.styled'
import {TableHeader} from './tableHeader'
import {FavListItem} from './favListItem'

export const FavList = ({favList, handleDeleteSongFromFav}) => {

    return (    
    <FavListContainer>
        <div className="table">
            <TableHeader/>
            {favList && favList.map((favListItem, i=0) => (
                <div key={i++}>
                    <FavListItem
                        favListItem={favListItem}

                        handleDeleteSongFromFav={handleDeleteSongFromFav}
                    />
                </div>
            ))}
        </div>
    </FavListContainer>
    )
}
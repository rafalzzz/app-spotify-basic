import React from 'react';

import {ListItemContainer} from './listItem.styled'

export const ListItem = ({song}) => (
    
            <ListItemContainer>
                <div className="row">
                    <div className="favo"><i className="icon-heart-empty"/></div>
                    <div className="titl">{song.trackName}</div>
                    <div className="auth">{song.artistName}</div>
                    <div className="date">{song.releaseDate.slice(0, 10)}</div>
                </div>
            </ListItemContainer>
)
import React from 'react';

import {ListHeaderContainer} from './listHeader.styled'

export const ListHeader = () => (
    <ListHeaderContainer>
        <div>
            <div className="album">
            </div>
            <p>All Out 80s</p>

            <button className="more rb"><i className="icon-dot-3"/></button>
            <button className="favs rb"><i className="icon-heart"/></button>
            <button className="pause">PAUSE</button>
        </div>
    </ListHeaderContainer>
)
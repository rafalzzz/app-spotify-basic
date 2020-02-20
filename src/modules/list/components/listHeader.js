import React from 'react';

import {Link} from "react-router-dom";

import {ListHeaderContainer} from './listHeader.styled'

export const ListHeader = () => (
    <ListHeaderContainer>
        <div>
            <div className="album">
            </div>
            <p>All Out 80s</p>
            
            <button className="more rb"><i className="icon-dot-3"/></button>
            <Link to="/user/favourite-list">
                <button className="favs rb"><i className="icon-heart"/></button>
            </Link>
            <button className="pause">PAUSE</button>
        </div>
    </ListHeaderContainer>
)
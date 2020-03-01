import React from 'react';

import {Link} from 'react-router-dom'

import {MenuContainer} from './menu.styled'
import "../../../fontello/css/home.css"

export const Menu = () => (
    <MenuContainer>
        <Link to="/user/about" style={{textDecoration: "none"}}>
        <div><i className="icon-home"/>About</div>
        </Link>
        <Link to="/user/main" style={{textDecoration: "none"}}>
        <div><i className="icon-folder-empty"/>Browse</div>
        </Link>
        <Link to="/user/playlist" style={{textDecoration: "none"}}>
        <div><i className="icon-note"/>Playlists</div>
        </Link>
    </MenuContainer>
)
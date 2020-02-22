import React, {useState} from 'react';

import {Link} from "react-router-dom";

import {ListHeaderContainer} from './listHeader.styled'

export const ListHeader = ({handleDeletePlaylistButton}) => {

    const [moreOptionsIsOpen, setMoreOptionsIsOpen] = useState(false)

    return (
        <ListHeaderContainer>
            <div>
                <div className="album">
                </div>
                <p>All Out 80s</p>
                
                <button className="more rb" 
                style={{border: moreOptionsIsOpen ? "solid 1px white" : "solid 1px #7f7f7f" }}
                onClick={() => setMoreOptionsIsOpen(!moreOptionsIsOpen)}>
                    <i className="icon-dot-3"/>
                </button>
                <div className="moreOptions" 
                style={{display: moreOptionsIsOpen ? "block" : "none" }}>
                    <div>Add music to playlist</div>
                    <div>Delete music from playlist</div>
                    <div onClick={handleDeletePlaylistButton}>Delete playlist</div>
                </div>
                <Link to="/user/favourite-list">
                    <button className="favs rb"><i className="icon-heart"/></button>
                </Link>
                <button className="pause">PAUSE</button>
            </div>
        </ListHeaderContainer>
    )
}
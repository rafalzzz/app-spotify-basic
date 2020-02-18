import React, {useState} from 'react';

import {LogoutContainer} from './layout.styled'

export const LogoutMenu = ({onClick, username}) => {

    const [showLogoutMenu, setShowLogoutMenu] = useState(false)

    return(
    <LogoutContainer>
        <div><span className="dots" style={{color: showLogoutMenu ? "white" : "#868686"}} onClick={() => setShowLogoutMenu(!showLogoutMenu)}>...</span>
            {showLogoutMenu &&
            <div className="logoutMenu">
            <p>Welcome</p>
            <p>{username}</p>
            <button onClick={onClick}>Sign out</button>
            </div>}
        </div>
    </LogoutContainer>
    )
}
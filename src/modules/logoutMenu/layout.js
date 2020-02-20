import React, {useState} from 'react';

import {LogoutContainer} from './layout.styled'

export const LogoutMenu = ({handleSignOut, username}) => {

    const [signOutMenuIsOpen, setSignOutMenuIsOpen] = useState(false)

    return(
        <LogoutContainer>
            <div><span className="dots" style={{color: signOutMenuIsOpen ? "white" : "#868686"}} onClick={() => setSignOutMenuIsOpen(!signOutMenuIsOpen)}>...</span>
            <div className="logoutMenu" style={{display: signOutMenuIsOpen ? "block" : "none"}}>
            <div>Welcome</div>
            <div>{username}</div>
            <button onClick={handleSignOut}>Sign out</button>
            </div>
        </div>
        </LogoutContainer>
    );
}
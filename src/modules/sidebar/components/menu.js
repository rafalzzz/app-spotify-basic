import React from 'react';

import {MenuContainer} from './menu.styled'
import "../../../fontello/css/home.css"

export const Menu = () => (
    <MenuContainer>
        <div><i className="icon-home"/>Home</div>
        <div><i className="icon-folder-empty"/>Browse</div>
        <div><i className="icon-dot-circled"/>Radio</div>
    </MenuContainer>
)
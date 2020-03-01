import React from 'react';

import {LoginContainer} from './login.styled'

export const LoginLayout = ({onClick}) => {

return(
    <LoginContainer>
        <h1>Sign-in with:</h1>
        <button onClick={onClick}>Google</button>
    </LoginContainer>
)}
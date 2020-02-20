import React from 'react';

import {Link} from "react-router-dom";

import {LoginContainer} from './login.styled'

export const Login = ({onClick}) => (
    <LoginContainer>
        <h1>Sign-in with:</h1>
        <button onClick={onClick}>Google</button>
    </LoginContainer>
)
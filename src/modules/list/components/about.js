import React from 'react';

import {AboutContainer} from './about.styled'

export const About = () => {

    return (
        <AboutContainer>
            <h1>About this app</h1>
            <div>My main goal during writing this app was build simple spotify version.</div>
            <div>I used iTunes API to download tracks, Firestore to save data and redux to manage actions.</div>
        </AboutContainer>
    )
}
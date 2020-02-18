import React, {useState, useEffect} from 'react';

import {LogoutMenu} from './logoutMenu/layout'
import {Sidebar} from './sidebar/index'
import {List} from './list/index'
import {Footer} from './footer/index'

import {LoginContainer} from './loginPanel/login.styled'

import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
    apiKey: "AIzaSyA5UgL15JX4pq0fnAITMHIAx1FhhUj7ut8",
    authDomain: "ify-7881d.firebaseapp.com"
  })

export const Layout = () => {

    const [isSignedIn, setIsSignedIn] = useState(false)

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
          signInSuccess: () => false
        }
      }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user)
            console.log("user", user)
    })}, []);

    const handleOnClick = () => {
        firebase.auth().signOut()
    }

    return (
    <div>

        {isSignedIn ? (
          <span>
                <LogoutMenu
                    onClick={handleOnClick}
                    username={firebase.auth().currentUser.displayName}
                />
                <Sidebar/>
                <List/>
                <Footer/>
          </span>
        ) : (

            <LoginContainer>
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            </LoginContainer>
        )}
    </div>
    )
}
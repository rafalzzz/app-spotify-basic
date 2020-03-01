import React, {useEffect, useCallback} from 'react';

import {db} from '../../common/firebase'
import {useDispatch} from 'react-redux';
import {addSongToFav} from '../../store/favSongs/actions';
import {LoginLayout} from './layout'

export const Login = ({onClick}) => {

    const dispatch = useDispatch()

    const handleDispatchAddSongToFav = useCallback( song => {
        dispatch(addSongToFav({ song }))
      }, [])
      
      useEffect(() => {
        db.collection("favList").doc("favList").get()
        .then(doc => {
            doc.data().songs.forEach(song => {
              handleDispatchAddSongToFav(song)
            })
        }).catch(error => {
            console.log("Error getting document:", error);
        });
      }, [])

return(
    <LoginLayout 
     onClick={onClick}
    />
)}
import React, {useState, useEffect, useCallback, memo} from 'react';

import firebase, {db} from '../../common/firebase'

import {useSelector, useDispatch} from 'react-redux';

import {songsArray, loadingSongs, isError} from '../../store/fetchSongs/selectors';
import {favSongsList} from '../../store/favSongs/selectors';
import {playlists} from '../../store/playlists/selectors';
import {currentSong, currentPlaylist, playOrStop, NowPlayedSong} from '../../store/currentItems/selectors';

import {fetchSongsStarted} from '../../store/fetchSongs/actions';
import {addSongToFav, deleteSongFromFav} from '../../store/favSongs/actions';
import {addSongToPlaylist, deleteSongFromPlaylist, deletePlaylist} from '../../store/playlists/actions';
import {setCurrentSong, handlePlayOrStop, handlePlayThisSong} from '../../store/currentItems/actions';

import {ListLayout} from './layout'

export const List = memo(() => {

  const [term, setTerm] = useState('');
  const [moreOptionsIsOpen, setMoreOptionsIsOpen] = useState(false)
  const [currentPlaylistSongsList, setCurrentPlaylistSongsList] = useState([])

  const dispatch = useDispatch()

  // Selectors

  const songs = useSelector(songsArray)
  const loading = useSelector(loadingSongs)
  const error = useSelector(isError)
  const favList = useSelector(favSongsList)
  const playOrNot = useSelector(playOrStop)
  const NowIsPlaying = useSelector(NowPlayedSong)
  
  const currentPlaylistSongs = useSelector(playlists)

  console.log(currentPlaylistSongs)

  const returnCurrentPlaylistSongs = () => {
    currentPlaylistSongs.map(playlist =>
      playlist.name === currentPlaylistName ?
      setCurrentPlaylistSongsList(playlist.songs)
      :
      null)
  }
  

  const currentPlaylistName = useSelector(currentPlaylist)
  const currentSongName = useSelector(currentSong)

  // Searchbar functions

  const handleFetchSongs = useCallback((term) => {
    dispatch(fetchSongsStarted({ term: term }));
  }, []);

  const handleOnChange = (e) => {
    setTerm(e.target.value)
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleFetchSongs(term);
  };
  
  // PlayButton function

  const handlePlayPause = useCallback(event => {
    playOrNot ? 
    dispatch(handlePlayOrStop({ play: false }))
    :
    dispatch(handlePlayOrStop({ play: true }))
  }, [playOrNot])

  // Favourite songs functions

  const handleDispatchAddSongToFav = useCallback( song => {
    dispatch(addSongToFav({ song }))
  }, [])

  const handleSendFavListToFirestore = (song) => {
      db.collection("favList").doc("favList").update({
        songs: firebase.firestore.FieldValue.arrayUnion(song)
      })
      .then(function() {
        console.log("Song successfully added!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
  }

      // update data on Firestorm

  const handleAddSongToFav = useCallback((song) => {
    handleDispatchAddSongToFav(song)
    handleSendFavListToFirestore(song)
  }, [])
  
  const handleDeleteSongFromFav = useCallback(( song, id) => {
      dispatch(deleteSongFromFav({ id }))

      db.collection("favList").doc("favList").update({
        songs: firebase.firestore.FieldValue.arrayRemove(song)
      })
      .then(function() {
        console.log("Song successfully deleted!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
  }, []);

  // Playlists functions

  console.log(currentPlaylistName)

  const handleAddSongToPlaylist = useCallback((playlist, song) => event => {
    dispatch(addSongToPlaylist({ playlistName: playlist, song: song }));

    db.collection("playlists").doc(playlist).update({
      name: playlist,
      songs: firebase.firestore.FieldValue.arrayUnion(song)
    })
    .then(function() {
      console.log("Song successfully added to playlist!");
    })
    .catch(function(error) {
        console.error("Error writing playlist: ", error);
    });


  }, []);

  const handleDeleteSongFromPlaylist = useCallback((playlist, song) => event => {
    dispatch(deleteSongFromPlaylist({ playlistName: playlist, song: song }));

    db.collection("playlists").doc(playlist).update({
      songs: firebase.firestore.FieldValue.arrayRemove(song)
    })
    .then(function() {
      console.log("Song successfully deleted from playlist!");
    })
    .catch(function(error) {
        console.error("Error writing playlist: ", error);
    });
  }, []);

  const handleDeletePlaylist = useCallback(name => event => {
    dispatch(deletePlaylist({ name }))

    db.collection("playlists").doc(name).delete().then(() => {
      console.log("Playlist successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing playlist: ", error);
  });
  }, []);

  // CurrentItems functions

  const handleSetCurrentSong = useCallback(song => event => {
    dispatch(setCurrentSong({ song }));
  }, []);

  const handlePlayThisSongNow = useCallback(song => event => {
    if (NowIsPlaying.previewUrl !== song.previewUrl) {
      dispatch(handlePlayThisSong({ song }))
      dispatch(setCurrentSong({ song }))
    } else if (NowIsPlaying.previewUrl === song.previewUrl) {
      dispatch(handlePlayOrStop({ play: false }))
    }
  }, [])

  const handlePlayStopIcon = useCallback(song => event => {
    NowIsPlaying.previewUrl === song.previewUrl ?
    handlePlayPause()
    :
    handlePlayThisSongNow(song)
  }, [])

  // Other functions

  const handleOpenMoreOptions = useCallback(event => () => {
    setMoreOptionsIsOpen(true);
  }, []);

  const handleCloseMoreOptions = useCallback(event => () => {
    setMoreOptionsIsOpen(false);
  }, []);

    return (
        <ListLayout
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}

          moreOptionsIsOpen={moreOptionsIsOpen}
          handleOpenMoreOptions={handleOpenMoreOptions}

          currentSongName={currentSongName}
          currentPlaylistName={currentPlaylistName}

          playOrNot={playOrNot}
          handlePlayPause={handlePlayPause}


          handleCloseMoreOptions={handleCloseMoreOptions}
          handleAddSongToPlaylist={handleAddSongToPlaylist}
          handleDeleteSongFromPlaylist={handleDeleteSongFromPlaylist}
          handleDeletePlaylist={handleDeletePlaylist}

          handleFetchSongs={handleFetchSongs}
          handleAddSongToFav={handleAddSongToFav}
          handleDeleteSongFromFav={handleDeleteSongFromFav}
          handleSetCurrentSong={handleSetCurrentSong}
          handlePlayThisSongNow={handlePlayThisSongNow}
          handlePlayStopIcon={handlePlayStopIcon}
          NowIsPlaying={NowIsPlaying}

          returnCurrentPlaylistSongs={returnCurrentPlaylistSongs}

          songs={songs}
          loading={loading}
          error={error}
          favList={favList}
          currentPlaylistSongsList={currentPlaylistSongsList}
        />
  );
});
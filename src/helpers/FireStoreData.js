import firebase, { db } from "../common/firebase";

// FavSongs functions

export const handleSendFavSongToFirestore = song => {
  db.collection("favList")
    .doc("favList")
    .update({
      songs: firebase.firestore.FieldValue.arrayUnion(song)
    })
    .then(function() {
      console.log("Song successfully added!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
};

export const handleDeleteFavSongFromFirestore = song => {
  db.collection("favList")
    .doc("favList")
    .update({
      songs: firebase.firestore.FieldValue.arrayRemove(song)
    })
    .then(function() {
      console.log("Song successfully deleted!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
};

// Playlists functions

export const handleAddPlaylistToFirestore = name => {
  db.collection("playlists")
    .doc(name)
    .set({
      name: name,
      songs: []
    })
    .then(function() {
      console.log("Playlist successfully created!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
};

export const handleDeletePlaylistFromFirestore = name => {
  db.collection("playlists")
    .doc(name)
    .delete()
    .then(() => {
      console.log("Playlist successfully deleted!");
    })
    .catch(function(error) {
      console.error("Error removing playlist: ", error);
    });
};

export const handleAddSongToPlaylistOnFirestore = (playlist, song) => {
  db.collection("playlists")
    .doc(playlist)
    .update({
      name: playlist,
      songs: firebase.firestore.FieldValue.arrayUnion(song)
    })
    .then(function() {
      console.log("Song successfully added to playlist!");
    })
    .catch(function(error) {
      console.error("Error writing playlist: ", error);
    });
};

export const handleDeleteSongFromPlaylistOnFirestore = (playlist, song) => {
  db.collection("playlists")
    .doc(playlist)
    .update({
      songs: firebase.firestore.FieldValue.arrayRemove(song)
    })
    .then(function() {
      console.log("Song successfully deleted from playlist!");
    })
    .catch(function(error) {
      console.error("Error writing playlist: ", error);
    });
};

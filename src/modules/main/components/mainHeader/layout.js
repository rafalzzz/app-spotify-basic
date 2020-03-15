import React from "react";

import { MainHeaderContainer } from "./layout.styled";
import { MoreOptions } from "./components/moreOptions";

export const MainHeaderLayout = ({
  favListIsOpen,
  handleOpenFavList,
  handleCloseFavList,
  moreOptionsIsOpen,
  handleMoreOptions,
  currentSongName,
  currentPlaylistName,
  playOrNot,
  handlePlayPause,
  handleAddSongToPlaylist,
  handleDeleteSongFromPlaylist,
  handleDeletePlaylist
}) => {
  return (
    <MainHeaderContainer>
      <div>
        {currentSongName.song.previewUrl !== "" && (
          <div className="album">
            <img src={currentSongName.song.artworkUrl100} alt="album" />
          </div>
        )}
        {currentSongName.song.collectionName && (
          <p>{currentSongName.song.collectionName}</p>
        )}
        {currentSongName.song.collectionName && (
          <div className="artist">{currentSongName.song.artistName}</div>
        )}
        {currentSongName.song.collectionName && (
          <div className="title">{currentSongName.song.trackName}</div>
        )}
        <button
          className="more rb"
          style={{
            border: moreOptionsIsOpen ? "solid 1px white" : "solid 1px #7f7f7f"
          }}
          onClick={handleMoreOptions}
        >
          <i className="icon-dot-3" />
        </button>
        <MoreOptions
          moreOptionsIsOpen={moreOptionsIsOpen}
          handleAddSongToPlaylist={handleAddSongToPlaylist}
          handleDeleteSongFromPlaylist={handleDeleteSongFromPlaylist}
          handleDeletePlaylist={handleDeletePlaylist}
          currentPlaylistName={currentPlaylistName}
          currentSongName={currentSongName}
        />
        <button
          className="favs rb"
          onClick={favListIsOpen ? handleCloseFavList : handleOpenFavList}
          style={{
            border: favListIsOpen ? "solid 1px white" : "solid 1px #7f7f7f"
          }}
        >
          <i className="icon-heart" />
        </button>
        <button className="pause" onClick={handlePlayPause}>
          {playOrNot ? "PAUSE" : "PLAY"}
        </button>
      </div>
    </MainHeaderContainer>
  );
};

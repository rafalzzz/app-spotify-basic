import React from 'react';

import {Switch, Route} from "react-router-dom";

import {ListContainer} from './layout.styled'

import {About} from './components/about'
import {SearchBar} from './components/searchbar'
import {ListHeader} from './components/listHeader'
import {Table} from './components/table';
import {FavList} from './components/favList'
import {Playlist} from './components/playlist'

export const ListLayout = ({handleOnChange, handleOnSubmit, moreOptionsIsOpen, currentSongName, currentPlaylistName, playOrNot, handlePlayPause, favListIsOpen, handleOpenFavList, handleCloseFavList, handleOpenMoreOptions, handleCloseMoreOptions, handleAddSongToPlaylist, handleDeleteSongFromPlaylist, handleDeletePlaylist, handleFetchSongs, handleAddSongToFav, handleDeleteSongFromFav, handleSetCurrentSong, handlePlayThisSongNow, handlePlayStopIcon, NowIsPlaying, returnCurrentPlaylistSongs, songs, loading, error, favList, currentPlaylistSongsList}) => (
    <ListContainer>
        <SearchBar
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
        />
        <Switch>
        <Route path="/user/about">
            <About />
        </Route>
        <Route path="/user/main">
            <ListHeader
                favListIsOpen={favListIsOpen}
                handleOpenFavList={handleOpenFavList}
                handleCloseFavList={handleCloseFavList}

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
            />
            <Table
                handleFetchSongs={handleFetchSongs}
                songs={songs}
                loading={loading}
                error={error}
                favList={favList}
                playOrNot={playOrNot}

                currentSongName={currentSongName}
                handleAddSongToFav={handleAddSongToFav}
                handleDeleteSongFromFav={handleDeleteSongFromFav}
                handleSetCurrentSong={handleSetCurrentSong}
                handlePlayThisSongNow={handlePlayThisSongNow}
                handlePlayStopIcon={handlePlayStopIcon}
                NowIsPlaying={NowIsPlaying}
            />
        </Route>
        <Route path="/user/favourite-list">
            <ListHeader
                favListIsOpen={favListIsOpen}
                handleOpenFavList={handleOpenFavList}
                handleCloseFavList={handleCloseFavList}

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
            />
            <FavList
                favList={favList}
                handleDeleteSongFromFav={handleDeleteSongFromFav}
                playOrNot={playOrNot}

                handleSetCurrentSong={handleSetCurrentSong}
                handlePlayThisSongNow={handlePlayThisSongNow}
                currentSongName={currentSongName}
                NowIsPlaying={NowIsPlaying}
            />
        </Route>
        <Route path="/user/playlist">
            <ListHeader
                favListIsOpen={favListIsOpen}
                handleOpenFavList={handleOpenFavList}
                handleCloseFavList={handleCloseFavList}

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
            />
            <Playlist

                handleAddSongToFav={handleAddSongToFav}
                handleDeleteSongFromFav={handleDeleteSongFromFav}

                handleSetCurrentSong={handleSetCurrentSong}
                handlePlayThisSongNow={handlePlayThisSongNow}
                currentSongName={currentSongName}
                NowIsPlaying={NowIsPlaying}
                favList={favList}
                playOrNot={playOrNot}

                returnCurrentPlaylistSongs={returnCurrentPlaylistSongs}
                currentPlaylistSongsList={currentPlaylistSongsList}
            />
        </Route>
        </Switch>
    </ListContainer>
)
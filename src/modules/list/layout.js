import React from 'react';

import {Switch, Route} from "react-router-dom";

import {ListContainer} from './layout.styled'

import {SearchBar} from './components/searchbar'
import {ListHeader} from './components/listHeader'
import {Table} from './components/table';
import {FavList} from './components/favList'

export const ListLayout = ({handleOnChange, handleOnSubmit, moreOptionsIsOpen, currentSongName, currentPlaylistName, handleOpenMoreOptions, handleCloseMoreOptions, handleAddSongToPlaylist, handleDeleteSongFromPlaylist, handleDeletePlaylist, handleFetchSongs, handleAddSongToFav, handleDeleteSongFromFav, handleSetCurrentSong, songs, loading, error, favList}) => (
    <ListContainer>
        <SearchBar
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
        />
        <ListHeader
            moreOptionsIsOpen={moreOptionsIsOpen}
            handleOpenMoreOptions={handleOpenMoreOptions}

            currentSongName={currentSongName}
            currentPlaylistName={currentPlaylistName}

            handleCloseMoreOptions={handleCloseMoreOptions}
            handleAddSongToPlaylist={handleAddSongToPlaylist}
            handleDeleteSongFromPlaylist={handleDeleteSongFromPlaylist}
            handleDeletePlaylist={handleDeletePlaylist}
        />
        <Switch>
        <Route path="/user/main">
            <Table
                handleFetchSongs={handleFetchSongs}
                songs={songs}
                loading={loading}
                error={error}
                favList={favList}

                currentSongName={currentSongName}
                handleAddSongToFav={handleAddSongToFav}
                handleDeleteSongFromFav={handleDeleteSongFromFav}
                handleSetCurrentSong={handleSetCurrentSong}
            />
        </Route>
        <Route path="/user/favourite-list">
            <FavList
                favList={favList}

                handleDeleteSongFromFav={handleDeleteSongFromFav}
            />
        </Route>
        </Switch>
    </ListContainer>
)
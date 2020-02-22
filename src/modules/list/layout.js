import React from 'react';

import {Switch, Route} from "react-router-dom";

import {ListContainer} from './layout.styled'

import {SearchBar} from './components/searchbar'
import {ListHeader} from './components/listHeader'
import {Table} from './components/table';
import {FavList} from './components/favList'

export const ListLayout = ({handleOnChange, handleOnSubmit, handleDeletePlaylistButton, handleFetchSongs, handleAddSongToFav, handleDeleteSongFromFav, songs, loading, error, favList}) => (
    <ListContainer>
        <SearchBar
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
        />
        <ListHeader
            handleDeletePlaylistButton={handleDeletePlaylistButton}
        />
        <Switch>
        <Route path="/user/main">
            <Table
                handleFetchSongs={handleFetchSongs}
                songs={songs}
                loading={loading}
                error={error}
                favList={favList}

                handleAddSongToFav={handleAddSongToFav}
                handleDeleteSongFromFav={handleDeleteSongFromFav}
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
import React from 'react';

import {ListContainer} from './layout.styled'

import {SearchBar} from './components/searchbar'
import {ListHeader} from './components/listHeader'
import {Table} from './components/table';

export const ListLayout = ({handleOnChange, handleOnSubmit, songs, loading, error}) => (
    <ListContainer>
        <SearchBar
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
        />
        <ListHeader/>
        <Table
            songs={songs}
            loading={loading}
            error={error}
        />

    </ListContainer>
)
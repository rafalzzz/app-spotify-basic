import React from 'react';

import {SearchBarContainer} from './searchbar.styled'

export const SearchBar = ({handleOnChange, handleOnSubmit}) => (
    <SearchBarContainer>
        <button className="btn"><i className="icon-left-open"/></button>
        <button className="btn"><i className="icon-right-open"/></button>
        <div className="search-container">
            <form onSubmit={handleOnSubmit}>
            <button type="submit" className="search-btn"><i className="icon-search"></i></button>
            <input type="text" placeholder="Search..." name="search" onChange={handleOnChange}/>
            </form>
        </div>
    </SearchBarContainer>
)
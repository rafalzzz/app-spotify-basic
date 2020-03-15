import React from "react";

import { Switch, Route } from "react-router-dom";

import { ListContainer } from "./layout.styled";

import { ListHeader } from "./components/listHeader/index";
import { About } from "./components/about";
import { SearchBar } from "./components/searchbar";
import { SearchList } from "./components/searchlist/index";
import { FavsList } from "./components/favslist/index";
import { Playlist } from "./components/playlist/index";

export const ListLayout = ({ handleOnChange, handleOnSubmit }) => (
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
        <ListHeader />
        <SearchList />
      </Route>
      <Route path="/user/favourite-list">
        <ListHeader />
        <FavsList />
      </Route>
      <Route path="/user/playlist">
        <ListHeader />
        <Playlist />
      </Route>
    </Switch>
  </ListContainer>
);

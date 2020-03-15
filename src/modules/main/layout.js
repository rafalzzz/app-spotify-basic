import React from "react";

import { Switch, Route } from "react-router-dom";

import { MainContainer } from "./layout.styled";

import { MainHeader } from "./components/mainHeader/index";
import { About } from "./components/about";
import { SearchBar } from "./components/searchbar";
import { SearchList } from "./components/searchlist/index";
import { FavsList } from "./components/favslist/index";
import { Playlist } from "./components/playlist/index";

export const MainLayout = ({ handleOnChange, handleOnSubmit }) => (
  <MainContainer>
    <SearchBar
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
    />
    <Switch>
      <Route path="/user/about">
        <About />
      </Route>
      <Route path="/user/main">
        <MainHeader />
        <SearchList />
      </Route>
      <Route path="/user/favourite-list">
        <MainHeader />
        <FavsList />
      </Route>
      <Route path="/user/playlist">
        <MainHeader />
        <Playlist />
      </Route>
    </Switch>
  </MainContainer>
);

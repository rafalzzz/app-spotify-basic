import React, { useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";

import { playlists } from "../../store/playlists/selectors";
import { currentPlaylist } from "../../store/currentItems/selectors";

import { setCurrentPlaylist } from "../../store/currentItems/actions";

import { SidebarLayout } from "./layout";

export const Sidebar = () => {
  const playlistsList = useSelector(playlists);
  const currentPlaylistName = useSelector(currentPlaylist);

  const dispatch = useDispatch();

  const handleSetCurrentPlaylist = useCallback(
    name => event => {
      dispatch(setCurrentPlaylist({ name }));
      console.log(currentPlaylistName);
    },
    []
  );

  return (
    <div>
      <SidebarLayout
        playlists={playlistsList}
        handleSetCurrentPlaylist={handleSetCurrentPlaylist}
        currentPlaylistName={currentPlaylistName}
      />
    </div>
  );
};

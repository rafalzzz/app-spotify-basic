import React, { useEffect } from "react";

import { TableContainer } from "../table.styled";
import { TableHeader } from "../tableHeader";
import { ListItem } from "../listItem";

export const FavsListLayout = ({
  favList,
  currentSongName,
  NowIsPlaying,
  playOrNot,
  handleAddSongToFav,
  handleDeleteSongFromFav,
  handleSetCurrentSong,
  changeCategory
}) => {
  useEffect(() => {
    changeCategory();
  }, []);

  return (
    <TableContainer>
      <div className="table">
        <TableHeader />
        {favList &&
          favList.map((favListItem, i = 0) => (
            <div key={i++}>
              <ListItem
                id={i++}
                song={favListItem.song}
                favList={favList}
                currentSongName={currentSongName}
                NowIsPlaying={NowIsPlaying}
                playOrNot={playOrNot}
                handleAddSongToFav={handleAddSongToFav}
                handleDeleteSongFromFav={handleDeleteSongFromFav}
                handleSetCurrentSong={handleSetCurrentSong}
              />
            </div>
          ))}
        <div style={{ height: "17px" }}></div>
      </div>
    </TableContainer>
  );
};

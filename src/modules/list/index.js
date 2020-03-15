import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { fetchSongsStarted } from "../../store/fetchSongs/actions";

import { ListLayout } from "./layout";

export const List = () => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  const handleOnChange = e => {
    setTerm(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    dispatch(fetchSongsStarted({ term: term }));
  };

  return (
    <ListLayout
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
    />
  );
};

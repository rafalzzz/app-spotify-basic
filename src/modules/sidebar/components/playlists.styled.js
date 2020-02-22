import styled from 'styled-components';

export const PlaylistsContainer = styled.div`
height: 520px;
font-size: 1.1em;
color: #8e8e8e;
text-align: left;
overflow-y: scroll;
overflow-x: hidden;

::-webkit-scrollbar {
  width: 22px;
}

::-webkit-scrollbar-thumb {
  width: 20px;
  background-color: #535353;
  border-radius: 10px;
}

::-webkit-scrollbar-track-piece {
  width: 20px;
  background-color: #transparent;
}

.playlistsTitle {
  margin-left: 35px;
  padding-top: 52px;
  font-weight: 700;
  letter-spacing: 2px;
}

.playlistElement {
  padding-left: 35px;
  font-weight: 700;
  font-size: 1.17em;
  padding-top: 10px;
  padding-bottom: 11px;
  width: 100%;
  text-align: left;
  color: #8e8e8e;
  background-color: transparent;
  border: none;
}

.playlistElement:hover {
  border: none;
  outline: none;
  box-shadow: none;
}

.playlistElement:active {
  border: none;
  outline: none;
  box-shadow: none;
}

.playlistElement:link {
  border: none;
  outline: none;
  box-shadow: none;
}

.playlistElement:focus {
  border: none;
  outline: none;
  box-shadow: none;
}
  `
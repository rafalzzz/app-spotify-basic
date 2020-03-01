import styled from 'styled-components';

export const PlaylistsContainer = styled.div`
height: 200px;
font-size: 1.1em;
color: #8e8e8e;
text-align: left;
overflow-y: scroll;
overflow-x: hidden;
margin-top: -75px;

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
  margin-left: 16px;
  padding-top: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 0.5em;
}

.playlistElement {
  margin-left: 16px;
  font-weight: 700;
  font-size: 0.6em;
  padding-top: 7px;
  padding-bottom: 5px;
  width: 100%;
  text-align: left;
  color: #8e8e8e;
  background-color: transparent;
  border: none;
}
  `
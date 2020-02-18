import styled from 'styled-components';

export const PlaylistsContainer = styled.div`
height: 520px;
font-size: 1.1em;
color: #8e8e8e;
text-align: left;
overflow: auto;

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
}
  `
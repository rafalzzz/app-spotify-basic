import styled from 'styled-components';

export const FavListContainer = styled.div`
background-color: transparent;
width: 80%;
height: 100px;
display: block;
position: absolute;
left: 285px;

.table {
    z-index: 1;
    background-color: #181818;
    height: calc(100vh - 300px);
    width: calc(100vw - 300px);
    overflow-x: hidden;
    overflow-y: scroll;
    border-top: solid 1px #252525;
}

.table::-webkit-scrollbar {
    width: 22px;
  }
  
.table::-webkit-scrollbar-thumb {
    width: 20px;
    background-color: #535353;
    border-radius: 10px;
  }
  
.table::-webkit-scrollbar-track-piece {
    width: 20px;
    background-color: #transparent;
  }

.table::-webkit-scrollbar-button {
    background-color: transparent;
}

.table::-webkit-scrollbar-corner{
    background-color: transparent;
}
`
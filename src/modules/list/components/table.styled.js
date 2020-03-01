import styled from 'styled-components';

export const TableContainer = styled.div`
background-color: #181818;
height: calc(100vh - 320px);
/* width: calc(100% - 193px); */
width: 1197px;
display: block;
position: absolute;

.table {
    z-index: 1;
    /* background-color: #181818; */
    height: calc(100vh - 300px);
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    border-top: solid 1px #252525;
}

.table::-webkit-scrollbar {
    width: 6px;
  }
  
.table::-webkit-scrollbar-thumb {
    width: 20px;
    background-color: #535353;
    border-radius: 10px;
  }
  
.table::-webkit-scrollbar-track-piece {
    width: 8px;
    background-color: #transparent;
  }

.table::-webkit-scrollbar-button {
    background-color: transparent;
}

.table::-webkit-scrollbar-corner{
    background-color: transparent;
}
`
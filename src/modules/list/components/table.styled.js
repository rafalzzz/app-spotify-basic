import styled from 'styled-components';

export const TableContainer = styled.div`
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

.tableHeader {
    height: 47px;
    width: 100vw;
    background-color: transparent;
    margin-left: 15px;
}

.col1 {
    background-color: transparent;
    height: 39px;
    width: 154px;
    float: left;
    padding-top: 8px;
    font-size: 1.3em;
    text-align: right;
    padding-right: 27px;

}

.col2 {
    background-color: transparent;
    width: calc(100% - 1028px);
    height: 39px;
    font-size: 1.1em;
    padding-left: 6px;
    padding-top: 9px;
    letter-spacing: 3px;
    margin-top: 0px;
    float: left;
    text-align: left;
}

.col3 {
    background-color: transparent;
    width: 255px;
    height: 39px;
    padding-top: 9px;
    font-size 1.1em;
    letter-spacing: 3px;
    padding-left: 5px;
    float: left;
    text-align: left;
}

.col4 {
    background-color: transparent;
    width: 280px;
    height: 40px;
    font-size: 1.3em;
    padding-top: 8px;
    float: left;
    text-align: left;
}
`
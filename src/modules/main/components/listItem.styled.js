import styled from 'styled-components';

export const ListItemContainer = styled.div`
    height: 35px;
    width: 100%;
    background-color: transparent;
    margin-left: 15px;
    display: flex;
    flex-direction: row;

.row {
    text-align: left;
    /* background-color: rgba(255,255,255,0.1); */
    margin-left: 5px;
    margin-right: 0px;
    padding-left: 0px;
    width: 1125px;
    height: 35px;
    margin-left: 15px;
    margin-right: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* border-bottom: solid 1px #252525; */
}

.row:hover {
    background-color: rgba(255,255,255,0.03);
}

.row:hover > .playStopIconBorder > .playStopIcon {
    visibility: visible;
}

.playStopIconBorder {
    border-bottom: solid 1px #252525;
    height: 35px;
    width: 30px;
    padding-left: 2px;
    display: flex;
    align-items: center;
    visibility: visible;
}

.playStopIcon {
    font-size: 0.6em;
    height: 20px;
    width: 20px;
    font-weight: 700;
    text-align: right;
    margin-left: 3px;
    text-align: center;
    border: 1px solid white;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.favo {
    font-size: 0.8em;
    height: 35px;
    width: 28px;
    font-weight: 700;
    text-align: right;
    padding-left: 5px;
    align-items: center;
    display: flex;
    border-bottom: solid 1px #252525;
}

.titl {
    font-size: 0.75em;
    height: 35px;
    padding-left: 9px;
    width: 361px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    align-items: center;
    display:flex;
    border-bottom: solid 1px #252525;
}

.auth {
    font-size: 0.75em;
    height: 35px;
    width: 243px;
    padding-left: 4px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    align-items: center;
    display:flex;
    border-bottom: solid 1px #252525;
}

.auth:hover {
    cursor: pointer;
}

.album {
    font-size: 0.75em;
    height: 35px;
    margin-left: 0px;
    width: 271px;
    padding-left: 1px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    align-items: center;
    display:flex;
    border-bottom: solid 1px #252525;
}

.date {
    font-size: 0.75em;
    height: 35px;
    padding-left: 7px;
    width: 121px;
    font-weight: 400;
    align-items: center;
    display: flex;
    border-bottom: solid 1px #252525;
}

.time {
    font-size: 0.75em;
    height: 35px;
    margin-left: 0px;
    padding-left: 6px;
    width: 38px;
    font-weight: 400;
    align-items: center;
    display: flex;
    border-bottom: solid 1px #252525;
}
`
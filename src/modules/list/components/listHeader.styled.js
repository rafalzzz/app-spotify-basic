import styled from 'styled-components';

export const ListHeaderContainer = styled.div`
background-color: #121212;
width: 100%;
height: 200px;

.album {
    width: 176px;
    height: 176px;
    /* background-color: white; */
    float: left;
    margin-left: 29px;
    margin-top: 7px;
}

img {
    width: 176px;
    height: 176px;
}

p {
    font-size: 2.5em;
    position: absolute;
    float: left;
    margin-top: 44px;
    margin-left: 226px;
    font-weight: 700;
    margin-bottom: 0px;
}

.title {
    font-size: 1em;
    position: absolute;
    float: left;
    margin-top: 95px;
    margin-left: 228px;
    font-weight: 400;
    margin-bottom: 0px;
}

.artist {
    font-size: 0.8em;
    position: absolute;
    float: left;
    margin-top: 118px;
    margin-left: 228px;
    font-weight: 300;
    margin-bottom: 0px;
}

.pause {
    position: absolute;
    left: 225px;
    top: 182px;
    margin-right: 16px;
    margin-top: 26px;
    height: 25px;
    width: 108px;
    background-color: #1db954;
    border: 1px solid white;
    color: #e1f6e9;
    font-size: 0.6em;
    text-align: center;
    border-radius: 25px;
    letter-spacing: 2px;
    border: none;
}



.favs {
    position: absolute;
    left: 343px;
    top: 182px;
    margin-right: 16px;
    margin-top: 26px;
    height: 25px;
    width: 25px;
    background-color: transparent;
    color: white;
    font-size: 0.5em;
    text-align: center;
    border-radius: 25px;
    border: solid 1px #7f7f7f;
}

.more {
    position: absolute;
    left: 378px;
    top: 182px;
    margin-right: 45px;
    margin-top: 26px;
    height: 25px;
    width: 25px;
    background-color: transparent;
    color: white;
    font-size: 0.5em;
    text-align: center;
    border-radius: 25px;
}

.rb:active {
    border: solid 1px white;
    outline: none;
}

.rb:hover {
    border: solid 1px white;
    outline: none;
}

.rb:focus {
    border: solid 1px white;
    outline: none;
}

.pause:active {
    border: none;
    outline: none;
}

.pause:hover {
    border: none;
    outline: none;
}

.pause:focus {
    border: none;
    outline: none;
}

.moreOptions {
    position: absolute;
    left: 405px;
    top: 207px;
    font-size: 0.8em;
    text-align: center;
    background-color: #121212;
    z-index: 5;

}

.moreOptions > div {
    margin: 1px solid #868686;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: solid 1px #868686;
}

.moreOptions > div:hover {
    border: solid 1px white;
}

`
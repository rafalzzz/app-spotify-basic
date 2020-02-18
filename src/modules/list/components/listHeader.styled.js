import styled from 'styled-components';

export const ListHeaderContainer = styled.div`
background-color: #121212;
width: 100%;
height: 100px;

.album {
    width: 55px;
    height: 55px;
    background-color: white;
    float: left;
    margin-left: 48px;
    margin-top: 26px;
}

p {
    font-size: 2.5em;
    float: left;
    margin-top: 24px;
    margin-left: 24px;
    font-weight: 700;
    margin-bottom: 0px;
}

.pause {
    float: right;
    background-color: green;
    margin-right: 16px;
    margin-top: 26px;
    height: 50px;
    width: 160px;
    background-color: #1db954;
    color: #e1f6e9;
    font-size: 1em;
    text-align: center;
    border-radius: 25px;
    letter-spacing: 2px;
    border: none;
}



.favs {
    float: right;
    margin-right: 16px;
    margin-top: 26px;
    height: 50px;
    width: 50px;
    background-color: transparent;
    color: white;
    font-size: 1em;
    text-align: center;
    border-radius: 25px;
    border: solid 1px #7f7f7f;
}

.more {
    float: right;
    margin-right: 45px;
    margin-top: 26px;
    height: 50px;
    width: 50px;
    background-color: transparent;
    color: white;
    font-size: 1.5em;
    text-align: center;
    border-radius: 25px;
    border: solid 1px #7f7f7f;
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

`
import styled from 'styled-components';

export const SearchBarContainer = styled.div`
display: block;
height: 70px;
text-align: left;
background-color: #121212;

.btn {
    height: 40px;
    background-color: transparent;
    border: none;
    color: #868686;
    font-size: 1.7em;
    margin-top: 16px;
    padding-left: 13px;
    float: left;
}

.btn:active {
    border: none;
    outline: none;
}

.btn:hover {
    border: none;
    outline: none;
    color: white;
}

.btn:focus {
    border: none;
    outline: none;
}

.search-container {
    height: 35px;
    width: 270px;
    float: left;
    margin-top: 16px;
    border-radius: 0px 17px 17px 0px;
    font-size: 1.4em;
}

.search-btn {
    background-color: white;
    color: #868686;
    border: none;
    border-radius: 17px 0px 0px 17px;
    height: 35px;
    width: 35px;
    float: left;
    font-size: 0.9em;
    padding-top: 1px;
    padding-left: 10px;
    margin-top: 1px;
}

.search-btn:active {
    border: none;
    outline: none;
}

.search-btn:hover {
    border: none;
    outline: none;
    color: black;
}

.search-btn:focus {
    border: none;
    outline: none;
}

input {
    background-color: white;
    border-radius: 0px 17px 17px 0px;
    color: #868686;
    border: none;
    height: 33px;
    width: 225px;
    font-size: 10px;
    padding-left: 10px;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 1px;
}

input:active {
    border: none;
    outline: none;
}

input:hover {
    border: none;
    outline: none;
}

input:focus {
    border: none;
    outline: none;
}
`
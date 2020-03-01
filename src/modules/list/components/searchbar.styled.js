import styled from 'styled-components';

export const SearchBarContainer = styled.div`
height: 50px;
text-align: left;
background-color: #121212;

.btn {
    height: 40px;
    background-color: transparent;
    border: none;
    color: #868686;
    font-size: 1em;
    margin-top: -2px;
    padding-left: 0px;
    float: left;
}

.btnL {
    margin-left: 10px;
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
    margin-top: 7px;
    margin-left: 3px;
    border-radius: 0px 17px 17px 0px;
    font-size: 0.8em;
}

.search-btn {
    background-color: white;
    color: #868686;
    border: none;
    border-radius: 17px 0px 0px 17px;
    height: 20px;
    width: 18px;
    float: left;
    font-size: 0.95em;
    padding-top: 0px;
    padding-left: 2px;
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
    height: 18px;
    width: 120px;
    font-size: 10px;
    padding-left: 3px;
    margin-top: 1px;
    font-size: 0.7em;
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
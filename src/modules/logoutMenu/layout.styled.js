import styled from 'styled-components';

export const LogoutContainer = styled.div`
position: absolute;
left: 0px;
top: 0px;
width: 280px;
height: 50px;
color: white;
font-size: 2.6em;
letter-spacing: 2px;
padding-left: 39px;
text-align: left;
z-index: 3;

.dots {
  width: 270px;
  height: 50px;
  color: #868686;
}

.dots:hover {
  color: white;
}

.logoutMenu {
  position: absolute;
  top: 50px;
  left: 0px;
  width: 300px;
  font-size: 30px;
  border: solid 1px #868686;
  background-color: #121212;
  text-align: center;
  color: white;
  padding-top: 30px;
}

button {
  width: 200px;
  height: 50px;
  margin-bottom: 30px;
  background-color: transparent;
  border: solid 1px white;
  border-radius: 5px;
  color: white;
  font-size: 0.8em;
  margin-top: 30px;
}

  `
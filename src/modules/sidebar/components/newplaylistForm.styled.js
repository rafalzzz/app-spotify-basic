import styled from 'styled-components';

export const NewPlaylistFormContainer = styled.div`
height: 100vh;
width: 100vw;
background-color: rgba(0,0,0,0.5);
position: fixed;
left: -50px;
top: 0;

.formContainer {
  background-color: #121212;
  width: 600px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%);
  margin-top: 0px;
  border: solid 1px #868686;
  border-radius: 20px;
}

.formContainerTitle {
  position: relative;
  left: 62px;
  top: -40px;
  display: block;
  width: 400px;
  background-color: transparent;
  text-align: center;
}

input {
  width: 380px;
  height: 30px;
  left: 0px;
  top: -30px;
  position: relative;
  border-radius: 5px;
  border: none;
  color: #121212;
  font-size: 0.6em;
  padding-left: 20px;
}

.formContainerButtons {
  margin-top: -50px;
  margin-left: -10px;
  margin-bottom: 30px;
}

button {
  width: 100px;
  height: 40px;
  background-color: #868686;
  color: white;
  border: solid 1px white;
  margin-left: 10px;
  position: relative;
  top: -20px;
  font-size: 0.35em;
}
  `
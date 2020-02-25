import styled from 'styled-components';

export const SongInfoContainer = styled.div`
display: block;
float: left;
width: 255px;
height: 80px;
margin-left: 40px;
margin-top: 20px;

.songAlbum {
  display: block;
  float: left;
  height: 78px;
  width: 78px;
  border: solid 1px white;
}

.songTitle {
  display: block;
  height: 32px;
  margin-left: 80px;
  text-align: left;
  padding-top: 5px;
  padding-left: 10px;
  font-size: 1em;
  color: white;
}

.songArtist {
  display: block;
  height: 29px;
  margin-left: 80px;
  text-align: left;
  padding-top: 10px;
  padding-left: 10px;
  font-size: 0.8em;
}
  `
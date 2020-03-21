import styled from 'styled-components';

export const SongInfoContainer = styled.div`
display: block;
float: left;
width: 200px;
height: 45px;
margin-left: 10px;
margin-top: 0px;

.songAlbum {
  display: block;
  float: left;
  height: 45px;
  width: 45px;
}

img {
  width: 45px;
  height: 45px;
}

.songTitle {
  display: block;
  height: 20px;
  margin-left: 45px;
  width: 250px;
  text-align: left;
  margin-top: -5px;
  padding-left: 10px;
  font-size: 0.8em;
  color: white;
  padding-bottom: 3px;
  white-space: nowrap;
}

.songArtist {
  display: block;
  height: 22.5px;
  width: 200px;
  margin-left: 45px;
  text-align: left;
  padding-top: 0px;
  padding-left: 10px;
  font-size: 0.7em;
  padding-bottom: 3px;
  margin-top: -12px;
  white-space: nowrap;
}
  `
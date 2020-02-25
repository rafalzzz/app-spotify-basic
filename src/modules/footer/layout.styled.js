import styled from 'styled-components';

export const LayoutContainer = styled.div`
position: fixed;
bottom: 0px;
left: 0px;
height: 130px;
width: 100%;
background-color: #282828;
color: #b3b3b3;
z-index: 10;

//musicPlayer styles

.musicPlayer {
  display: block;
  float: left;
  width: calc(100% - 360px);
  height: 80px;
  margin-left: 40px;
  margin-top: 20px;
}

.icons {
  display: block;
  float: left;
  height: 40px;
  width: 500px;
  margin-left: 50%;
  transform: translate(-60%);
}

.icon {
  display: block;
  float: left;
  height: 23px;
  width: 30px;
  margin-left: 20px;
  font-size: 0.75em;
  padding-top: 8px;
  padding-left: 1px;
}

.iconLeft {
  display: block;
  float: left;
  height: 23px;
  width: 30px;
  margin-left: 0px;
  font-size: 0.75em;
  padding-top: 8px;
  padding-left: 1px;
  margin-left: 26%;
}

.iconRight {
  font-size: 0.9em;
  padding-top: 6px;
}

.mainIcon {
  padding-top: 0px;
  font-size: 1.4em;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  padding-left: 0px;
  border: solid 1px white;
  text-align: center;
}

  `

/* #b3b3b3 - kolor ikon (losowego odtwarzania i zapętlania i paska głośności po hoverze)
#404040 - kolor paska przed zakończeniem
#1ed760 - kolor aktywnych ikon */
import styled from 'styled-components';

export const LayoutContainer = styled.div`
position: fixed;
bottom: 0px;
left: 0px;
height: 70px;
width: 100%;
background-color: #282828;
color: #b3b3b3;
z-index: 10;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

//musicPlayer styles

.musicPlayer {
  align-self: center;
  width: 50%;
  height: 80px;
  margin-left: 0px;
  margin-top: 20px;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: space-between;
  margin-right: 42px;
  flex-direction: column;
}

.icons {
  display: flex;
  float: left;
  height: 35px;
  width: 200px;
  margin-left: 0px;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: -15px;

}

.icon {
  height: 23px;
  width: 30px;
  font-size: 0.6em;
  padding-top: 8px;
  padding-left: 1px;
}

.iconLeft {
  height: 23px;
  width: 30px;
  font-size: 0.7em;
  padding-top: 6px;
  padding-left: 1px;
}

.iconRight {
  font-size: 0.8em;
  margin-top: -6px;
}

.mainIcon {
  padding-top: 0px;
  font-size: 0.7em;
  height: 25px;
  width: 25px;
  border-radius: 15px;
  padding-left: 0px;
  border: solid 1px white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

  `

/* #b3b3b3 - kolor ikon (losowego odtwarzania i zapętlania i paska głośności po hoverze)
#404040 - kolor paska przed zakończeniem
#1ed760 - kolor aktywnych ikon */
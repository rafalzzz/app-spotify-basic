import styled from "styled-components";

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
`;

/* #b3b3b3 - kolor ikon (losowego odtwarzania i zapętlania i paska głośności po hoverze)
#404040 - kolor paska przed zakończeniem
#1ed760 - kolor aktywnych ikon */

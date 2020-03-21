import styled from "styled-components";

export const PlayerButtonsContainer = styled.div`
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

  .icon {
    height: 23px;
    width: 30px;
    font-size: 0.6em;
    padding-top: 8px;
    padding-left: 1px;
  }

  .icon:hover {
    color: white;
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
`;

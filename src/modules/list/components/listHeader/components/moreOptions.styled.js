import styled from "styled-components";

export const MoreOptionsContainer = styled.div`
  .moreOptions {
    position: absolute;
    left: 405px;
    top: 207px;
    font-size: 0.8em;
    text-align: center;
    background-color: #121212;
    z-index: 5;
  }

  .moreOptions > div {
    margin: 1px solid #868686;
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: solid 1px #868686;
  }

  .moreOptions > div:hover {
    border: solid 1px white;
  }
`;

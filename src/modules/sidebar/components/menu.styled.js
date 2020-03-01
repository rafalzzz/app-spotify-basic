import styled from 'styled-components';

export const MenuContainer = styled.div`
height: 205px;
display: block;
font-size: 0.7em;
font-weight: 700;
color: #ffffff;
padding-top: 48px;
color: #868686;

div {
  text-align: left;
  padding-left: 15px;
  height: 32px;
  color: #868686;
  text-decoration: none;
}

div:hover {
  color: white;
  cursor: pointer;
}

.icon-home {
  font-size: 1.4em;
  margin-right: 12px;
  padding-left: 1px;
  color: #868686;
  text-decoration: none;
}

div:hover > .icon-home  {
  color: white;
}

.icon-folder-empty {
  font-size: 1.4em;
  margin-right: 12px;
  color: #868686;
}

div:hover > .icon-folder-empty  {
  color: white;
}

.icon-note {
  font-size: 1.4em;
  margin-right: 12px;
  color: #868686;
}

div:hover > .icon-note  {
  color: white;
}
  `
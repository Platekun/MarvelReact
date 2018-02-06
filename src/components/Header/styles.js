
import styled from 'styled-components';

import HamburguerMenuIcon from '../../assets/hamburguer-menu.png';
import UserOptionsIcon from '../../assets/user-profile.png';
import { rem } from '../../utils';

export const AppBar = styled.header`
  align-items: center;
  background: black;
  box-shadow: 0 0 4px 0 rgba(0,0,0,0.12), 0 4px 4px 0 rgba(0,0,0,0.24);
  display: flex;
  height: 45px;
  justify-content: space-between;
  overflow: hidden;
  padding-right: ${rem(1)};
  position: fixed;
  top: 0;
  white-space: nowrap;
  width: 100%;
  z-index: 10000;

  @media(min-width: ${rem(900)}) {
    height: 88px;
    position: static;
  }
`;

export const ImageLogo = styled.img`
  cursor: pointer;

  @media(min-width: ${rem(900)}) {
    height: 96px;
    margin-left: ${rem(24)};
    position: absolute;
    top: ${rem(24)};
    width: 192px;
    z-index: 2;
  }
`;

export const MobileSettings = styled.div`
  margin: 0 ${rem(16)};
  @media(min-width: ${rem(900)}) {
    position: absolute;
    right: ${rem(16)};
    top: ${rem(32)};
  }
`;


export const HamburguerMenu = styled.button`
  background-color: black;
  background-image: url(${HamburguerMenuIcon});
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  height: 25px;
  width: 25px;
  margin-right: ${rem(16)};

  @media(min-width: ${rem(1040)}) {
    display: none;
  }
`;

export const UserOptions = styled.button`
  background-color: black;
  background-image: url(${UserOptionsIcon});
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  height: 25px;
  margin-left: ${rem(1.5)};
  width: 25px;

  @media(min-width: ${rem(1440)}) {
    display: none;
  }
`;

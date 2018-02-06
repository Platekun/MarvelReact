import styled from 'styled-components';

import SearchIcon from '../../../assets/Search White.png';
import { rem } from '../../../utils';

export const Nav = styled.nav`
  background-color: #2d2d2d;
  margin-left: 0;
  padding: ${rem(15)} ${rem(10)};
  position: fixed;
  right: ${props => (props.isOpen ? '0' : '100%')};
  top: ${rem(45)};
  width: 320px;
  z-index: 10000;

  a {
    text-decoration: none;
    color: black;
  }

  @media(min-width: ${rem(900)}) {
    top: 88px;
    position: absolute;
  }

  @media(min-width: ${rem(1040)}) {
    align-items: center;
    background-color: transparent;
    display: flex;
    margin-left: 25%;
    padding: 0;
    position: static;
    top: ${rem(45)};
    width: auto;

    a {
      color: white;
    }
  }

  @media(min-width: ${rem(1440)}) {
    margin-left: ${rem(370)};
    margin-right: ${rem(106)};
  }

`;

export const NavItemList = styled.ul`
  ul {
    padding-left: 0;
  }

  @media(min-width: ${rem(1040)}) {
    display: flex;
    align-items: center;
  }
`;

export const NavItem = styled.li`
  background-color: white;
  border-top: 1px solid black;
  cursor: pointer;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  list-style-type: none;
  padding: ${rem(15)} ${rem(10)};
  text-transform: uppercase;

  @media(min-width: ${rem(1040)}) {
    background-color: transparent;
    font-size: ${rem(14)};
    font-weight: normal;
    margin: 0 ${rem(12.5)};
    padding: 0;

    &:first-child {
      margin-left: 0;
    }
  }

  @media(min-width: ${rem(1573)}) {
    margin: 0 ${rem(23)};

    &:last-of-type {
      margin-right: ${rem(38)};
    }
  }
`;

export const NavSearchButton = styled.button`
  display: none;

  @media(min-width: ${rem(1040)}) {
    background-color: transparent;
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    display: block;
    height: 18px;
    width: 18px;
  }

  @media(min-width: ${rem(1200)}) {
    width: 27px;
  }
`;

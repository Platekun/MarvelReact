import styled from 'styled-components';

import { rem } from '../../utils';

export const FooterSection = styled.footer`
  font-family: Helvetica, Arial, sans-serif;

  a {
    color: white;
    text-decoration: none;
  }

  > div {
    background-color: black;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12), 0 4px 4px 0 rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (min-width: ${rem(1120)}) {
    > div {
      padding-top: ${rem(60)};
      padding-bottom: ${rem(67)};
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export const FooterNavigation = styled.nav`
  @media (min-width: ${rem(1120)}) {
    display: flex;
  }
`;

export const FooterColumn = styled.ul`
  text-align: center;

  @media (min-width: ${rem(1120)}) {
    display: flex;
    flex-direction: column;
    margin: 0 ${rem(25)};
    width: 135px;
    text-align: left;

    &:first-child {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const FooterColumnTitle = styled.h2`
  color: #ffffff;
  text-transform: uppercase;
  padding-left: ${rem(20)};
  font-size: ${rem(16)};
  padding: ${rem(15)};
  font-weight: normal;
  cursor: pointer;

  @media (min-width: ${rem(1120)}) {
    cursor: normal;
    padding: 0;
    font-size: ${rem(20)};
    margin-bottom: ${rem(19)};
    text-transform: uppercase;
  }
`;

export const FooterColumnItem = styled.li`
  list-style-type: none;

  background-color: #4e4e4e;
  border-bottom: 1px solid #3d3d3d;
  padding: ${rem(15)};

  text-transform: uppercase;

  @media (min-width: ${rem(1120)}) {
    background-color: transparent;
    padding: 0;
    border-bottom: none;
    font-size: ${rem(14)};
    line-height: ${rem(20)};
    opacity: 0.45;
    margin: ${rem(5)} 0;
    text-transform: unset;

    &:first-child {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const MediaSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: ${rem(25)} 0;

  @media (min-width: ${rem(1120)}) {
    padding: 0;
    margin-left: ${rem(30)};
    flex-direction: column;
  }

  @media (min-width: ${rem(1440)} ) {
    margin-left: ${rem(190)};
  }
`;

export const MediaColumn = styled.ul`
  display: flex;
  flex-direction: row;

  @media (min-width: ${rem(1120)}) {
    margin-top: ${rem(38)};
  }
`;

export const MediaColumnItem = styled.li`
  list-style-type: none;

  @media (min-width: ${rem(1120)}) {
    display: flex;
    align-items: center;
    margin: 0 8px;

    &:first-child {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const FooterLogo = styled.img`
  height: 29px;
  width: 76.13px;
  margin-right: ${rem(10)};
  background-color: #f0141e;

  @media (min-width: ${rem(600)}) {
    height: 96px;
    width: 192px;
  }

  @media (min-width: ${rem(1120)}) {
    margin-right: 0;
  }
`;

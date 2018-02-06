import styled from 'styled-components';

import { rem } from '../../utils';

export const HeroTypeSection = styled.section`
  @media(min-width: ${rem(960)}) {
    background: white;
    box-shadow: 0 0 10px 0.5px rgba(0,0,0,0.4);
    display: flex;
    padding: ${rem(8.5)} 0 ${rem(8.5)} ${rem(257)};
  }
`;

export const HeroTypesTitle = styled.h2`
  border-bottom: 1px solid black;
  color: #F41A12;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: normal;
  margin-top: ${rem(60)};
  padding-bottom: ${rem(17)};
  text-align: center;
  text-transform: uppercase;

  @media(min-width: ${rem(960)}) {
    border: none;
    font-size: ${rem(14)};
    margin-top: 0;
    padding-top: ${rem(17)};
  }
`;

export const HeroTypes = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${rem(16)};

  @media(min-width: ${rem(960)}) {
    border-left: 2px solid black;
    margin-left: ${rem(29)};
    padding: 0 ${rem(10)};
    padding: 0;
  }
`;

export const HeroTypeItem = styled.li`
  align-items: center;
  color: black;
  cursor: pointer;
  display: flex;
  font-family: Helvetica, Arial, sans-serif;
  list-style-type: none;
  padding: ${rem(16)};
  text-transform: uppercase;
  transition: color ease 0.3s;

  &:hover {
    color: #F41A12;
  }

  @media(min-width: ${rem(800)}) {
    font-size: ${rem(14)};

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

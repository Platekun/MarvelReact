import styled from 'styled-components';

import SearchReadIcon from '../../../assets/Search Red.png';
import RemoveIcon from '../../../assets/Remove.png';
import { rem } from '../../../utils';


export const HeroSearchSection = styled.div`
  margin-top: ${rem(31)} !important;
  margin: 0 auto;
  max-width: 944px;
  width: 90%;
`;

export const HeroForm = styled.form`
  background: white;
  border: 1px solid #C7C7C7;
  box-shadow: 0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24);
  display: block;
  margin: 0 auto;
  max-width: 944px;
`;

export const HeroInput = styled.input`
  background-image: url(${SearchReadIcon});
  background-position: 12px 50%;
  background-repeat: no-repeat;
  background-size: 24px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: ${rem(18)};
  height: 56px;
  padding-left: ${rem(52)};
  padding-right: ${rem(15)};
  width: 100%;

  ::placeholder {
    opacity: 0.25;
    text-transform: uppercase;
  }

  @media(min-width: ${rem(400)}) {
    font-size: ${rem(20)};
  }

  @media(min-width: ${rem(900)}) {
    font-size: ${rem(24)};
  }
`;

export const HeroSuggestionList = styled.ul`
  &:before {
    background-color: white;
    content: ".";
    font-size: 0;
    height: 75px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 956px;
  }
  background: white;
  border: 1px solid #C7C7C7;
  border: 1px solid black;
  box-shadow: 0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24);
  display: flex;
  flex-wrap: wrap;
  max-height: 200px;
  max-width: 944px;
  overflow-y: scroll;
  padding-bottom: ${rem(18)};
  padding-left: ${rem(16.5)};
  position: absolute;
  width: 100%;

  @media(min-width: ${rem(944)}) {
    max-height: 400px;
    padding-bottom: ${rem(36)};
  }
`;

export const HeroSuggestion = styled.li`
  align-items: center;
  cursor: pointer;
  font-family: Helvetica, Arial, sans-serif;
  font-size: ${rem(14)};
  height: 28px;
  list-style-type: none;
  margin: ${rem(25)} 0;

  flex: 1;
  @media(min-width: ${rem(400)}) {
    flex: 0 0 50%;
    font-size: ${rem(18)};
  }

  @media(min-width: ${rem(900)}) {
    flex: 0 0 33.3333%;
    font-size: ${rem(20)};
  }
`;


export const RemoveTextButton = styled.button`
  background-image: url("${RemoveIcon}");
  border: none;
  content: "\00a0 ";
  cursor: pointer;
  height: 24px;
  position: absolute;
  right: ${rem(16)};
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
`;

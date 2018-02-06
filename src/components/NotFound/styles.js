import styled from 'styled-components';

import NotFoundBackground from '../../assets/Not Found BG.jpg';
import BlackWidow from '../../assets/Black Widow.png';
import BlackWidowEye from '../../assets/Black Widow Eye.png';
import { rem } from '../../utils';

export const NotFoundSection = styled.section`
  background-image: url("${BlackWidowEye}"), url("${BlackWidow}"), url("${NotFoundBackground}");
  background-position: 38% 530px, 25% 274px, left;
  background-repeat: no-repeat;
  background-size: 105px 106px, 300px 450px, cover;
  height: 728px;
  height: 83vh;
  padding-left: ${rem(22)};
  padding-right: ${rem(22)};
  padding-top: ${rem(68)};

  @media(min-width: ${rem(600)}) {
    background-position: 55% 530px, 55% 274px, left;
  }

  @media(min-width: ${rem(900)}) {
    background-position: 74.5% 250px, 80% 0, left;
    background-size: 110px 111px, 300px 450px, cover;
    height: 63vh;
    padding-top: 0;
  }

  @media(min-width: ${rem(1500)}) {
    background-position: 1037px 250px, 959px 0, left;
  }
`;

export const NotFoundInfo = styled.div`
  &:after {
    border-bottom: 2px solid black;
    content: ".";
    display: block;
    font-size: 0;
    position: absolute;
    top: 274px;
    width: 90%;
  }

  @media(min-width: ${rem(900)}) {
    left: 15%;
    position: relative;
    top: 15%;

    &:after {
      border-bottom: none;
    }

    width: 351px;
  }
`;

export const NotFoundTitle = styled.h2`
  font-family: Helvetica, Arial, sans-serif;
  font-size: ${rem(25)};
  text-transform: uppercase;
`;

export const NotFoundReason = styled.p`
  font-family: Helvetica, Arial, sans-serif;
  font-size: ${rem(20)};
  font-weight: bold;
  margin: ${rem(20)} 0;

  @media(min-width: ${rem(600)}) {
    font-size: ${rem(24)};
  }
`;

export const NotFoundSuggestion = styled.p`
  font-family: Helvetica, Arial, sans-serif;
  font-size: ${rem(18)};
  margin: ${rem(20)} 0;

  @media(min-width: ${rem(600)}) {
    font-size: ${rem(20)};
  }
`;

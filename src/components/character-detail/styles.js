import styled from 'styled-components';

import { rem } from '../../utils';
import MarvelBanner from '../../assets/Marvel.jpg';

export const HeroSummarySection = styled.section`
  margin-bottom: ${rem(21.5)};

  > div:nth-child(3) { // Wrapper
    text-align: center;
  }

  @media(min-width: ${rem(900)}) {
    > div:nth-child(3) { // Wrapper
      bottom: ${rem(100)};
      position: relative;
    }
  }

  @media(min-width: ${rem(1440)}) {
    text-align: left;
    margin-bottom: ${rem(81)};

    > div:nth-child(3) { // Wrapper
      text-align: left;
      display: flex;
      bottom: ${rem(72)};
    }
  }
`;

export const HeroBanner = styled.div`
  display: none;

  @media(min-width: ${rem(900)}) {
    display: block;
    background-image: url("${MarvelBanner}");
    background-size: cover;
    background-position: center;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12), 0 4px 4px 0 rgba(0, 0, 0, 0.24);
    width: 100%;
    height: 300px;
  }

  @media(min-width: ${rem(1440)}) {
    background-size: 50%;
  }
`;

export const HeroInfo = styled.div`
  margin-top: ${rem(32)};

  @media(min-width: ${rem(1440)}) {
    display: flex;
    flex-direction: column;
    margin-left: ${rem(24)};
    margin-top: ${rem(135)};
  }
`;

export const HeroName = styled.h2`
  margin-bottom: ${rem(19)};
  font-family: Helvetica, Arial, sans-serif;

  @media(min-width: ${rem(600)}) {
    font-size: ${rem(48)};
  }

  @media(min-width: ${rem(900)}) {
    font-size: ${rem(60)};
  }

  @media(min-width: ${rem(1440)}) {
    font-size: ${rem(72)};
    font-weight: normal;
  }
`;

export const HeroDescription = styled.p`
  font-family: Helvetica, Arial, sans-serif;
  font-size: ${rem(18)};
  line-height: 2;
  margin: 0 auto;
  max-width: 550px;
  text-align: left;

  @media(min-width: ${rem(600)}) {
    font-size: ${rem(20)};
  }

  @media(min-width: ${rem(900)}) {
    font-size: ${rem(24)};
  }

  @media(min-width: ${rem(1440)}) {
    font-size: ${rem(16)};
    margin: 0;
    max-width: unset;
  }
`;

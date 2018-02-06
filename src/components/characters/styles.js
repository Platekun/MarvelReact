import styled from 'styled-components';

import { rem } from '../../utils';

export const HeroSearchSection = styled.section`
  margin-top: ${rem(60)};
  @media(min-width: ${rem(900)}) {
    margin-top: 0;
  }
`;

export const FeaturedTitle = styled.h2`
  background-color: red;
  color: white;
  display: inline-block;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: normal;
  margin-top: ${rem(32)};
  text-indent: 45;
  text-transform: uppercase;

  @media (min-width: ${rem(500)}) {
    text-indent: 97px;
  }

  @media (min-width: ${rem(900)}) {
    font-size: ${rem(36)};
  }
`;

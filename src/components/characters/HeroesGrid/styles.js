import styled from 'styled-components';

import { rem } from '../../../utils';

export const JusticeGrid = styled.ul`
  display: grid;
  grid-row-gap: ${rem(20)};
  grid-template-columns: ${rem(305)};
  justify-content: center;
  margin-bottom: ${rem(146)};
  margin-top: ${rem(80)};

  @media(min-width: ${rem(800)}) {
    grid-column-gap: ${rem(87.5)};
    grid-row-gap: ${rem(34)};
    grid-template-columns: ${rem(305)} ${rem(305)};
    grid-template-rows: ${rem(453)};
  }

  @media(min-width: ${rem(950)}) {
    grid-row-gap: ${rem(34)};
    grid-template-columns: ${rem(205)} ${rem(205)} ${rem(205)};
  }

  @media (min-width: ${rem(1330)}) {
    grid-column-gap: ${rem(175)};
    grid-row-gap: ${rem(68)};
    grid-template-columns: ${rem(305)} ${rem(305)} ${rem(305)};
    grid-template-rows: ${rem(453)};
    justify-content: flex-start;
  }

  @media (min-width: ${rem(1780)}) {
    grid-template-columns: ${rem(305)} ${rem(305)} ${rem(305)} ${rem(305)};
    justify-content: center;
  }
`;


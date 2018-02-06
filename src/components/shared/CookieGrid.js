import styled from 'styled-components';

import { rem } from '../../utils';

export const CookieGrid = styled.ul`
  display: grid;
  grid-row-gap: ${rem(20)};
  grid-template-columns: ${rem(305)};
  justify-content: center;
  padding-bottom: ${rem(146)};
  margin-top: ${rem(80)};

  @media(min-width: ${rem(800)}) {
    grid-column-gap: ${rem(87.5)};
    grid-row-gap: ${rem(34)};
    grid-template-columns: ${rem(305)} ${rem(305)};
    grid-template-rows: auto;
  }
`;

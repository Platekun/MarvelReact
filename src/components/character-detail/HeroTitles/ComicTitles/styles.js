import styled from 'styled-components';

import { rem } from '../../../../utils';
import { CookieGrid } from '../../../shared';

export const ComicsGrid = styled(CookieGrid)`
  @media(min-width: ${rem(1440)}) {
    grid-column-gap: ${rem(96)};
    grid-row-gap: ${rem(43)};
    grid-template-columns: ${rem(303)} ${rem(303)} ${rem(303)};
    grid-template-rows: ${rem(533)};
  }

  @media(min-width: ${rem(1500)}) {
    grid-template-columns: ${rem(303)} ${rem(303)} ${rem(303)} ${rem(303)};
  }
`;

export const Comic = styled.li`
  list-style-type: none;
`;

export const ComicCover = styled.img`
  box-shadow: 0 0 20px 10px black;
  height: 456px;
  width: 304px;
`;

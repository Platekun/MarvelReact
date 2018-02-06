import styled from 'styled-components';

import { rem } from '../../../../utils';
import { CookieGrid } from '../../../shared';

export const StoriesGrid = styled(CookieGrid)`
  @media(min-width: ${rem(1440)}) {
    grid-column-gap: ${rem(96)};
    grid-row-gap: ${rem(50)};
    grid-template-columns: ${rem(303)} ${rem(303)} ${rem(303)};
    grid-template-rows: ${rem(50)};
    justify-content: center;
  }

  @media(min-width: 1600px) {
    grid-template-columns: ${rem(306)} ${rem(306)} ${rem(306)} ${rem(306)};
  }
`;

export const Stories = styled.li`
  list-style-type: none;
`;

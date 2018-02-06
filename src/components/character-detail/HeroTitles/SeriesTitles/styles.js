import styled from 'styled-components';

import { rem } from '../../../../utils';
import { CookieGrid } from '../../../shared';

export const SeriesGrid = styled(CookieGrid)`
  @media(min-width: 1440px) {
    grid-column-gap: ${rem(96)};
    grid-row-gap: ${rem(40)};
    grid-template-columns: ${rem(306)} ${rem(306)} ${rem(306)};
    grid-template-rows: ${rem(381)};
    justify-content: center;
  }

  @media(min-width: 1500px) {
    grid-template-columns: ${rem(306)} ${rem(306)} ${rem(306)} ${rem(306)};
  }
`;

export const Series = styled.li`
  list-style-type: none;
`;

export const SeriesCover = styled.img`
  box-shadow: 0 0 20px 10px black;
  height: 304px;
  width: 304px;
`;

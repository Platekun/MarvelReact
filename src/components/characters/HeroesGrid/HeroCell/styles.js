import styled from 'styled-components';

import { rem } from '../../../../utils';

export const HeroItem = styled.li`
  align-self: center;
  cursor: pointer;
  list-style-type: none;
  text-align: center;
`;

export const HeroName = styled.h4`
  font-family: Helvetica, Arial, sans-serif;
  font-size: ${rem(24)};
  font-weight: normal;
  margin-top: ${rem(28)};
`;

import styled from 'styled-components';

import { rem } from '../../utils';

export const Headline = styled.p`
  color: white;
  font-family: Helvetica, Arial, sans-serif;
  margin-top: ${rem(16)};

  @media(min-width: ${rem(1440)}) {
    font-size: ${rem(20)};
  }
`;

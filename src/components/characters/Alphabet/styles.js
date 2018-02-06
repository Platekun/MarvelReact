import styled from 'styled-components';

import { rem } from '../../../utils';

export const AlphabetSection = styled.section`
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  margin: ${rem(25)} auto 0 auto;
  width: 90%;

  @media (min-width: 1058px) {
    align-items: center;
    display: flex;
    font-size: ${rem(24)};
    font-weight: normal;
    justify-content: center;
    max-width: 785px;
    width: auto;
  }
`;

export const SLIDER_STYLE = {
  cursor: 'pointer',
};

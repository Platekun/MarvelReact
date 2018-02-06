import styled from 'styled-components';

import { rem } from '../../../utils';
import { Wrapper } from '../.././shared';

export const TitleTabsWrapper = styled(Wrapper)`
    display: flex;
    justify-content: space-between;
    max-width: 580px;

    @media(min-width: ${rem(600)}) {
      justify-content: flex-start;
    }

    @media(min-width: ${rem(1440)}) {
      align-items: center;
      display: flex;
      height: 56px;
    }
`;

export const TitlesSection = styled.section`
  background-image: linear-gradient(-180deg, #111111 0%, #4A4A4A 100%);
`;

export const TitleTabsContent = styled.div`
  @media(min-width: ${rem(1440)}) {
    /* padding-bottom: ${rem(120)}; */
    padding-top: ${rem(15)};
  }
`;

export const TitlesTabs = styled.ul`
  background: #2A2A2A;
  box-shadow: 0 0 4px 0 rgba(0,0,0,0.12), 0 4px 4px 0 rgba(0,0,0,0.24);
`;

export const TitlesTab = styled.li`
  border-bottom: 4px solid transparent;
  font-family: Helvetica, Arial, sans-serif;
  list-style-type: none;
  opacity: 0.7;
  padding: ${rem(15)} 0;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
    border-bottom-color: #F41A12;
  }

a {
    color: white;
    text-decoration: none;
  }

  @media(min-width: ${rem(600)}) {
    padding-left: ${rem(40)};
  }

  @media(min-width: ${rem(1440)}) {
    display: flex;
  }
`;

import styled from 'styled-components';

import { rem } from '../../../utils';

export const AuthSection = styled.section`
  display: none;

  @media(min-width: ${rem(1440)}) {
    display: flex;
    /* display: block;
    position: absolute;
    top: 50%;
    right: 29px;
    transform: translateY(-50%);
    height: 90px;
    width: 270px; */
  }
`;

const AuthButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: ${rem(14)};
  font-family: Helvetica, Arial, sans-serif;
  text-transform: uppercase;
`;

export const JoinButton = styled(AuthButton)`
  color: white;
  margin-right: ${rem(27)};
`;

export const SignInButton = styled(AuthButton)`
  color: red;
  margin-right: ${rem(27)};
`;

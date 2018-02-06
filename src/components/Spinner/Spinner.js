import React from 'react';
import styled from 'styled-components';

import GIF from '../../assets/CaptainAmerica.gif';

const SpinnerImage = styled.img`
  @media(max-width: 800px) {
    left: 50%;
    position: fixed;
    top: 50%;
    transform: translate(-50%);
  }
  @media(min-width: 800px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 60%;
  }
`;

export const Spinner = () => <SpinnerImage src={GIF} alt="Loading, please wait" />;

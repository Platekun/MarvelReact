import React from 'react';

import { AuthSection, JoinButton, SignInButton } from './styles';

export const AuthPanel = () => (
  <AuthSection>
    <h2 hidden>
      Auth Panel
    </h2>
    <JoinButton>Join marvel insider!</JoinButton>
    <SignInButton>Sign in</SignInButton>
  </AuthSection>
);

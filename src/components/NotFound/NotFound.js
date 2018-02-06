import React from 'react';

import { NotFoundTitle, NotFoundReason, NotFoundSuggestion, NotFoundSection, NotFoundInfo } from './styles';

export const NotFound = () => (
  <NotFoundSection>
    <NotFoundInfo>
      <NotFoundTitle>This page cannot be seen</NotFoundTitle>
      <NotFoundReason>Not even the eye of Uatu sees your request</NotFoundReason>
      <NotFoundSuggestion>
        Make sure you typed in the page address correctly or go back to your previous page.
      </NotFoundSuggestion>
    </NotFoundInfo>
  </NotFoundSection>
);

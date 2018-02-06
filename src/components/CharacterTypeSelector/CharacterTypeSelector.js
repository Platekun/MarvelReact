import React from 'react';

import { HeroTypeSection, HeroTypesTitle, HeroTypeItem, HeroTypes } from './styles';

export const CharacterTypeSelector = () => (
  <HeroTypeSection>
    <HeroTypesTitle>Characters</HeroTypesTitle>
    <HeroTypes>
      <HeroTypeItem>All characters</HeroTypeItem>
      <HeroTypeItem>Top marvel heroes</HeroTypeItem>
      <HeroTypeItem>Bring on the bad guys</HeroTypeItem>
      <HeroTypeItem>Titanic Dreams</HeroTypeItem>
      <HeroTypeItem>Women of Marvel</HeroTypeItem>
      <HeroTypeItem>Surprise Me</HeroTypeItem>
    </HeroTypes>
  </HeroTypeSection>
);

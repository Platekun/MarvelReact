import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Alphabet from './Alphabet';
import CharacterSearchBox from './CharacterSearchBox';
import { CharacterTypeSelector } from '../CharacterTypeSelector';
import HeroesGrid from './HeroesGrid';
import { HeroSearchSection, FeaturedTitle } from './styles';
import { Wrapper } from '../shared';

export const Characters = ({ history }) => (
  <HeroSearchSection>
    <CharacterTypeSelector />
    <FeaturedTitle>Featured Characters</FeaturedTitle>
    <Wrapper>
      <CharacterSearchBox history={history} />
      <Alphabet />
      <HeroesGrid history={history} />
    </Wrapper>
  </HeroSearchSection>
);

Characters.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Characters);

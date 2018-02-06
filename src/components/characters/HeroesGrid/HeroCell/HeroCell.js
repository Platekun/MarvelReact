import React from 'react';
import PropTypes from 'prop-types';

import { HeroAvatar } from '../../../shared';
import { HeroItem, HeroName } from './styles';

const buildThumbnailUrl = ({ thumbnail }) => `${thumbnail.path}.${thumbnail.extension}`;

const onHeroSelect = ({
  history, hero, select, removeLastHeroFound,
}) => {
  removeLastHeroFound();
  select(hero);
  history.push(`/detail/${hero.id}`);
};

export const HeroCell = (props) => {
  const { hero } = props;

  return (
    <HeroItem onClick={() => onHeroSelect(props)}>
      <HeroAvatar
        src={buildThumbnailUrl(hero)}
        alt={hero.name}
        tabIndex={0}
        onKeyPress={(evt) => { if (evt.key === 'Enter') onHeroSelect(props); }}
      />
      <HeroName>{hero.name}</HeroName>
    </HeroItem>
  );
};

HeroCell.propTypes = {
  hero: PropTypes.object.isRequired,
};

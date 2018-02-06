import React from 'react';
import PropTypes from 'prop-types';
import { Link, Switch, Route } from 'react-router-dom';

import { TitlesSection, TitlesTabs, TitlesTab, TitleTabsContent, TitleTabsWrapper } from './styles';
import ComicTitles from './ComicTitles';
import SeriesTitles from './SeriesTitles';
import StoriesTitles from './StoriesTitles';
import EventsTitles from './EventsTitles';

export const HeroTitles = ({ hero }) => (
  <TitlesSection>
    <h3 hidden>Hero Titles</h3>
    <TitlesTabs>
      <TitleTabsWrapper>
        <TitlesTab>
          <Link to={`/detail/${hero.id}`}>
            Comics
          </Link>
        </TitlesTab>
        <TitlesTab>
          <Link to={`/detail/${hero.id}/series`}>
            Series
          </Link>
        </TitlesTab>
        <TitlesTab>
          <Link to={`/detail/${hero.id}/stories`}>
            Stories
          </Link>
        </TitlesTab>
        <TitlesTab>
          <Link to={`/detail/${hero.id}/events`}>
            Events
          </Link>
        </TitlesTab>
      </TitleTabsWrapper>
    </TitlesTabs>
    <TitleTabsContent>
      <Switch>
        <Route path="/detail/:heroId" exact component={ComicTitles} />
        <Route path="/detail/:heroId/series" component={SeriesTitles} />
        <Route path="/detail/:heroId/stories" component={StoriesTitles} />
        <Route path="/detail/:heroId/events" component={EventsTitles} />
      </Switch>
    </TitleTabsContent>
  </TitlesSection>
);

HeroTitles.propTypes = {
  hero: PropTypes.object.isRequired,
};

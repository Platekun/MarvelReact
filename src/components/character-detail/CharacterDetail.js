import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchHero } from '../../actions';
import { NAME as HERO_DETAIL } from '../../reducers/hero-detail';
import { NAME as HERO_SEARCH } from '../../reducers/hero-search';
import { HeroAvatar, Wrapper } from '../shared';
import { CharacterTypeSelector } from '../CharacterTypeSelector';
import { HeroTitles } from './HeroTitles';
import { Spinner } from '../Spinner';
import { HeroName, HeroDescription, HeroSummarySection, HeroInfo, HeroBanner } from './styles';

export class CharacterDetail extends Component {
  constructor(props) {
    super(props);
    this.renderHero = this.renderHero.bind(this);
  }

  componentDidMount() {
    if (this.heroIsMissing()) {
      const { match: { params: { heroId } } } = this.props;
      this.props.fetchHero(heroId);
    }
  }

  heroIsMissing() {
    return !Object.keys(this.props.hero).length;
  }

  renderHero() {
    const { hero } = this.props;

    return (
      <div>
        <HeroSummarySection>
          <CharacterTypeSelector />
          <HeroBanner />
          <Wrapper>
            <HeroAvatar src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} disableHover center />
            <HeroInfo>
              <HeroName>{hero.name}</HeroName>
              <HeroDescription>{hero.description || 'There\'s no available description for this character.' }</HeroDescription>
            </HeroInfo>
          </Wrapper>
        </HeroSummarySection>
        <HeroTitles hero={hero} />
      </div>
    );
  }

  render() {
    return (
      (this.heroIsMissing() || this.props.loadingHero)
        ? (
          <div style={{ height: '100vh', width: '100vw' }}>
            <Spinner />
          </div>)
        : this.renderHero()
    );
  }
}

CharacterDetail.propTypes = {
  fetchHero: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  hero: PropTypes.object,
  loadingHero: PropTypes.bool.isRequired,
};

CharacterDetail.defaultProps = {
  hero: {},
};

const mapStateToProps = state => ({
  hero: state[HERO_DETAIL].hero || state[HERO_SEARCH].heroToSearch,
  loadingHero: state[HERO_DETAIL].loadingHero,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchHero,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterDetail));

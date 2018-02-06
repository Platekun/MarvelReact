import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { NAME as HERO_SEARCH } from '../../../reducers/hero-search';
import { selectHero, prefetchHeroes, removeFoundHero } from '../../../actions';
import { JusticeGrid } from './styles';
import { HeroCell } from './HeroCell';
import { Spinner } from '../../Spinner/Spinner';

export class HeroesGrid extends Component {
  constructor(props) {
    super(props);
    this.renderHeroes = this.renderHeroes.bind(this);
  }

  componentDidMount() {
    const { heroes, fetchHeroes } = this.props;

    if (!heroes.length) {
      fetchHeroes();
    }
  }

  renderHeroes() {
    const {
      history, heroes, select, removeLastHeroFound,
    } = this.props;

    return (
      heroes.map(hero => (
        <HeroCell
          key={uuid()}
          history={history}
          hero={hero}
          select={select}
          removeLastHeroFound={removeLastHeroFound}
        />
      ))
    );
  }

  render() {
    return (
      <JusticeGrid>
        {this.props.loadingHeroes ? <Spinner /> : this.renderHeroes()}
      </JusticeGrid>
    );
  }
}


HeroesGrid.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.object.isRequired,
  loadingHeroes: PropTypes.bool.isRequired,
  fetchHeroes: PropTypes.func.isRequired,
  select: PropTypes.func.isRequired,
  removeLastHeroFound: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  heroes: state[HERO_SEARCH].heroes,
  loadingHeroes: state[HERO_SEARCH].loadingHeroes,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchHeroes: prefetchHeroes,
  select: selectHero,
  removeLastHeroFound: removeFoundHero,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeroesGrid);

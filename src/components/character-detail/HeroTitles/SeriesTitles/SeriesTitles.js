import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import uuid from 'uuid';

import { NAME as HERO_DETAIL } from '../../../../reducers/hero-detail';
import { fetchHeroSeries } from '../../../../actions';
import { SeriesGrid, Series, SeriesCover } from './styles';
import { Headline, WhiteMessage } from '../../../shared';

export class SeriesTitles extends Component {
  constructor(props) {
    super(props);

    this.renderSeries = this.renderSeries.bind(this);
  }

  componentDidMount() {
    if (this.seriesAreMissing()) {
      const { match: { params: { heroId } } } = this.props;
      this.props.fetchHeroSeries(heroId);
    }
  }

  seriesAreMissing() {
    return !this.props.series.length;
  }

  renderSeries() {
    return this.props.series.map(series => (
      <Series key={uuid()}>
        <SeriesCover src={`${series.thumbnail.path}.${series.thumbnail.extension}`} tabIndex={0} />
        <Headline>{series.title}</Headline>
      </Series>
    ));
  }

  render() {
    const { series, loadingSeries } = this.props;

    return (
      <section>
        <h4 hidden>Series</h4>
        {
          series.length || loadingSeries
            ? (
              <SeriesGrid>
                {this.renderSeries()}
              </SeriesGrid>
            ) : (
              <WhiteMessage>
                There are no series associated to this character <span role="img" aria-label="Sad emoji">😞</span>
              </WhiteMessage>
            )
        }
      </section>
    );
  }
}

SeriesTitles.propTypes = {
  series: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchHeroSeries: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  loadingSeries: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  series: state[HERO_DETAIL].series,
  loadingSeries: state[HERO_DETAIL].loadingSeries,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchHeroSeries,
    },
    dispatch,
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SeriesTitles));

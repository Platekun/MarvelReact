import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import uuid from 'uuid';

import { NAME as HERO_DETAIL } from '../../../../reducers/hero-detail';
import { fetchHeroComics } from '../../../../actions';
import { ComicsGrid, Comic, ComicCover } from './styles';
import { Headline, WhiteMessage } from '../../../shared';

export class ComicTitles extends Component {
  constructor(props) {
    super(props);

    this.renderComics = this.renderComics.bind(this);
  }

  componentDidMount() {
    if (this.comicsAreMissing()) {
      const { match: { params: { heroId } } } = this.props;
      this.props.fetchHeroComics(heroId);
    }
  }

  comicsAreMissing() {
    return !this.props.comics.length;
  }

  renderComics() {
    return this.props.comics.map(comic => (
      <Comic key={uuid()}>
        <ComicCover src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} tabIndex={0} />
        <Headline>{comic.title}</Headline>
      </Comic>
    ));
  }

  render() {
    const { comics, loadingComics } = this.props;

    return (
      <section>
        <h4 hidden>Comics</h4>
        {
          comics.length || loadingComics
            ? (
              <ComicsGrid>
                {this.renderComics()}
              </ComicsGrid>
            ) : (
              <WhiteMessage>
                There are no comics associated to this character <span role="img" aria-label="Sad emoji">😞</span>
              </WhiteMessage>
            )
        }
      </section>
    );
  }
}

ComicTitles.propTypes = {
  comics: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchHeroComics: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  loadingComics: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  comics: state[HERO_DETAIL].comics,
  loadingComics: state[HERO_DETAIL].loadingComics,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchHeroComics,
    },
    dispatch,
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ComicTitles));

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import uuid from 'uuid';

import { NAME as HERO_DETAIL } from '../../../../reducers/hero-detail';
import { fetchHeroStories } from '../../../../actions';
import { StoriesGrid, Stories } from './styles';
import { Headline, WhiteMessage } from '../../../shared';

export class StoriesTitles extends Component {
  constructor(props) {
    super(props);

    this.renderStories = this.renderStories.bind(this);
  }

  componentDidMount() {
    if (this.storiesAreMissing()) {
      const { match: { params: { heroId } } } = this.props;
      this.props.fetchHeroStories(heroId);
    }
  }

  storiesAreMissing() {
    return !this.props.stories.length;
  }

  renderStories() {
    return this.props.stories.map(stories => (
      <Stories key={uuid()}>
        <Headline tabIndex={0}>{stories.title}</Headline>
      </Stories>
    ));
  }

  render() {
    const { stories, loadingStories } = this.props;

    return (
      <section>
        <h4 hidden>Stories</h4>
        {
          stories.length || loadingStories
            ? (
              <StoriesGrid>
                {this.renderStories()}
              </StoriesGrid>
            ) : (
              <WhiteMessage>
                There are no events associated to this character <span role="img" aria-label="Sad emoji">😞</span>
              </WhiteMessage>
            )
        }
      </section>
    );
  }
}

StoriesTitles.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchHeroStories: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  loadingStories: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  stories: state[HERO_DETAIL].stories,
  loadingStories: state[HERO_DETAIL].loadingStories,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchHeroStories,
    },
    dispatch,
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoriesTitles));

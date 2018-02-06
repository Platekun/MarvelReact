import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import uuid from 'uuid';

import { NAME as HERO_DETAIL } from '../../../../reducers/hero-detail';
import { fetchHeroEvents } from '../../../../actions';
import { EventsGrid, Events, EventsCover } from './styles';
import { Headline, WhiteMessage } from '../../../shared';

export class EventsTitles extends Component {
  constructor(props) {
    super(props);

    this.renderEvents = this.renderEvents.bind(this);
  }

  componentDidMount() {
    if (this.eventsAreMissing()) {
      const { match: { params: { heroId } } } = this.props;
      this.props.fetchHeroEvents(heroId);
    }
  }

  eventsAreMissing() {
    return !this.props.events.length;
  }

  renderEvents() {
    return this.props.events.map(events => (
      <Events key={uuid()}>
        <EventsCover src={`${events.thumbnail.path}.${events.thumbnail.extension}`} tabIndex={0} />
        <Headline>{events.title}</Headline>
      </Events>
    ));
  }

  render() {
    const { events, loadingEvents } = this.props;

    return (
      <section>
        <h4 hidden>Events</h4>
        {
          events.length || loadingEvents
            ? (
              <EventsGrid>
                {this.renderEvents()}
              </EventsGrid>
            ) : (
              <WhiteMessage >
                There are no events associated to this character <span role="img" aria-label="Sad emoji">😞</span>
              </WhiteMessage>
            )
        }
      </section>
    );
  }
}

EventsTitles.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchHeroEvents: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  loadingEvents: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  events: state[HERO_DETAIL].events,
  loadingEvents: state[HERO_DETAIL].loadingEvents,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchHeroEvents,
    },
    dispatch,
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventsTitles));

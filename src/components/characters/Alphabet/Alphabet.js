import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { prefetchHeroes } from '../../../actions';
import { LETTERS } from '../../../constants';
import './Alphabet.css';
import { AlphabetSection, SLIDER_STYLE } from './styles';

const SLIDER_SETTINGS = {
  arrows: true,
  dots: false,
  slidesToShow: 14,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 400,
      settings: { slidesToShow: 5, slidesToScroll: 1 },
    },
    {
      breakpoint: 800,
      settings: { slidesToShow: 7, slidesToScroll: 3 },
    },
    {
      breakpoint: 900,
      settings: { slidesToShow: 10 },
    },
    {
      breakpoint: 1440,
      settings: { slidesToShow: 14, slidesToScroll: 5 },
    },
  ],
};

export class Alphabet extends Component {
  constructor(props) {
    super(props);
    this.onLetterClicked = this.onLetterClicked.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.renderLetters = this.renderLetters.bind(this);
  }

  onLetterClicked({ target: { dataset: { letter } } }) {
    this.props.prefetchHeroes(letter);
  }

  onKeyPress({ key, target: { dataset: { letter } } }) {
    if (key === 'Enter') {
      this.props.prefetchHeroes(letter);
    }
  }

  renderLetters() {
    return LETTERS.map(letter => (
      <div
        key={uuid()}
        data-letter={letter}
        role="button"
        tabIndex={0}
        onKeyPress={this.onKeyPress}
        onClick={this.onLetterClicked}
        style={SLIDER_STYLE}
      >
        {letter.toUpperCase()}
      </div>
    ));
  }

  render() {
    return (
      <AlphabetSection>
        <Slider {...SLIDER_SETTINGS}>{this.renderLetters()}</Slider>
      </AlphabetSection>
    );
  }
}

Alphabet.propTypes = {
  prefetchHeroes: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  prefetchHeroes,
}, dispatch);

export default connect(undefined, mapDispatchToProps)(Alphabet);

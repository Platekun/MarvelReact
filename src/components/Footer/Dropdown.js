import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FooterColumnTitle } from './styles';
import { Hidable } from './Hidable';

export class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.onTitleClicked = this.onTitleClicked.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  onTitleClicked() {
    if (window.innerWidth < 1120) {
      this.setState(prevState => ({ ...prevState, isOpen: !prevState.isOpen }));
    }
  }

  updateWindowDimensions() {
    if (window.innerWidth >= 1120) {
      this.setState(prevState => ({ ...prevState, isOpen: true }));
    } else {
      this.setState(prevState => ({ ...prevState, isOpen: false }));
    }
  }

  render() {
    return (
      <div>
        <FooterColumnTitle onClick={this.onTitleClicked}>
          {this.props.title.toUpperCase()}
        </FooterColumnTitle>
        <Hidable isOpen={this.state.isOpen}>
          {this.props.children}
        </Hidable>
      </div>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
}

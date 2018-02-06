import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { toggleNavigationDrawer } from '../../actions';
import NavBar from './NavBar';
import { AuthPanel } from './Auth/Auth';
import { ImageLogo, HamburguerMenu, UserOptions, AppBar, MobileSettings } from './styles';
import MarvelLogo from '../../assets/marvel-logo.png';

export const Header = ({ history, toggleNavDrawer }) => (
  <AppBar>
    <h1 hidden>Marvel</h1>
    <ImageLogo src={MarvelLogo} onClick={() => history.push('/')} />
    <NavBar />
    <AuthPanel />
    <MobileSettings>
      <HamburguerMenu onClick={() => toggleNavDrawer()} />
      <UserOptions />
    </MobileSettings>
  </AppBar>
);

Header.propTypes = {
  history: PropTypes.object.isRequired,
  toggleNavDrawer: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleNavDrawer: toggleNavigationDrawer,
}, dispatch);

export default connect(undefined, mapDispatchToProps)(Header);

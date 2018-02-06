import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { NAME as CORE } from '../../../reducers/core';
import { navigationItems } from '../../../constants';
import { Nav, NavItemList, NavItem, NavSearchButton } from './styles';

const renderNavItems = () =>
  navigationItems.map(item => (
    <NavItem key={uuid()}>
      <Link to={item.url}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Link>
    </NavItem>
  ));

export const NavBar = ({ navigationDrawerIsOpen }) => (
  <Nav isOpen={navigationDrawerIsOpen || false}>
    <h2 hidden>Navigation Menu</h2>
    <NavItemList>
      {renderNavItems(navigationItems)}
      <NavSearchButton />
    </NavItemList>
  </Nav>
);

NavBar.propTypes = {
  navigationDrawerIsOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  navigationDrawerIsOpen: state[CORE].navigationDrawerIsOpen,
});

export default connect(mapStateToProps)(NavBar);

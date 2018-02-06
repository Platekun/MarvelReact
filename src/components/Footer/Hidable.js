import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DropdownItems = styled.div`
  height: ${props => (props.isOpen ? 'auto' : '0')};
  transition: ease all 0.5s;
`;

const component = ({ isOpen, children }) => (
  <DropdownItems isOpen={isOpen}>
    {isOpen || window.innerWidth >= 1120 ? children : undefined}
  </DropdownItems>
);

component.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export const Hidable = component;

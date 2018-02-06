import * as actionTypes from '../actionTypes';

const defaultState = {
  navigationDrawerIsOpen: false,
};

export const NAME = 'CORE';

export default (prevState = defaultState, action) => {
  switch (action.type) {
    case actionTypes.NAVIGATION_DRAWER_WAS_TOGGLED: {
      return {
        ...prevState,
        navigationDrawerIsOpen: !prevState.navigationDrawerIsOpen,
      };
    }

    default: return prevState;
  }
};

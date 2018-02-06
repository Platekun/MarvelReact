import * as actionTypes from '../actionTypes';

const defaultState = {
  loadingHeroes: false,
  heroes: [],
  searchTerm: '',
  fetchingError: undefined,
  heroToSearch: undefined,
};

export const NAME = 'HERO_SEARCH';

export default (prevState = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ATTEMPT_FETCH_HEROES: {
      return {
        ...prevState,
        loadingHeroes: true,
      };
    }

    case actionTypes.HEROES_FETCHING_SUCCEEDED: {
      return {
        ...prevState,
        heroes: action.payload,
        loadingHeroes: false,
      };
    }

    case actionTypes.HEROES_FETCHING_FAILED: {
      return {
        ...prevState,
        fetchingError: action.payload,
        loadingHeroes: false,
      };
    }

    case actionTypes.HERO_NAME_TYPED: {
      return {
        ...prevState,
        searchTerm: action.payload,
      };
    }

    case actionTypes.HERO_NAME_REMOVED: {
      return {
        ...prevState,
        searchTerm: '',
      };
    }

    case actionTypes.HERO_SUGGESTION_SELECTED: {
      return {
        ...prevState,
        heroToSearch: action.payload,
      };
    }

    case actionTypes.HERO_SELECTED: {
      return {
        ...prevState,
        heroToSearch: action.payload,
      };
    }

    default: return prevState;
  }
};

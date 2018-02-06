import * as actionTypes from '../actionTypes';

const defaultState = {
  currentTab: '',
  hero: undefined,
  heroFetchingError: undefined,
  loadingHero: false,
  comics: [],
  comicsFetchingError: undefined,
  loadingComics: false,
  series: [],
  seriesFetchingError: undefined,
  loadingSeries: false,
  stories: [],
  storiesFetchingError: undefined,
  loadingStories: false,
  events: [],
  eventsFetchingError: undefined,
  loadingEvents: false,
};

export const NAME = 'HERO_DETAIL';

export default (prevState = defaultState, action) => {
  switch (action.type) {
    case actionTypes.TAB_CHANGED: {
      return {
        ...prevState,
        currentTab: action.payload,
      };
    }

    case actionTypes.ATTEMPT_FETCH_HERO: {
      return {
        ...prevState,
        loadingHero: true,
      };
    }

    case actionTypes.HERO_FETCHING_SUCCEEDED: {
      return {
        ...prevState,
        hero: action.payload,
        loadingHero: false,
      };
    }

    case actionTypes.HERO_FETCHING_FAILED: {
      return {
        ...prevState,
        heroFetchingError: action.payload,
        loadingHero: false,
      };
    }

    case actionTypes.ATTEMPT_FETCH_HERO_COMICS: {
      return {
        ...prevState,
        loadingComics: true,
      };
    }

    case actionTypes.HERO_COMICS_FETCHING_SUCCEEDED: {
      return {
        ...prevState,
        comics: action.payload,
        loadingComics: false,
      };
    }

    case actionTypes.HERO_COMICS_FETCHING_FAILED: {
      return {
        ...prevState,
        comicsFetchingError: action.payload,
        loadingComics: false,
      };
    }

    case actionTypes.ATTEMPT_FETCH_HERO_SERIES: {
      return {
        ...prevState,
        loadingSeries: true,
      };
    }

    case actionTypes.HERO_SERIES_FETCHING_SUCCEEDED: {
      return {
        ...prevState,
        series: action.payload,
        loadingSeries: false,
      };
    }

    case actionTypes.HERO_SERIES_FETCHING_FAILED: {
      return {
        ...prevState,
        seriesFetchingError: action.payload,
        loadingSeries: false,
      };
    }

    case actionTypes.ATTEMPT_FETCH_HERO_STORIES: {
      return {
        ...prevState,
        loadingStories: true,
      };
    }

    case actionTypes.HERO_STORIES_FETCHING_SUCCEEDED: {
      return {
        ...prevState,
        stories: action.payload,
        loadingStories: false,
      };
    }

    case actionTypes.HERO_STORIES_FETCHING_FAILED: {
      return {
        ...prevState,
        storiesFetchingError: action.payload,
        loadingStories: false,
      };
    }

    case actionTypes.ATTEMPT_FETCH_HERO_EVENTS: {
      return {
        ...prevState,
        loadingEvents: true,
      };
    }

    case actionTypes.HERO_EVENTS_FETCHING_SUCCEEDED: {
      return {
        ...prevState,
        events: action.payload,
        loadingEvents: false,
      };
    }

    case actionTypes.HERO_EVENTS_FETCHING_FAILED: {
      return {
        ...prevState,
        eventsFetchingError: action.payload,
        loadingEvents: false,
      };
    }

    case actionTypes.REMOVE_SELECTED_HERO: {
      return defaultState;
    }

    default: return prevState;
  }
};

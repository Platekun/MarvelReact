import expect from 'expect';
import df from 'deep-freeze';

import core from './core';
import heroSearch from './hero-search';
import heroDetail from './hero-detail';
import * as actionTypes from '../actionTypes';

describe('Reducers', () => {
  describe('Core', () => {
    it('should return the default state', () => {
      const action = {
        type: 'DUMMY',
      };

      const state = {};

      const actual = core(df(state), df(action));
      expect(actual).toBe(state);
    });

    it('should handle the navigation drawer toggling.', () => {
      const action = {
        type: actionTypes.NAVIGATION_DRAWER_WAS_TOGGLED,
      };

      const state = {
        navigationDrawerIsOpen: false,
      };

      const expected = {
        navigationDrawerIsOpen: true,
      };

      const actual = core(df(state), df(action));
      expect(actual).toEqual(expected);
    });
  });

  describe('Hero Search', () => {
    it('should return the default state.', () => {
      const action = {
        type: 'DUMMY',
      };

      const state = {};

      const actual = heroSearch(df(state), df(action));
      expect(actual).toBe(state);
    });

    it('should notify heroes are being fetched.', () => {
      const action = {
        type: actionTypes.ATTEMPT_FETCH_HEROES,
      };

      const state = {
        loadingHeroes: false,
      };

      const expected = {
        ...state,
        loadingHeroes: true,
      };

      const actual = heroSearch(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should notify heroes were fetched.', () => {
      const action = {
        type: actionTypes.HEROES_FETCHING_SUCCEEDED,
        payload: [],
      };

      const state = {
        loadingHeroes: true,
      };

      const expected = {
        ...state,
        loadingHeroes: false,
        heroes: action.payload,
      };

      const actual = heroSearch(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should notify heroes were not fetched.', () => {
      const action = {
        type: actionTypes.HEROES_FETCHING_FAILED,
        payload: new Error(),
      };

      const state = {
        loadingHeroes: false,
      };

      const expected = {
        ...state,
        loadingHeroes: false,
        fetchingError: action.payload,
      };

      const actual = heroSearch(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should store hero name.', () => {
      const action = {
        type: actionTypes.HERO_NAME_TYPED,
        payload: 'Batman',
      };

      const state = {
        searchTerm: '',
      };

      const expected = {
        ...state,
        searchTerm: action.payload,
      };

      const actual = heroSearch(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should remove hero name.', () => {
      const action = {
        type: actionTypes.HERO_NAME_REMOVED,
      };

      const state = {
        searchTerm: 'Batman',
      };

      const expected = {
        ...state,
        searchTerm: '',
      };

      const actual = heroSearch(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should store the selected hero suggestion.', () => {
      const action = {
        type: actionTypes.HERO_SUGGESTION_SELECTED,
        heroToSearch: {},
      };

      const state = {};

      const expected = {
        ...state,
        heroToSearch: state.heroToSearch,
      };

      const actual = heroSearch(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should store the selected hero from the grid.', () => {
      const action = {
        type: actionTypes.HERO_SELECTED,
        heroToSearch: {},
      };

      const state = {};

      const expected = {
        ...state,
        heroToSearch: state.heroToSearch,
      };

      const actual = heroSearch(df(state), df(action));
      expect(actual).toEqual(expected);
    });
  });

  describe('Hero Detail', () => {
    it('should return the default state.', () => {
      const action = {
        type: '',
      };

      const state = {
        currentTab: '',
      };

      const actual = heroDetail(df(state), df(action));

      expect(actual).toBe(state);
    });

    it('should change tab.', () => {
      const action = {
        type: actionTypes.TAB_CHANGED,
        payload: 'test',
      };

      const state = {
        currentTab: '',
      };

      const expected = {
        currentTab: action.payload,
      };

      const actual = heroDetail(df(state), df(action));

      expect(actual).toEqual(expected);
    });

    it('should notify hero is being fetched.', () => {
      const action = {
        type: actionTypes.ATTEMPT_FETCH_HERO,
      };

      const state = {
        loadingHero: false,
      };

      const expected = {
        ...state,
        loadingHero: true,
      };

      const actual = heroDetail(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should notify hero was fetched.', () => {
      const action = {
        type: actionTypes.HERO_FETCHING_SUCCEEDED,
        payload: { id: '1' },
      };

      const state = {
        loadingHero: true,
      };

      const expected = {
        ...state,
        loadingHero: false,
        hero: action.payload,
      };

      const actual = heroDetail(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should notify hero was not fetched.', () => {
      const action = {
        type: actionTypes.HERO_FETCHING_FAILED,
        payload: new Error(),
      };

      const state = {
        loadingHeroes: true,
      };

      const expected = {
        ...state,
        loadingHero: false,
        heroFetchingError: action.payload,
      };

      const actual = heroDetail(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should notify hero\'s comics are being fetched.', () => {
      const action = {
        type: actionTypes.ATTEMPT_FETCH_HERO_COMICS,
      };

      const state = {
        loadingComics: false,
      };

      const expected = {
        ...state,
        loadingComics: true,
      };

      const actual = heroDetail(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should notify hero\'s comics were fetched.', () => {
      const action = {
        type: actionTypes.HERO_COMICS_FETCHING_SUCCEEDED,
        payload: [{ id: '1' }],
      };

      const state = {
        loadingHero: true,
      };

      const expected = {
        ...state,
        loadingComics: false,
        comics: action.payload,
      };

      const actual = heroDetail(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should notify hero\'s comics were not fetched.', () => {
      const action = {
        type: actionTypes.HERO_COMICS_FETCHING_FAILED,
        payload: new Error(),
      };

      const state = {
        loadingComics: true,
      };

      const expected = {
        ...state,
        loadingComics: false,
        comicsFetchingError: action.payload,
      };

      const actual = heroDetail(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should notify hero\'s series are being fetched.', () => {
      const action = {
        type: actionTypes.ATTEMPT_FETCH_HERO_SERIES,
      };

      const state = {
        loadingSeries: false,
      };

      const expected = {
        ...state,
        loadingSeries: true,
      };

      const actual = heroDetail(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should notify hero\'s series were fetched.', () => {
      const action = {
        type: actionTypes.HERO_SERIES_FETCHING_SUCCEEDED,
        payload: [{ id: '1' }],
      };

      const state = {
        loadingSeries: true,
      };

      const expected = {
        ...state,
        loadingSeries: false,
        series: action.payload,
      };

      const actual = heroDetail(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should notify hero\'s series were not fetched.', () => {
      const action = {
        type: actionTypes.HERO_SERIES_FETCHING_FAILED,
        payload: new Error(),
      };

      const state = {
        loadingSeries: true,
      };

      const expected = {
        ...state,
        loadingSeries: false,
        seriesFetchingError: action.payload,
      };

      const actual = heroDetail(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should notify hero\'s stories are being fetched.', () => {
      const action = {
        type: actionTypes.ATTEMPT_FETCH_HERO_STORIES,
      };

      const state = {
        loadingStories: false,
      };

      const expected = {
        ...state,
        loadingStories: true,
      };

      const actual = heroDetail(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should notify hero\'s stories were fetched.', () => {
      const action = {
        type: actionTypes.HERO_STORIES_FETCHING_SUCCEEDED,
        payload: [{ id: '1' }],
      };

      const state = {
        loadingStories: true,
      };

      const expected = {
        ...state,
        loadingStories: false,
        stories: action.payload,
      };

      const actual = heroDetail(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should notify hero\'s stories were not fetched.', () => {
      const action = {
        type: actionTypes.HERO_STORIES_FETCHING_FAILED,
        payload: new Error(),
      };

      const state = {
        loadingStories: true,
      };

      const expected = {
        ...state,
        loadingStories: false,
        storiesFetchingError: action.payload,
      };

      const actual = heroDetail(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should notify hero\'s events are being fetched.', () => {
      const action = {
        type: actionTypes.ATTEMPT_FETCH_HERO_EVENTS,
      };

      const state = {
        loadingEvents: false,
      };

      const expected = {
        ...state,
        loadingEvents: true,
      };

      const actual = heroDetail(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should notify hero\'s events were fetched.', () => {
      const action = {
        type: actionTypes.HERO_EVENTS_FETCHING_SUCCEEDED,
        payload: [{ id: '1' }],
      };

      const state = {
        loadingEvents: true,
      };

      const expected = {
        ...state,
        loadingEvents: false,
        events: action.payload,
      };

      const actual = heroDetail(df(state), df(action));
      expect(actual).toEqual(expected);
    });

    it('should notify hero\'s events were not fetched.', () => {  
      const action = {
        type: actionTypes.HERO_EVENTS_FETCHING_FAILED,
        payload: new Error(),
      };

      const state = {
        loadingEvents: true,
      };

      const expected = {
        ...state,
        loadingEvents: false,
        eventsFetchingError: action.payload,
      };

      const actual = heroDetail(df(state), df(action));
      expect(actual).toEqual(expected);
    });
  });
});

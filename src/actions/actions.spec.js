import expect from 'expect';
import * as actions from './';
import * as actionTypes from '../actionTypes';

describe('Action Creators', () => {
  describe('#attemptFetchHeroes', () => {
    it(`should return an action of type ${actionTypes.ATTEMPT_FETCH_HEROES}.`, () => {
      const actual = actions.attemptFetchHeroes();
      expect(actual.type).toBe(actionTypes.ATTEMPT_FETCH_HEROES);
    });
  });

  describe('#heroesFetchingSucceeded', () => {
    it(`should return an action of type ${actionTypes.HEROES_FETCHING_SUCCEEDED}.`, () => {
      const actual = actions.heroesFetchingSucceeded();
      expect(actual.type).toBe(actionTypes.HEROES_FETCHING_SUCCEEDED);
    });
    it('should return the heroes as paylad.', () => {
      const heroes = [{ id: 1 }];
      const actual = actions.heroesFetchingSucceeded(heroes);
      expect(actual.payload).toBe(heroes);
    });
  });

  describe('#heroesFetchingFailed', () => {
    it(`should return an action of type ${actionTypes.HEROES_FETCHING_FAILED}.`, () => {
      const actual = actions.heroesFetchingFailed();
      expect(actual.type).toBe(actionTypes.HEROES_FETCHING_FAILED);
    });
    it('should return the error as paylad.', () => {
      const error = new Error();
      const actual = actions.heroesFetchingFailed(error);
      expect(actual.type).toBe(actionTypes.HEROES_FETCHING_FAILED);
      expect(actual.payload).toBe(error);
    });
  });

  describe('#typeHeroName', () => {
    it(`should return an action of type ${actionTypes.HERO_NAME_TYPED}.`, () => {
      const actual = actions.typeHeroName();
      expect(actual.type).toBe(actionTypes.HERO_NAME_TYPED);
    });
    it('should return the current value as paylad.', () => {
      const input = 'Batman';
      const actual = actions.heroesFetchingFailed(input);
      expect(actual.payload).toBe(input);
    });
  });

  describe('#cleanHeroName', () => {
    it(`should return an action of type ${actionTypes.HERO_NAME_REMOVED}.`, () => {
      const actual = actions.cleanHeroName();
      expect(actual.type).toBe(actionTypes.HERO_NAME_REMOVED);
    });
  });

  describe('#selectHeroSuggestion', () => {
    it(`should return an action of type ${actionTypes.HERO_SUGGESTION_SELECTED}.`, () => {
      const actual = actions.selectHeroSuggestion();
      expect(actual.type).toBe(actionTypes.HERO_SUGGESTION_SELECTED);
    });

    it('should return the hero info as payload.', () => {
      const selection = 'Batman';
      const actual = actions.selectHeroSuggestion(selection);
      expect(actual.payload).toBe(selection);
    });
  });

  describe('#selectHero', () => {
    it(`should return an action of type ${actionTypes.HERO_SELECTED}.`, () => {
      const actual = actions.selectHero();
      expect(actual.type).toBe(actionTypes.HERO_SELECTED);
    });
    it('should return the hero info as payload.', () => {
      const selectedHero = { id: '1', name: 'Batman' };
      const actual = actions.selectHero(selectedHero);
      expect(actual.payload).toBe(selectedHero);
    });
  });

  describe('#toggleNavigationDrawer', () => {
    it(`should return an action of type ${actionTypes.NAVIGATION_DRAWER_WAS_TOGGLED}.`, () => {
      const actual = actions.toggleNavigationDrawer();
      expect(actual.type).toBe(actionTypes.NAVIGATION_DRAWER_WAS_TOGGLED);
    });
  });

  describe('#attemptFetchHero', () => {
    it(`should return an action of type ${actionTypes.ATTEMPT_FETCH_HERO}.`, () => {
      const actual = actions.attemptFetchHero();
      expect(actual.type).toBe(actionTypes.ATTEMPT_FETCH_HERO);
    });
  });

  describe('#heroFetchingSucceeded', () => {
    it(`should return an action of type ${actionTypes.HERO_FETCHING_SUCCEEDED}.`, () => {
      const actual = actions.heroFetchingSucceeded();
      expect(actual.type).toBe(actionTypes.HERO_FETCHING_SUCCEEDED);
    });
    it('should return the hero as paylad.', () => {
      const hero = { id: 1 };
      const actual = actions.heroFetchingSucceeded(hero);
      expect(actual.payload).toBe(hero);
    });
  });

  describe('#heroesFetchingFailed', () => {
    it(`should return an action of type ${actionTypes.HERO_FETCHING_FAILED}.`, () => {
      const actual = actions.heroFetchingFailed();
      expect(actual.type).toBe(actionTypes.HERO_FETCHING_FAILED);
    });

    it('should return the error as paylad.', () => {
      const error = new Error();
      const actual = actions.heroFetchingFailed(error);
      expect(actual.type).toBe(actionTypes.HERO_FETCHING_FAILED);
      expect(actual.payload).toBe(error);
    });
  });

  describe('#attemptFetchHeroComics', () => {
    it(`should return an action of type ${actionTypes.ATTEMPT_FETCH_HERO_COMICS}.`, () => {
      const actual = actions.attemptFetchHeroComics();
      expect(actual.type).toBe(actionTypes.ATTEMPT_FETCH_HERO_COMICS);
    });
  });

  describe('#attemptFetchHeroSeries', () => {
    it(`should return an action of type ${actionTypes.ATTEMPT_FETCH_HERO_SERIES}.`, () => {
      const actual = actions.attemptFetchHeroSeries();
      expect(actual.type).toBe(actionTypes.ATTEMPT_FETCH_HERO_SERIES);
    });
  });

  describe('#heroSeriesFetchingSucceeded', () => {
    it(`should return an action of type ${actionTypes.HERO_SERIES_FETCHING_SUCCEEDED}.`, () => {
      const actual = actions.heroSeriesFetchingSucceeded();
      expect(actual.type).toBe(actionTypes.HERO_SERIES_FETCHING_SUCCEEDED);
    });
    it('should return the series as paylad.', () => {
      const series = [{ id: 1 }];
      const actual = actions.heroSeriesFetchingSucceeded(series);
      expect(actual.payload).toBe(series);
    });
  });

  describe('#heroEventsFetchingFailed', () => {
    it(`should return an action of type ${actionTypes.HERO_SERIES_FETCHING_FAILED}.`, () => {
      const actual = actions.heroSeriesFetchingFailed();
      expect(actual.type).toBe(actionTypes.HERO_SERIES_FETCHING_FAILED);
    });

    it('should return the error as paylad.', () => {
      const error = new Error();
      const actual = actions.heroSeriesFetchingFailed(error);
      expect(actual.type).toBe(actionTypes.HERO_SERIES_FETCHING_FAILED);
      expect(actual.payload).toBe(error);
    });
  });

  describe('#heroComicsFetchingSucceeded', () => {
    it(`should return an action of type ${actionTypes.HERO_COMICS_FETCHING_SUCCEEDED}.`, () => {
      const actual = actions.heroComicsFetchingSucceeded();
      expect(actual.type).toBe(actionTypes.HERO_COMICS_FETCHING_SUCCEEDED);
    });
    it('should return the comics as paylad.', () => {
      const comics = [{ id: 1 }];
      const actual = actions.heroComicsFetchingSucceeded(comics);
      expect(actual.payload).toBe(comics);
    });
  });

  describe('#heroComicsFetchingFailed', () => {
    it(`should return an action of type ${actionTypes.HERO_COMICS_FETCHING_FAILED}.`, () => {
      const actual = actions.heroComicsFetchingFailed();
      expect(actual.type).toBe(actionTypes.HERO_COMICS_FETCHING_FAILED);
    });

    it('should return the error as paylad.', () => {
      const error = new Error();
      const actual = actions.heroComicsFetchingFailed(error);
      expect(actual.type).toBe(actionTypes.HERO_COMICS_FETCHING_FAILED);
      expect(actual.payload).toBe(error);
    });
  });

  describe('#attemptFetchHeroStories', () => {
    it(`should return an action of type ${actionTypes.ATTEMPT_FETCH_HERO_STORIES}.`, () => {
      const actual = actions.attemptFetchHeroStories();
      expect(actual.type).toBe(actionTypes.ATTEMPT_FETCH_HERO_STORIES);
    });
  });

  describe('#heroStoriesFetchingSucceeded', () => {
    it(`should return an action of type ${actionTypes.HERO_STORIES_FETCHING_SUCCEEDED}.`, () => {
      const actual = actions.heroStoriesFetchingSucceeded();
      expect(actual.type).toBe(actionTypes.HERO_STORIES_FETCHING_SUCCEEDED);
    });
    it('should return the stories as paylad.', () => {
      const stories = [{ id: 1 }];
      const actual = actions.heroStoriesFetchingSucceeded(stories);
      expect(actual.payload).toBe(stories);
    });
  });

  describe('#heroStoriesFetchingFailed', () => {
    it(`should return an action of type ${actionTypes.HERO_STORIES_FETCHING_FAILED}.`, () => {
      const actual = actions.heroStoriesFetchingFailed();
      expect(actual.type).toBe(actionTypes.HERO_STORIES_FETCHING_FAILED);
    });

    it('should return the error as paylad.', () => {
      const error = new Error();
      const actual = actions.heroStoriesFetchingFailed(error);
      expect(actual.type).toBe(actionTypes.HERO_STORIES_FETCHING_FAILED);
      expect(actual.payload).toBe(error);
    });
  });

  describe('#attemptFetchHeroEvents', () => {
    it(`should return an action of type ${actionTypes.ATTEMPT_FETCH_HERO_EVENTS}.`, () => {
      const actual = actions.attemptFetchHeroEvents();
      expect(actual.type).toBe(actionTypes.ATTEMPT_FETCH_HERO_EVENTS);
    });
  });

  describe('#heroEventsFetchingSucceeded', () => {
    it(`should return an action of type ${actionTypes.HERO_EVENTS_FETCHING_SUCCEEDED}.`, () => {
      const actual = actions.heroEventsFetchingSucceeded();
      expect(actual.type).toBe(actionTypes.HERO_EVENTS_FETCHING_SUCCEEDED);
    });
    it('should return the events as paylad.', () => {
      const events = [{ id: 1 }];
      const actual = actions.heroEventsFetchingSucceeded(events);
      expect(actual.payload).toBe(events);
    });
  });

  describe('#heroEventsFetchingFailed', () => {
    it(`should return an action of type ${actionTypes.HERO_EVENTS_FETCHING_FAILED}.`, () => {
      const actual = actions.heroEventsFetchingFailed();
      expect(actual.type).toBe(actionTypes.HERO_EVENTS_FETCHING_FAILED);
    });

    it('should return the error as paylad.', () => {
      const error = new Error();
      const actual = actions.heroEventsFetchingFailed(error);
      expect(actual.type).toBe(actionTypes.HERO_EVENTS_FETCHING_FAILED);
      expect(actual.payload).toBe(error);
    });
  });

  describe('#removeFoundHero', () => {
    it(`should return an action of type ${actionTypes.REMOVE_SELECTED_HERO}.`, () => {
      const actual = actions.removeFoundHero();
      expect(actual.type).toBe(actionTypes.REMOVE_SELECTED_HERO);
    });
  });
});

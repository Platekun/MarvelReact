import api from '../api';
import * as actionTypes from '../actionTypes';
import { PUBLIC_MARVEL_API_KEY } from '../constants';
import { buildHash, buildTimestamp } from './utils';

const buildHeroResource = ({
  heroId, resource, timeStamp, hash,
}) => `/v1/public/characters/${heroId}/${resource}?ts=${timeStamp}&apikey=${PUBLIC_MARVEL_API_KEY}&hash=${hash}`;

export const attemptFetchHeroes = () => ({
  type: actionTypes.ATTEMPT_FETCH_HEROES,
});

export const heroesFetchingSucceeded = heroes => ({
  type: actionTypes.HEROES_FETCHING_SUCCEEDED,
  payload: heroes,
});

export const heroesFetchingFailed = err => ({
  type: actionTypes.HEROES_FETCHING_FAILED,
  payload: err,
});

export const prefetchHeroes = letter => (dispatch) => {
  dispatch(attemptFetchHeroes());

  const url = letter
    ? `/v1/public/characters?nameStartsWith=${letter}&apikey=${PUBLIC_MARVEL_API_KEY}`
    : `/v1/public/characters?apikey=${PUBLIC_MARVEL_API_KEY}`;

  return api.get(url)
    .then(response => response.data)
    .then(heroes => dispatch(heroesFetchingSucceeded(heroes.data.results)));
};

export const typeHeroName = input => ({
  type: actionTypes.HERO_NAME_TYPED,
  payload: input,
});

export const cleanHeroName = () => ({
  type: actionTypes.HERO_NAME_REMOVED,
});

export const selectHeroSuggestion = selection => ({
  type: actionTypes.HERO_SUGGESTION_SELECTED,
  payload: selection,
});

export const selectHero = hero => ({
  type: actionTypes.HERO_SELECTED,
  payload: hero,
});

export const toggleNavigationDrawer = () => ({
  type: actionTypes.NAVIGATION_DRAWER_WAS_TOGGLED,
});

export const attemptFetchHero = () => ({
  type: actionTypes.ATTEMPT_FETCH_HERO,
});

export const heroFetchingSucceeded = hero => ({
  type: actionTypes.HERO_FETCHING_SUCCEEDED,
  payload: hero,
});

export const heroFetchingFailed = err => ({
  type: actionTypes.HERO_FETCHING_FAILED,
  payload: err,
});

export const attemptFetchHeroComics = () => ({
  type: actionTypes.ATTEMPT_FETCH_HERO_COMICS,
});

export const heroComicsFetchingSucceeded = comics => ({
  type: actionTypes.HERO_COMICS_FETCHING_SUCCEEDED,
  payload: comics,
});

export const heroComicsFetchingFailed = err => ({
  type: actionTypes.HERO_COMICS_FETCHING_FAILED,
  payload: err,
});

export const fetchHero = heroId => (dispatch) => {
  dispatch(attemptFetchHero());

  return api.get(`/v1/public/characters/${heroId}?apikey=${PUBLIC_MARVEL_API_KEY}`)
    .then(response => response.data)
    .then(comics => dispatch(heroFetchingSucceeded(comics.data.results[0])));
};

export const fetchHeroComics = heroId => (dispatch) => {
  dispatch(attemptFetchHeroComics());

  const resource = 'comics';
  const timeStamp = buildTimestamp();
  const hash = buildHash(timeStamp);

  const url = buildHeroResource({
    heroId, resource, timeStamp, hash,
  });

  return api.get(url)
    .then(response => response.data)
    .then(comics => dispatch(heroComicsFetchingSucceeded(comics.data.results)));
};

export const attemptFetchHeroSeries = () => ({
  type: actionTypes.ATTEMPT_FETCH_HERO_SERIES,
});

export const heroSeriesFetchingSucceeded = series => ({
  type: actionTypes.HERO_SERIES_FETCHING_SUCCEEDED,
  payload: series,
});

export const heroSeriesFetchingFailed = err => ({
  type: actionTypes.HERO_SERIES_FETCHING_FAILED,
  payload: err,
});

export const fetchHeroSeries = heroId => (dispatch) => {
  dispatch(attemptFetchHeroSeries());

  const resource = 'series';
  const timeStamp = buildTimestamp();
  const hash = buildHash(timeStamp);

  const url = buildHeroResource({
    heroId, resource, timeStamp, hash,
  });

  return api.get(url)
    .then(response => response.data)
    .then(series => dispatch(heroSeriesFetchingSucceeded(series.data.results)));
};

export const attemptFetchHeroStories = () => ({
  type: actionTypes.ATTEMPT_FETCH_HERO_STORIES,
});

export const heroStoriesFetchingSucceeded = stories => ({
  type: actionTypes.HERO_STORIES_FETCHING_SUCCEEDED,
  payload: stories,
});

export const heroStoriesFetchingFailed = err => ({
  type: actionTypes.HERO_STORIES_FETCHING_FAILED,
  payload: err,
});

export const fetchHeroStories = heroId => (dispatch) => {
  dispatch(attemptFetchHeroStories());

  const resource = 'stories';
  const timeStamp = buildTimestamp();
  const hash = buildHash(timeStamp);

  const url = buildHeroResource({
    heroId, resource, timeStamp, hash,
  });

  return api.get(url)
    .then(response => response.data)
    .then(stories => dispatch(heroStoriesFetchingSucceeded(stories.data.results)));
};

export const attemptFetchHeroEvents = () => ({
  type: actionTypes.ATTEMPT_FETCH_HERO_EVENTS,
});

export const heroEventsFetchingSucceeded = events => ({
  type: actionTypes.HERO_EVENTS_FETCHING_SUCCEEDED,
  payload: events,
});

export const heroEventsFetchingFailed = err => ({
  type: actionTypes.HERO_EVENTS_FETCHING_FAILED,
  payload: err,
});

export const fetchHeroEvents = heroId => (dispatch) => {
  dispatch(attemptFetchHeroEvents());

  const resource = 'events';
  const timeStamp = buildTimestamp();
  const hash = buildHash(timeStamp);

  const url = buildHeroResource({
    heroId, resource, timeStamp, hash,
  });

  return api.get(url)
    .then(response => response.data)
    .then(events => dispatch(heroEventsFetchingSucceeded(events.data.results)));
};

export const removeFoundHero = () => ({
  type: actionTypes.REMOVE_SELECTED_HERO,
});

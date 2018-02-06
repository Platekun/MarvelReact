import { combineReducers } from 'redux';

import core, { NAME as CORE } from './core';
import heroSearch, { NAME as HERO_SEARCH } from './hero-search';
import heroDetail, { NAME as HERO_DETAIL } from './hero-detail';

export default combineReducers({
  [CORE]: core,
  [HERO_SEARCH]: heroSearch,
  [HERO_DETAIL]: heroDetail,
});

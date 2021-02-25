import { combineReducers } from 'redux';

import pokemonReducer from './pokemon';
import booleanReducer from './boolean';
import typesReducer from './types';
import resistanceReducer from './teamResistances';
import userReducer from './user';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  boolean: booleanReducer,
  types: typesReducer,
  resistances: resistanceReducer,
  user: userReducer,
  favorites: favoritesReducer,
});

export default rootReducer;

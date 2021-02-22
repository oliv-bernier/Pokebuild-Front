import { combineReducers } from 'redux';

import pokemonReducer from './pokemon';
import booleanReducer from './boolean';
import typesReducer from './types';
import resistanceReducer from './teamResistances';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  boolean: booleanReducer,
  types: typesReducer,
  resistances: resistanceReducer,
});

export default rootReducer;

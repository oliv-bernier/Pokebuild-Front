import { combineReducers } from 'redux';

import pokemonReducer from './pokemon';
import booleanReducer from './boolean';
import typesReducer from './types';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  boolean: booleanReducer,
  types: typesReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';

import pokemonReducer from './pokemon';
import booleanReducer from './boolean';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  boolean: booleanReducer,
});

export default rootReducer;

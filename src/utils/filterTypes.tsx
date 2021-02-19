import { Types } from '../type/types';

import { addFilterTypes, deleteFilterTypes } from '../actions/pokemon';
import { switchFilter } from '../actions/types';
import store from '../store';

/**
 * This function dispatch the action which change the type state and
 * add or remove a Type Filter
 * @param {Types} bool - The state where all the types boolean are stored
 * @param {string} name - The name of the current type
 */
const filterTypes = (bool: Types, name: string): void => {
  if (!bool[name]) {
    store.dispatch(addFilterTypes(name));
  }
  else {
    store.dispatch(deleteFilterTypes(name));
  }
  store.dispatch(switchFilter(!bool[name], name));
};

export default filterTypes;

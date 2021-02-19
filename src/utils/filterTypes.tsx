import { Types } from '../type/types';

import { addFilterTypes, deleteFilterTypes } from '../actions/pokemon';
import { switchFilter } from '../actions/types';
import store from '../store';

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

import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import ajaxPokemon from '../middlewares/ajaxPokemon';
import ajaxUser from '../middlewares/ajaxUser';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(
    ajaxPokemon,
    ajaxUser,
  ),
));

export default store;

import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import ajax from '../middlewares/ajax';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(
    ajax,
  ),
));

export default store;

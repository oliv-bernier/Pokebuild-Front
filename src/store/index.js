import { createStore } from 'redux';

import reducer from '../reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = composeEnhancers(
//   applyMiddleware(
//     ajax,
//   ),
// );

const store = createStore(reducer);

export default store;

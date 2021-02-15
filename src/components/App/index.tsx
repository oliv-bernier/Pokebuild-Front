import React from 'react';
import { Route, Switch } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import { AppProps } from '../../type/index';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Drawer from '../../containers/Drawer';
import About from '../About';
import NotFound from '../NotFound';
// @ts-ignore
import Pokestat from '../../containers/Pokestat';

import './style.scss';

const App = ({ isDetails }: AppProps) => (
  <div className="app">
    <Header />
    <div className="container">
      <Switch>
        <Route path="/" exact>
          <Home />
          <Drawer />
          {isDetails && <Pokestat />}
        </Route>
        <Route path="/test" exact>
          <Pokestat />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;

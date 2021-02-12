import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Drawer from '../Drawer/index.tsx';
import About from '../About';
import NotFound from '../NotFound';
import Pokestat from '../Pokestat';

import './style.scss';

const App = () => (
  <div className="app">
    <Header />
    <div className="container">
      <Switch>
        <Route path="/" exact>
          <Home />
          <Drawer />
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

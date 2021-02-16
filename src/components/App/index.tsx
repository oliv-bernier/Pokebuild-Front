import React from 'react';
import { Route, Switch } from 'react-router-dom';

// @ts-ignore
import { AppProps } from '../../type/index.tsx';
import Header from '../Header';
import Footer from '../Footer';
// @ts-ignore
import Home from '../Home/index.tsx';
import Drawer from '../../containers/Drawer';
import About from '../About';
import NotFound from '../NotFound';

import Pokestat from '../../containers/Pokestat';

import './style.scss';

const App = ({ isDetails }: AppProps) => (
  <div className="app">
    <Header />
    <div className="container">
      <Switch>
        <Route path="/" exact>
          <Home isDetails={isDetails} />
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

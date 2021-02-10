import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Drawer from '../Drawer';
import About from '../About';



import './style.scss';


const App = () => (
  <div className="app">
    <Header />
    <div className="container">
      <Route path="/" exact>
        <Home />
        {/* <Drawer /> */}
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
    </div>
    <Footer />
  </div>
);

export default App;

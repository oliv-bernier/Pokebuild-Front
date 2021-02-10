import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';
import Drawer from '../Drawer';


import './style.scss';


const App = () => (
  <div className="app">
    <Header />
    <div className="container">
      <Home />
      <Drawer />
    </div>
    <Footer />
  </div>
);

export default App;

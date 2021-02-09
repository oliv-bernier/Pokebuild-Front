import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../Home';


import './style.scss';


const App = () => (
  <div className="app">
    <Header />
    <div className="container">
      <Home />
      <div>Drawer</div>
    </div>
    <Footer />
  </div>
);

export default App;

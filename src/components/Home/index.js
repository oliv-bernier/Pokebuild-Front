import React from 'react';

// import Tab from '../Tab';
import Drop from '../Drop';
import Pokestat from '../Pokestat';

import './style.scss';

const Home = () => (
  <div className="home">
    <Drop />
    <Pokestat />
    {/* <Tab /> */}
  </div>
);

export default Home;

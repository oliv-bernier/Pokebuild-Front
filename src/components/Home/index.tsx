import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
// @ts-ignore
import { HomeProps } from '../../type/index.tsx';

// import Tab from '../Tab';
import Drop from '../Drop';

import './style.scss';

const Home = ({ isDetails }: HomeProps) => (
  <div className={classNames('home', { 'home-blur': isDetails })}>
    <Drop />
    {/* <Tab /> */}
  </div>
);

Home.propTypes = {
  isDetails: PropTypes.bool.isRequired,
};

export default Home;

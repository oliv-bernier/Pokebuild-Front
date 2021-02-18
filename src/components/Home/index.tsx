import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import Tab from '../../containers/Tab';
import Advices from '../Advices';
import Drop from '../../containers/Drop';

import './style.scss';

const Home = ({ isDetails }: {isDetails: boolean}) => (
  <div className={classNames('home', { 'home-blur': isDetails })}>
    <Drop />
    <Advices />
    <Tab />
  </div>
);

Home.propTypes = {
  isDetails: PropTypes.bool.isRequired,
};

export default Home;

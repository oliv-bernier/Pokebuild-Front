import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import Tab from '../../containers/Tab';
import Advices from '../Advices';
import Drop from '../../containers/Drop/index';
import Suggestion from '../../containers/Suggestion/index';

import './style.scss';

const Home = ({ isDetails, isSuggestion }: {isDetails: boolean, isSuggestion: boolean, }) => (
  <div className={classNames('home', { 'home-blur': isDetails })}>
    <Drop />
    {isSuggestion && <Suggestion />}
    <Advices />
    <Tab />
  </div>
);

Home.propTypes = {
  isDetails: PropTypes.bool.isRequired,
  isSuggestion: PropTypes.bool.isRequired,
};

export default Home;

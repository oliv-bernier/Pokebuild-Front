import React from 'react';

import PropTypes from 'prop-types';

import './style.scss';

const TechnoItem = ({ name, image }) => (
  <li className="techno-list--item">
    <img className="techno-list--item_image" src={image} alt={`logo ${name}`} />
    <p className="techno-list--item_name">{name}</p>
  </li>
);

TechnoItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TechnoItem;

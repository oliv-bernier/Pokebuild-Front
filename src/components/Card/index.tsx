import React from 'react';

import PropTypes from 'prop-types';

import './style.scss';

const Card = ({
  name,
  pseudo,
  dev,
  role,
  image,
}: {
  name: string,
  pseudo: string,
  dev: string,
  role: string,
  image: string,
}) => (
  <div className="card">
    <img className="card-image" src={image} alt="" />
    <div className="card-details">
      <p>Nom: <span className="card-details--info">{name}</span></p>
      <p>Pseudo: <span className="card-details--info">{pseudo}</span></p>
      <p>Developpement: <span className="card-details--info">{dev}</span></p>
      <p>Rôle: <span className="card-details--info">{role}</span></p>
    </div>
  </div>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  dev: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;

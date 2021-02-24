import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const Favorites = ({
  isDrawer,
  toggleFav,
}: {
  isDrawer: Boolean,
  toggleFav: Function,
}) => {
  const [isAnimation, setIsAnimation] = useState(false);

  const handleClose = () => {
    setIsAnimation(true);
    setTimeout(() => {
      toggleFav();
    }, 250);
  };

  return (
    <div className={classNames('favorites', { 'favorites_drawer-open': isDrawer }, { 'favorites--animation': isAnimation })}>
      <div className="favorites-content">
        <button type="button" className="favorites-content-close" onClick={handleClose}>X</button>
        <h1 className="favorites-content-title">Équipes favorites</h1>
      </div>
    </div>
  );
};

Favorites.propTypes = {
  isDrawer: PropTypes.bool.isRequired,
};

export default Favorites;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Advertise = ({
  toggleAdvertise,
  isAdvertise,
  advertise,
}: {
  toggleAdvertise: Function,
  isAdvertise: boolean,
  advertise: string,
}) => (
  <div className={classNames('advertise', { 'advertise-display': isAdvertise })}>
    <button
      type="button"
      className="advertise-close"
      onClick={() => {
        toggleAdvertise();
      }}
    >
      X
    </button>
    <h3 className="advertise-text">{advertise}</h3>
    <div className="advertise-barre">
      <div className="advertise-barre_fill" />
    </div>
  </div>
);

Advertise.propTypes = {
  toggleAdvertise: PropTypes.func.isRequired,
  isAdvertise: PropTypes.bool.isRequired,
  advertise: PropTypes.string.isRequired,
};

export default Advertise;

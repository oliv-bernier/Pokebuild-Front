import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Advertise = ({
  toggleAdvertise,
  isAdvertise,
}: {
  toggleAdvertise: Function,
  isAdvertise: boolean,
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
    <h3 className="advertise-text">Ton compte a été créé !</h3>
    <h3 className="advertise-text">
      Tu vas recevoir un mail d'ici quelques minutes dans lequel
      tu trouveras un lien pour activer ton compte.
    </h3>
    <div className="advertise-barre">
      <div className="advertise-barre_fill" />
    </div>
  </div>
);

Advertise.propTypes = {
  toggleAdvertise: PropTypes.func.isRequired,
  isAdvertise: PropTypes.bool.isRequired,
};

export default Advertise;

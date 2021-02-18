import React from 'react';
import PropTypes from 'prop-types';

import translation from '../../utils/translation';

const StatDetails = ({
  statName,
  statValue,
  width,
}: {
  statName: string,
  statValue: number,
  width: number,
}) => (
  <section key={statName} className="pokestat-details-unique">
    <p className="pokestat-details-unique--name">{`${translation(statName)}: `}</p>
    <div className="pokestat-details--right">
      <p className="pokestat-details-unique--value">{statValue}</p>
      <div className="pokestat-details-unique--barre-container">
        <div
          className="pokestat-details-unique--barre__progress"
          style={{
            width: `${width}%`,
          }}
        />
      </div>
    </div>
  </section>
);

StatDetails.propTypes = {
  statName: PropTypes.string.isRequired,
  statValue: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default StatDetails;

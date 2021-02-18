import React from 'react';
import PropTypes from 'prop-types';

const TrRows = ({
  pokemonSelected,
  index,
}) => (
  <>
    {pokemonSelected.map((resist) => (
      <td key={resist.apiResistances[index].name} className="tab-head--def">
        {resist.apiResistances[index].damage_multiplier}
      </td>
    ))}
  </>
);

TrRows.propTypes = {
  pokemonSelected: PropTypes.arrayOf(PropTypes.shape({
    apiResistances: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      damage_multiplier: PropTypes.number.isRequired,
      damage_relation: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
  index: PropTypes.number.isRequired,
};

export default TrRows;

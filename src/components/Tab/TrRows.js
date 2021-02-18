import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TrRows = ({
  resist,
  index,
}) => {
  const [isTypeOver, setTypeOver] = useState(false);

  const mouseInOut = () => {
    setTypeOver(!isTypeOver);
  };

  return (
    <td
      key={resist.apiResistances[index].name}
      className={`tab-head--def tab-head--def_${resist.apiResistances[index].damage_relation}`}
      onMouseOver={mouseInOut}
      onMouseOut={mouseInOut}
    >
      {resist.apiResistances[index].damage_multiplier}
      {isTypeOver && <span className="tab-head--def_name">{resist.apiResistances[index].damage_relation}</span>}
    </td>
  );
};

TrRows.propTypes = {
  resist: PropTypes.arrayOf(PropTypes.shape({
    apiResistances: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      damage_multiplier: PropTypes.number.isRequired,
      damage_relation: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
  index: PropTypes.number.isRequired,
};

export default TrRows;

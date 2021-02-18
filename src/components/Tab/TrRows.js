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
  resist: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default TrRows;

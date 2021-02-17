import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TdHead = ({ image, name }) => {
  const [isTypeOver, setTypeOver] = useState(false);

  const handleDisplayType = () => {
    setTypeOver(true);
  };

  const handleOut = () => {
    setTypeOver(false);
  };

  return (
    <td className="tab-head--type" onMouseOver={handleDisplayType} onMouseOut={handleOut}>
      <img className="tab-head--type_image" src={image} alt={name} />
      {isTypeOver && <span className="tab-head--type_name">{name}</span>}
    </td>
  );
};

TdHead.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TdHead;

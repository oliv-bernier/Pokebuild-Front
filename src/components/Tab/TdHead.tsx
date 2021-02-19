import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TdHead = (
  {
    image,
    name,
  }: {
    image: string,
    name: string,
  },
) => {
  const [isTypeOver, setTypeOver] = useState(false);

  const mouseInOut = () => {
    setTypeOver(!isTypeOver);
  };

  return (
    <td className="tab-head--type" onMouseOver={mouseInOut} onMouseOut={mouseInOut}>
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

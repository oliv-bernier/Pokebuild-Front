import React from 'react';
import PropTypes from 'prop-types';

import { Types } from '../../type/types';
import filterTypes from '../../utils/filterTypes';

const TypeDetail = ({
  name,
  image,
  close,
  bool,
}: {
  name: string,
  image: string,
  close: Function,
  bool: Types,
}) => {
  const handleType = (): void => {
    filterTypes(bool, name);
    close();
  };
  return (
    <img
      key={name}
      className="pokestat-container--image_type"
      src={image}
      alt={`${name}.png`}
      onClick={handleType}
    />
  );
};

TypeDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  bool: PropTypes.object.isRequired,
};

export default TypeDetail;

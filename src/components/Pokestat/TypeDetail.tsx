import React from 'react';
import PropTypes from 'prop-types';

import { Types } from '../../type/types';

const TypeDetail = ({
  name,
  image,
  close,
  addTypesFilter,
  deleteTypesFilter,
  switchFilter,
  bool,
}: {name: string,
  image: string,
  close: Function,
  addTypesFilter: Function,
  deleteTypesFilter: Function,
  switchFilter: Function,
  bool: Types,
}) => {
  const handleType = (): void => {
    if (!bool[name]) {
      addTypesFilter(name);
    }
    else {
      deleteTypesFilter(name);
    }
    switchFilter(!bool[name], name);
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
  addTypesFilter: PropTypes.func.isRequired,
  deleteTypesFilter: PropTypes.func.isRequired,
  switchFilter: PropTypes.func.isRequired,
  bool: PropTypes.object.isRequired,
};

export default TypeDetail;

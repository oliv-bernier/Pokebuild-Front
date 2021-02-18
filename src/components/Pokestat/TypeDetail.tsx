import React from 'react';
import PropTypes from 'prop-types';

const TypeDetail = ({
  name,
  image,
  close,
  add,
}: {name: string,
  image: string,
  close: Function,
  add: Function,
}) => {
  const handleType = (): void => {
    add(name);
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
  add: PropTypes.func.isRequired,
};

export default TypeDetail;

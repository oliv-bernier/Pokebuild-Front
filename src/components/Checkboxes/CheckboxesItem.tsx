import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CheckboxesItem = ({
  name,
  image,
  addTypesFilter,
  deleteTypesFilter,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSelect = () => {
    if (isChecked) {
      addTypesFilter(name);
    }
    else {
      deleteTypesFilter(name);
    }
    setIsChecked(!isChecked);
  };

  return (
    <img
      key={name}
      src={image}
      className={classNames(`checkboxes-image-${name}`, { 'checkboxes-image--selected': isChecked })}
      alt={name}
      onClick={handleSelect}
    />
  );
};

CheckboxesItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  addTypesFilter: PropTypes.func.isRequired,
  deleteTypesFilter: PropTypes.func.isRequired,
};

export default CheckboxesItem;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Types } from '../../type/types';

const CheckboxesItem = ({
  name,
  image,
  addTypesFilter,
  deleteTypesFilter,
  bool,
}: {
  name: string,
  image: string,
  addTypesFilter: Function,
  deleteTypesFilter: Function,
  bool: Array<Types>,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSelect = () => {
    if (!isChecked) {
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
      className={classNames(`checkboxes-image ${name}`, { 'checkboxes-image--selected': isChecked })}
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
  bool: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default CheckboxesItem;

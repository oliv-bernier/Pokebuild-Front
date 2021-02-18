import React, { useState } from 'react';
import PropTypes, { objectOf } from 'prop-types';
import classNames from 'classnames';

import { Types } from '../../type/types';

const CheckboxesItem = ({
  name,
  image,
  addTypesFilter,
  deleteTypesFilter,
  bool,
  switchFilter,
}: {
  name: string,
  image: string,
  addTypesFilter: Function,
  deleteTypesFilter: Function,
  bool: Types,
  switchFilter: Function,
}) => {
  const handleSelect = (): void => {
    if (!bool[name]) {
      addTypesFilter(name);
    }
    else {
      deleteTypesFilter(name);
    }
    switchFilter(!bool[name], name);
  };

  return (
    <img
      key={name}
      src={image}
      className={classNames(`checkboxes-image ${name}`, { 'checkboxes-image--selected': bool[name] })}
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
  bool: PropTypes.object.isRequired,
  switchFilter: PropTypes.func.isRequired,
};

export default CheckboxesItem;

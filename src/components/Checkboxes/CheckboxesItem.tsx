import React from 'react';
import PropTypes, { objectOf } from 'prop-types';
import classNames from 'classnames';

import { Types } from '../../type/types';
import filterTypes from '../../utils/filterTypes';

const CheckboxesItem = ({
  name,
  image,
  bool,
}: {
  name: string,
  image: string,
  bool: Types,
}) => {
  const handleSelect = (): void => {
    filterTypes(bool, name);
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
  bool: PropTypes.object.isRequired,
};

export default CheckboxesItem;

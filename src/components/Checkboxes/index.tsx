/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import CheckboxesItem from './CheckboxesItem';

import { Types } from '../../type/types';

import './style.scss';

const Checkboxes = ({
  types,
  addTypesFilter,
  deleteTypesFilter,
  typesBool,
}: {
  types: Array<{
    name: string,
    image: string,
  }>,
  addTypesFilter: Function,
  deleteTypesFilter: Function,
  typesBool: Array<Types>,
}) => (
  <div className="checkboxes">
    {types.map((currentType:{name: string, image: string}) => (
      <CheckboxesItem
        key={currentType.name}
        addTypesFilter={addTypesFilter}
        deleteTypesFilter={deleteTypesFilter}
        bool={typesBool}
        {...currentType}
      />
    ))}
  </div>
);

Checkboxes.propTypes = {
  types: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  addTypesFilter: PropTypes.func.isRequired,
  deleteTypesFilter: PropTypes.func.isRequired,
  typesBool: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default Checkboxes;

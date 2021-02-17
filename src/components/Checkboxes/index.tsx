/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import CheckboxesItem from './CheckboxesItem';
// @ts-ignore
import { ApiTypes } from '../../type/index.tsx';
import './style.scss';

const Checkboxes = ({ types, addTypesFilter, deleteTypesFilter }: {
  types: Array<string>,
  addTypesFilter: Function,
  deleteTypesFilter: Function,
}) => (
  <div className="checkboxes">
    {types.map((currentType: ApiTypes) => (
      <CheckboxesItem
        key={currentType.name}
        addTypesFilter={addTypesFilter}
        deleteTypesFilter={deleteTypesFilter}
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
};

export default Checkboxes;

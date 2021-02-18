/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import CheckboxesItem from './CheckboxesItem';

import { Types } from '../../type/types';

import './style.scss';

const Checkboxes = ({
  types,
  typesBool,
}: {
  types: Array<{
    name: string,
    image: string,
  }>,
  typesBool: Types,
}) => (
  <div className="checkboxes">
    {types.map((currentType:{name: string, image: string}) => (
      <CheckboxesItem
        key={currentType.name}
        // @ts-ignore
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
  typesBool: PropTypes.object.isRequired,
};

export default Checkboxes;

import React from 'react';
import PropTypes from 'prop-types';

const Options = ({ index, text }: {index: number, text: string}) => (
  <option value={index}>{index}{text}</option>
);

Options.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Options;

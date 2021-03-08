import React from 'react';
import PropTypes from 'prop-types';

import Options from './Options';
import './style.scss';

const Generation = ({
  setGenValue,
}: {
  setGenValue: Function,
}) => {
  const handleChange = (evt: any): void => {
    setGenValue(Number(evt.target.value));
  };
  let text: string;
  const options = [];
  for (let index = 1; index <= 8; index++) {
    if (index === 1) {
      text = 'ère';
      options.push(<Options
        key={index}
        index={index}
        text={text}
      />);
    }
    else {
      text = 'ème';
      options.push(<Options
        key={index}
        index={index}
        text={text}
      />);
    }
  }
  return (
    <select className="gen" onChange={handleChange}>
      <option value={0}>Gen.</option>
      {options}
    </select>
  );
};

Generation.propTypes = {
  setGenValue: PropTypes.func.isRequired,
};

export default Generation;

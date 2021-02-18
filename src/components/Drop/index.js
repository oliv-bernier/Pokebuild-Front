import React from 'react';

import PropTypes from 'prop-types';

import DropBox from '../../containers/Drop/DropBox';

import './style.scss';

const Drop = () => {
  const boxes = [];
  for (let index = 0; index < 6; index++) {
    boxes.push(<DropBox
      key={index}
      index={index}
    />);
  }
  return (
    <div className="home-selection">
      <div className="home-selection-drops">
        {boxes}
      </div>
    </div>
  );
};

export default Drop;

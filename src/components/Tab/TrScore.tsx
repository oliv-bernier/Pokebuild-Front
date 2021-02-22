import React from 'react';
import PropTypes from 'prop-types';

const TrScore = (
  {
    score,
  }: {
    score: { message: string, name: string, result: string },
  },
) => (
  <td className={`tab-head--def tab-head--def_${score.result}`}>{score.result}</td>
);

TrScore.protoTypes = {
  score: PropTypes.string.isRequired,
};

export default TrScore;

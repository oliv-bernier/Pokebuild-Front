import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Tab = (
  { types },
) => (
  (
    <div className="tab-container">
      <p className="tab-title"> Forces et faiblesses de votre séléction</p>
      <table className="tab">
        <thead className="tab-head">
          <tr className="tab-head--tr">
            <td className="tab-head--type">-</td>
            {types.map((currentType) => (
              <td key={currentType.name} className="tab-head--type">
                <img className="tab-head--type_image" src={currentType.image} alt={currentType.name} />
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tab-head--sprites">P1</td>
            <td className="tab-head--sprites">P2</td>
            <td className="tab-head--sprites">P3</td>
            <td className="tab-head--sprites">P4</td>
            <td className="tab-head--sprites">P5</td>
            <td className="tab-head--sprites">P6</td>
            <td className="tab-head--sprites">S</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
          <tr>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Test</td>
            <td className="tab-head--def">Score</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
);

Tab.propTypes = {
  types: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Tab;

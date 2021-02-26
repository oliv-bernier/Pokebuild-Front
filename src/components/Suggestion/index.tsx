import React from 'react';

import PropTypes from 'prop-types';

import './style.scss';

const Suggestion = ({
  toggleSuggestion,
}: {
  toggleSuggestion: Function,
}) => (
  <div className="suggestion">
    <div className="suggestion-content">
      <button type="button" className="suggestion-content-close" onClick={() => toggleSuggestion()}>X</button>
      Coucou
    </div>
  </div>
);

Suggestion.propTypes = {
  toggleSuggestion: PropTypes.func.isRequired,
};

export default Suggestion;

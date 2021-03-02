import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Advices = ({
  pokemonSelected,
  summary,
}: {
  pokemonSelected: Array<any>,
  summary: {
    name: string,
    message: string,
    result: string,
    summary: string,
    class: string,
  },
}) => {
  if (pokemonSelected.length > 5) {
    return (
      <div className="advices">
        <div className="advices-style">
          <p className={`advices-style-${summary.class}`}>
            {summary.summary}
          </p>
        </div>
      </div>
    );
  } if (pokemonSelected.length > 4) {
    return (
      <div className="advices">
        <div className="advices-style">
          <p className="advice-style-message">
            Encore 1 pokémon pour finir l'équipe :)
          </p>
        </div>
      </div>
    );
  } return (
    <div className="advices">
      <div className="advices-style">
        <p className="advice-style-message">
          Coucou, je suis un algorythme qui va te conseiller sur la composition de ton équipe.
          Composes-la avec le tiroir en cliquant sur la pokeball !!
        </p>
      </div>
    </div>
  );
};

Advices.propTypes = {
  pokemonSelected: PropTypes.array.isRequired,
  summary: PropTypes.object.isRequired,
};

export default Advices;

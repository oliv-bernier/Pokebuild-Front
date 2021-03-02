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
      <div className={`advices ${summary.class}`}>
        <div className="advices-style">
          {summary.summary}
        </div>
      </div>
    );
  } if (pokemonSelected.length > 4) {
    return (
      <div className="advices">
        <div className="advices-style">
          Encore 1 pokémon pour finir l'équipe :)
        </div>
      </div>
    );
  } return (
    <div className="advices">
      <div className="advices-style">
        Coucou, je suis un algorythme qui va te conseiller sur la composition de ton équipe.
        Composes-la avec le tiroir en cliquant sur la pokeball !!
      </div>
    </div>
  );
};

Advices.propTypes = {
  pokemonSelected: PropTypes.array.isRequired,
  summary: PropTypes.object.isRequired,
};

export default Advices;

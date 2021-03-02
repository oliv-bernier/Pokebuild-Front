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
          Hello,
          je suis un algorythme qui va vous conseiller sur la composition d'une équipe Pokémon.
          <br />
          Composez-la avec le pokédex en cliquant sur la pokéball !!
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

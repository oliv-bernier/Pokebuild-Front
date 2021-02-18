const initialState = {
  Normal: false,
  Combat: false,
  Vol: false,
  Poison: false,
  Sol: false,
  Roche: false,
  Insecte: false,
  Spectre: false,
  Acier: false,
  Feu: false,
  Eau: false,
  Plante: false,
  Électrik: false,
  Psy: false,
  Glace: false,
  Dragon: false,
  Ténèbres: false,
  Fée: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;

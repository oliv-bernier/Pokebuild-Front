/* eslint-disable no-console */
/* eslint-disable default-case */
import axios from 'axios';

import {
  GET_POKEMON,
  memorizePokemon,
  GET_TYPES,
  memorizeTypes,
  SEND_TEAM,
  GENERATE_TEAM,
  memorizeRandomTeam,
  memorizeRandomTeamIds,
  SUGGEST_POKEMON,
  memorizeSuggest,
} from '../actions/pokemon';

import {
  memorizeResitances,
} from '../actions/teamResistances';

const ajaxPokemon = (store) => (next) => (action) => {
  axios.defaults.baseURL = 'http://ec2-54-209-63-59.compute-1.amazonaws.com/api/v1/';
  switch (action.type) {
    case GET_POKEMON:
      axios.get('pokemon')
        .then((response) => {
          store.dispatch(memorizePokemon(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    case GET_TYPES:
      axios.get('types')
        .then((response) => {
          store.dispatch(memorizeTypes(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    case SEND_TEAM: {
      const { team } = action;
      const jsoned = JSON.stringify(team);
      axios.post('team/defensive-coverage', jsoned)
        .then((response) => {
          response.data.map((currentData) => (
            store.dispatch(memorizeResitances(currentData, currentData.name))
          ));
        })
        .catch((error) => {
          console.error(error);
        });
    }
      break;
    case GENERATE_TEAM:
      axios.get('random/team')
        .then((response) => {
          const randomIds = response.data.map((each) => (each.id));
          store.dispatch(memorizeRandomTeam(response.data));
          store.dispatch(memorizeRandomTeamIds(randomIds));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    case SUGGEST_POKEMON: {
      const {
        pokemonSelectedIds,
      } = store.getState().pokemon;
      const jsoned = JSON.stringify(pokemonSelectedIds);
      console.log(jsoned);
      axios.post('team/suggestion', jsoned)
        .then((response) => {
          console.log(response);
          store.dispatch(memorizeSuggest(response.data));
        })
        .catch((error) => {
          console.error(error);
        });
    }
      break;
  }
  next(action);
};

export default ajaxPokemon;

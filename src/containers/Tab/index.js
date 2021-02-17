import { connect } from 'react-redux';
import Tab from '../../components/Tab/index';

const mapStateToProp = (state) => {
  const { resistances } = state.pokemon.pokemonSelected;
  return ({
    types: state.pokemon.types,
    resistances,
  });
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProp, mapDispatchToProps)(Tab);

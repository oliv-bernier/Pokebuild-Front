import { connect } from 'react-redux';
import Advices from '../../components/Advices';

const mapStateToProp = (state: any) => ({
  pokemonSelected: state.pokemon.pokemonSelected,
  summary: state.resistances.Normal,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProp, mapDispatchToProps)(Advices);

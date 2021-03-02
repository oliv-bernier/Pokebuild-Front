import { connect } from 'react-redux';
import Advices from '../../components/Advices';

const mapStateToProp = (state: any) => ({
  advice: state.resistances.summary,
  pokemonSelected: state.pokemon.pokemonSelected,
  teamResistance: state.resistances.Normal,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProp, mapDispatchToProps)(Advices);

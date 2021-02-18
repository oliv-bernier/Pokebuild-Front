import { connect } from 'react-redux';
import Drop from '../../components/Drop/index';

const mapStateToProps = (state) => ({
  pokemonSelected: state.pokemon.pokemonSelected,
});

const mapDispatchToProps = (dispacth) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Drop);

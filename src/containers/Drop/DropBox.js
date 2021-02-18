import { connect } from 'react-redux';
import DropBox from '../../components/Drop/DropBox';

const mapStateToProps = (state) => ({
  pokemonSelected: state.pokemon.pokemonSelected,
});

const mapDispatchToProps = (dispacth) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DropBox);

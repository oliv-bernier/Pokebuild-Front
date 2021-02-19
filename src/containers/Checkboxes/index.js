import { connect } from 'react-redux';
import Checkboxes from '../../components/Checkboxes/index.tsx';

const mapStateToProps = (state) => ({
  types: state.pokemon.types,
  typesBool: state.types,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Checkboxes);

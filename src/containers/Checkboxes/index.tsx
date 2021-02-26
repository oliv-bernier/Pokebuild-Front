import { connect } from 'react-redux';
import Checkboxes from '../../components/Checkboxes';

const mapStateToProps = (state: any) => ({
  types: state.pokemon.types,
  typesBool: state.types,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Checkboxes);

import { connect } from 'react-redux';
import TypeDetail from '../../components/Pokestat/TypeDetail';

const mapStateToProps = (state) => ({
  bool: state.types,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TypeDetail);

import { connect } from 'react-redux';
import Checkboxes from '../../components/Checkboxes/index.tsx';

import { addFilterTypes, deleteFilterTypes } from '../../actions/pokemon';

const mapStateToProps = (state) => ({
  types: state.pokemon.types,
  typesBool: state.types,
});

const mapDispatchToProps = (dispatch) => ({
  addTypesFilter: (type) => {
    dispatch(addFilterTypes(type));
  },
  deleteTypesFilter: (type) => {
    dispatch(deleteFilterTypes(type));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkboxes);

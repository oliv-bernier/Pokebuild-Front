import { connect } from 'react-redux';
import Checkboxes from '../../components/Checkboxes/index.tsx';

import { addFilterTypes, deleteFilterTypes } from '../../actions/pokemon';
import { switchFilter } from '../../actions/types';

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
  switchFilter: (value, key) => {
    dispatch(switchFilter(value, key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkboxes);

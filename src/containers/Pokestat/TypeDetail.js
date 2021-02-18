import { connect } from 'react-redux';
import TypeDetail from '../../components/Pokestat/TypeDetail';

import { switchFilter } from '../../actions/types';
import { addFilterTypes, deleteFilterTypes } from '../../actions/pokemon';

const mapStateToProps = (state) => ({
  bool: state.types,
});

const mapDispatchToProps = (dispatch) => ({
  switchFilter: (value, key) => {
    dispatch(switchFilter(value, key));
  },
  addTypesFilter: (type) => {
    dispatch(addFilterTypes(type));
  },
  deleteTypesFilter: (type) => {
    dispatch(deleteFilterTypes(type));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TypeDetail);

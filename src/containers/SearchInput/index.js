import { connect } from 'react-redux';
import SearchInput from '../../components/SearchInput/index.tsx';
import { inputSearch, deleteSearchInput } from '../../actions/pokemon';

const mapStateToProps = (state) => ({
  value: state.pokemon.searchInput,
});

const mapDispatchToProps = (dispatch) => ({
  inputSearch: (value) => {
    dispatch(inputSearch(value));
  },
  deleteInput: () => {
    dispatch(deleteSearchInput());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);

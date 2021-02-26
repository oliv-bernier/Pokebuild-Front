import { connect } from 'react-redux';
import SearchInput from '../../components/SearchInput';
import { inputSearch, deleteSearchInput } from '../../actions/pokemon';

const mapStateToProps = (state: any) => ({
  value: state.pokemon.searchInput,
});

const mapDispatchToProps = (dispatch: Function) => ({
  inputSearch: (value: string) => {
    dispatch(inputSearch(value));
  },
  deleteInput: () => {
    dispatch(deleteSearchInput());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);

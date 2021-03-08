import { connect } from 'react-redux';
import SearchInput from '../../components/SearchInput';
import {
  inputSearch,
  deleteSearchInput,
  setGenValue,
} from '../../actions/pokemon';

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
  setGenValue: (value: number) => {
    dispatch(setGenValue(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);

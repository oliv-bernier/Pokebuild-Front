import { connect } from 'react-redux';
import Favorites from '../../components/Favorites/index.tsx';

import { toggleFav } from '../../actions/boolean';

import {
  toggleConfirmDelete,
  deleteTeam,
  fetchFav,
  analyzeTeam,
} from '../../actions/favorites';

const mapStateToProps = (state) => ({
  isDrawer: state.boolean.isDrawer,
  teams: state.favorites.teams,
  isConfirmDelete: state.boolean.isConfirmDelete,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFav: () => {
    dispatch(toggleFav());
  },
  toggleConfirmDelete: (id) => {
    dispatch(toggleConfirmDelete(id));
  },
  deleteTeam: () => {
    dispatch(deleteTeam());
  },
  fetchFav: () => {
    dispatch(fetchFav());
  },
  analyzeTeam: (team, ids) => {
    dispatch(analyzeTeam(team, ids));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

import { connect } from 'react-redux';
import Favorites from '../../components/Favorites';

import { toggleFav } from '../../actions/boolean';

import {
  toggleConfirmDelete,
  deleteTeam,
  fetchFav,
  analyzeTeam,
} from '../../actions/favorites';

const mapStateToProps = (state: any) => ({
  isDrawer: state.boolean.isDrawer,
  teams: state.favorites.teams,
  isConfirmDelete: state.boolean.isConfirmDelete,
});

const mapDispatchToProps = (dispatch: Function) => ({
  toggleFav: () => {
    dispatch(toggleFav());
  },
  toggleConfirmDelete: (id: number) => {
    dispatch(toggleConfirmDelete(id));
  },
  deleteTeam: () => {
    dispatch(deleteTeam());
  },
  fetchFav: () => {
    dispatch(fetchFav());
  },
  analyzeTeam: (team: Array<number>, ids: Array<number>) => {
    dispatch(analyzeTeam(team, ids));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

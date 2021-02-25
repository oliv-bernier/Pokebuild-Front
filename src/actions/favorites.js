export const FETCH_FAV = 'FETCH_FAV';
export const fetchFav = () => ({
  type: FETCH_FAV,
});

export const MEMORIZE_TEAMS = 'MEMORIZE_TEAMS';
export const memorizeTeams = (teams) => ({
  type: MEMORIZE_TEAMS,
  teams,
});

export const SAVE_TEAM = 'SAVE_TEAM';
export const saveTeam = () => ({
  type: SAVE_TEAM,
});

export const CHANGE_NAME_INPUT = 'CHANGE_NAME_INPUT';
export const changeNameInput = (newValue, key) => ({
  type: CHANGE_NAME_INPUT,
  newValue,
  key,
});

export const DELETE_TEAM = 'DELETE_TEAM';
export const deleteTeam = () => ({
  type: DELETE_TEAM,
});

export const TOGGLE_CONFIRM_DELETE = 'TOGGLE_CONFIRM_DELETE';
export const toggleConfirmDelete = (id) => ({
  type: TOGGLE_CONFIRM_DELETE,
  id,
});

export const ANALYZE_TEAM = 'ANALYZE_TEAM';
export const analyzeTeam = (team) => ({
  type: ANALYZE_TEAM,
  team,
});

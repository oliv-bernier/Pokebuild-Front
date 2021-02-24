export const FETCH_FAV = 'FETCH_FAV';
export const fetchFav = () => ({
  type: FETCH_FAV,
});

export const MEMORIZE_TEAMS = 'MEMORIZE_TEAMS';
export const memorizeTeams = (teams) => ({
  type: MEMORIZE_TEAMS,
  teams,
});

export const SAVE_TEAM = 'SAV_TEAM';
export const saveTeam = () => ({
  type: SAVE_TEAM,
});

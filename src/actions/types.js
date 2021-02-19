export const SWITCH_FILTER = 'SWITCH_FILTER';
export const switchFilter = (value, key) => ({
  type: SWITCH_FILTER,
  key,
  value,
});

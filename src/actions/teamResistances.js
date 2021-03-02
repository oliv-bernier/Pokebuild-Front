export const MEMORIZE_RESISTANCES = 'MEMORIZE_RESISTANCES';
export const memorizeResitances = (value, key) => ({
  type: MEMORIZE_RESISTANCES,
  value,
  key,
});

export const MEMORIZE_SUMMARY = 'MEMORIZE_SUMMARY';
export const memorizeSummary = (summary) => ({
  type: MEMORIZE_SUMMARY,
  summary,
});

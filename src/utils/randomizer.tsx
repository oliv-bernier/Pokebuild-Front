/**
 * This functiun return a random number between min and max
 * @param {number} min - the minimum value
 * @param {number} max - the maximum value
 * @return {number} - a random value calculated between min and max
 */
const getRandomizedNum = (min: number, max: number): number => {
  const minVal = Math.ceil(min);
  const maxVal = Math.floor(max);
  return Math.floor(Math.random() * (maxVal - minVal)) + minVal;
};

export default getRandomizedNum;

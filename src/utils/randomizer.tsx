const getRandomizedNum = (min: number, max: number): number => {
  const minVal = Math.ceil(min);
  const maxVal = Math.floor(max);
  return Math.floor(Math.random() * (maxVal - minVal)) + minVal;
};

export default getRandomizedNum;

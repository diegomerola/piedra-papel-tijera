export const getRandomElementFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const getRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

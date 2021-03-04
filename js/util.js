const getRandomInteger = (min, max) => {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return 0;
};

const getRandomNumber = (min, max, fix) => {
  if (min >= 0 && max > min) {
    return Number(((Math.random() * (max - min + 1)) + min).toFixed(fix));
  }
  return NaN;
};


const getRandomArrayItem = (items) => items[getRandomInteger(0, items.length - 1)];

const getRandomArrayLength = (items) => items.slice(0, getRandomInteger(1, items.length - 1));


export { getRandomInteger, getRandomNumber, getRandomArrayItem, getRandomArrayLength };

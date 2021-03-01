/* eslint-disable */
const TYPES = ['palace', 'flat', 'house', 'bungalow'];

const CHECKS = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

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

const generateAdverts = (count) => {
  return new Array(count).fill(null).map(getRandomAdvert);
};

const getRandomAdvert = () => {
  const location = {
    x: getRandomNumber(35.65, 35.7, 5),
    y: getRandomNumber(139.7, 139.8, 5),
  };

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
    },
    offer: {
      title: 'super title',
      address: location.x + ', ' + location.y,
      price: getRandomInteger(1, 100000),
      type: getRandomArrayItem(TYPES),
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 10),
      checkin: getRandomArrayItem(CHECKS),
      checkout: getRandomArrayItem(CHECKS),
      features: getRandomArrayLength(FEATURES),
      description: 'stylno, modno, molodejno',
      photos: getRandomArrayLength(PHOTOS),
    },
    location,
  };
};


console.log(generateAdverts(10));

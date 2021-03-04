import { TYPES, CHECKS, FEATURES, PHOTOS } from './data.js';
import { getRandomInteger, getRandomNumber, getRandomArrayItem, getRandomArrayLength } from './utils.js';

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

export { getRandomAdvert };

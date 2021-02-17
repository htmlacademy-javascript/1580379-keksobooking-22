// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
/* eslint-disable */


function getRandomInteger(min, max) {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return 0;
}

function getRandomNumber(min, max, fix) {
  if (min >= 0 && max > min) {
    return Number(((Math.random() * (max - min + 1)) + min).toFixed(fix));
  }
  return NaN;
}

const TYPES = ['palace', 'flat', 'house', 'bungalow'];

const CHEKS = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

function getRandomAd() {
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
    },
    offer: {
      title: 'super title',
      // address,
      price: getRandomInteger(1, 100000),
      type: TYPES[getRandomInteger(0, TYPES.length - 1)],
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 10),
      checkin: CHEKS[getRandomInteger(0, CHEKS.length - 1)],
      checkout: CHEKS[getRandomInteger(0, CHEKS.length - 1)],
      //не понимаю как миновать повторение значений
      //features: new Array(getRandomInteger(0, FEATURES.length - 1)).fill(null),
      description: 'stylno, modno, molodejno',
      //photos: new Array(getRandomInteger(1, 50)).fill(null),
    },
    location: {
      x: getRandomNumber(35.65, 35.7, 5),
    }
  };
};

console.log(getRandomAd());

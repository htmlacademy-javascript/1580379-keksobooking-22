
const getRandomInteger = (min, max) => {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return 0;
}

const getRandomNumber = (min, max, fix) => {
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

const getRandomAdvert = () => {
  const location = {
    x: getRandomNumber(35.65, 35.7, 5),
    y: getRandomNumber(139.7, 139.8, 5),
  };

  const getRandomEllement = arrayName => arrayName[getRandomInteger(0, arrayName.length - 1)];

  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomInteger(1, 8) + '.png',
    },
    offer: {
      title: 'super title',
      address: location.x + ', ' + location.y,
      price: getRandomInteger(1, 100000),
      type: getRandomEllement(TYPES),
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 10),
      checkin: getRandomEllement(CHEKS),
      checkout: getRandomEllement(CHEKS),
      features: FEATURES.slice(0, getRandomInteger(1, FEATURES.length - 1)),
      description: 'stylno, modno, molodejno',
      photos: PHOTOS.slice(0, getRandomInteger(1, PHOTOS.length - 1)),
    },
    location,
  };
};

new Array(10).fill(null).map(getRandomAdvert);

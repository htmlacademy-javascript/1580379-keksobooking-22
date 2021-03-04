/* eslint-disable */
import { getRandomAdvert } from './random-advert.js';


const generateAdverts = (count) => {
  return new Array(count).fill(null).map(getRandomAdvert);
};

generateAdverts(10);

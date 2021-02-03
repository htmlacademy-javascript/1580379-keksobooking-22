// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const getRandomInteger = function (min, max) {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return ('используйте положительные числа по нарастанию "от" меньшего "до" большего');
}

getRandomInteger(10, 25);


const getRandomNumber = function (min, max, fix) {
  if (min >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return ((Math.random() * (max - min + 1)) + min).toFixed(fix);
  }
  return ('используйте положительные числа по нарастанию "от" меньшего "до" большего');
}

getRandomNumber(43, 90);

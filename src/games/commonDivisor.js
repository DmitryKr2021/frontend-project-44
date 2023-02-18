import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

function getGCD(x, y) {
  if (y !== 0) {
    const z = x % y;
    return getGCD(y, z);
  }
  return x;
}

const generateRound = () => {
  const number1 = getRandomNumber(0, 30);
  const number2 = getRandomNumber(0, 30);
  const answer = getGCD(number1, number2);
  const question = `${number1} ${number2}`;
  return [question, String(answer)];
};

export default function runGCD() {
  const description = 'Find the greatest common divisor of given numbers';
  runEngine(generateRound, description);
}

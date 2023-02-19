import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const isPrime = (number) => {
  if (number === 0 || number === 1) return false;
  if (number === 2) return true;
  let result = number % 2;
  for (let divisor = 3; divisor < Math.ceil(number / 3) + 1; divisor += 2) {
    result *= number % divisor;
  }
  return result !== 0;
};

const generateRound = () => {
  const testNumber = getRandomNumber(0, 50);
  const question = String(testNumber);
  const answer = isPrime(testNumber) ? 'yes' : 'no';
  return [question, answer];
};

export default function runPrime() {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  runEngine(generateRound, description);
}

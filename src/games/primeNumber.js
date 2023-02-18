import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

function isPrime(arg) {
  if (arg === 0 || arg === 1) return false;
  if (arg === 2) return true;
  let result = arg % 2;
  for (let divisor = 3; divisor < Math.ceil(arg / 3) + 1; divisor += 2) {
    result *= arg % divisor;
  }
  return result !== 0;
}

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

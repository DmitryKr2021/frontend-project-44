import getRandomNumber from '../utils/getRandomNumber.js';

function isPrime(arg) {
  if (arg === 2) return true;
  let result = arg % 2;
  for (let divisor = 3; divisor < Math.ceil(arg / 3) + 1; divisor += 2) {
    result *= arg % divisor;
  }
  return result !== 0;
}

export default function determineIfNumberIsPrime() {
  const testNumber = getRandomNumber(2, 50);
  const question = String(testNumber);
  const answer = isPrime(testNumber) ? 'yes' : 'no';
  const roundQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  return [question, answer, roundQuestion];
}

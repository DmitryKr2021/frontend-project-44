import generateRandomNumber from '../utils.js';

function isPrime(arg) {
  if (arg === 2) return true;
  let result = arg % 2;
  for (let divisor = 3; divisor < Math.ceil(arg / 3) + 1; divisor += 2) {
    result *= arg % divisor;
  }
  return result !== 0;
}

export default function determineIfNumberIsPrime() {
  const testNumber = generateRandomNumber([2, 50]);
  const question = `${testNumber}`;
  const correctAnswer = isPrime(testNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
}

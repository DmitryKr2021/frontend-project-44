import isEven from '../utils/isEven.js';
import getRandomNumber from '../utils/getRandomNumber.js';

export default function determineIfNumberIsEven() {
  const testNumber = getRandomNumber(0, 100);
  const question = String(testNumber);
  const answer = isEven(testNumber) ? 'yes' : 'no';
  const roundQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';
  return [question, answer, roundQuestion];
}

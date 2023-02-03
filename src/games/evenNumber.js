import generateRandomNumber, { isEvenNumber } from '../utils.js';

export default function determineIfNumberIsEven() {
  const testNumber = generateRandomNumber([0, 100]);
  const question = `${testNumber}`;
  const correctAnswer = isEvenNumber(testNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
}

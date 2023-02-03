import generateRandomNumber, { findMaxCommonDivisor } from '../utils.js';

export default function determineCommonDivisor() {
  const a = generateRandomNumber([0, 30]);
  const b = generateRandomNumber([0, 30]);
  const correctAnswer = String(findMaxCommonDivisor(a, b));
  const question = `${a} ${b}`;
  return [question, correctAnswer];
}

import getGCD from '../utils/getGCD.js';
import getRandomNumber from '../utils/getRandomNumber.js';

export default function determineCommonDivisor() {
  const a = getRandomNumber(0, 30);
  const b = getRandomNumber(0, 30);
  const answer = getGCD(a, b);
  const question = `${a} ${b}`;
  const roundQuestion = 'Find the greatest common divisor of given numbers';
  return [question, answer, roundQuestion];
}

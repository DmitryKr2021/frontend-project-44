import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const testNumber = getRandomNumber(0, 100);
  const question = String(testNumber);
  const answer = isEven(testNumber) ? 'yes' : 'no';
  return [question, answer];
};

export default function runEven() {
  const description = 'Answer "yes" if the number is even, otherwise answer "no"';
  runEngine(generateRound, description);
}

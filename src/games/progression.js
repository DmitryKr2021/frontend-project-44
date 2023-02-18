import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const getProgression = (length, startNumber, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(startNumber + step * i);
  }
  return progression;
};

const generateRound = () => {
  const length = 8;
  const startNumber = getRandomNumber(0, 20);
  const step = getRandomNumber(0, 5);
  const progression = getProgression(length, startNumber, step);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

export default function runProgression() {
  const description = 'What number is missing in the progression?';
  runEngine(generateRound, description);
}

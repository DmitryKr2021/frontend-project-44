import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

function getProgression(length, startNumber, step) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(startNumber + step * i);
  }
  return progression;
}

export default function runProgression() {
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
  const description = 'What number is missing in the progression?';
  runEngine(generateRound, description);
}

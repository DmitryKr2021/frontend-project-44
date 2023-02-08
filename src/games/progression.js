import getRandomNumber from '../utils/getRandomNumber.js';
import getProgression from '../utils/getProgression.js';

export default function determineMissingProgressionTerm() {
  const length = 8;
  const startNumber = getRandomNumber(0, 20);
  const step = getRandomNumber(0, 5);
  const progression = getProgression(length, startNumber, step);
  const numberTermToDelete = getRandomNumber(0, (length - 2));
  const answer = progression[numberTermToDelete];
  progression[numberTermToDelete] = '..';
  const question = `${progression.join(' ')}`;
  const roundQuestion = 'What number is missing in the progression?';
  return [question, answer, roundQuestion];
}

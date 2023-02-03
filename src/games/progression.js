import generateRandomNumber, { generateProgression } from '../utils.js';

export default function determineMissingProgressionTerm() {
  const progressionLength = 8;
  const startProgression = generateRandomNumber([0, 20]);
  const stepProgression = generateRandomNumber([0, 5]);
  const progression = generateProgression(progressionLength, startProgression, stepProgression);
  const numberTermToDelete = generateRandomNumber([0, (progressionLength - 2)]);
  const correctAnswer = String(progression[numberTermToDelete]);
  progression[numberTermToDelete] = '..';
  const question = `${progression.join(' ')}`;
  return [question, correctAnswer];
}

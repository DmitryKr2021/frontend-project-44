import MathCeilRandom from '../random.js';

export default function determineMissingProgressionTerm() {
  const arr = [];
  const progressionLength = 8;
  const startProgression = MathCeilRandom(20);
  const stepProgression = MathCeilRandom(5);
  for (let i = 0; i < progressionLength; i += 1) {
    arr.push(startProgression + stepProgression * i);
  }
  const deletedNumber = Math.ceil(Math.random() * (progressionLength - 2));
  const correctAnswer = arr[deletedNumber];
  arr[deletedNumber] = '..';
  const question = `${arr.join(' ')}`;
  return ([question, correctAnswer]);
}

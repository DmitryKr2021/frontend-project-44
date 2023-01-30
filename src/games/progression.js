import MathCeilRandom from '../random.js';

export default function testInProgression() {
  const arr = [];
  const progressionLength = 8;
  const start = MathCeilRandom(20);
  const step = MathCeilRandom(5);
  for (let i = 0; i < progressionLength; i += 1) {
    arr.push(start + step * i);
  }
  const deleteNumber = Math.ceil(Math.random() * (progressionLength - 2));
  const correctAnswer = arr[deleteNumber];
  arr[deleteNumber] = '..';
  const question = `${arr.join(' ')}`;
  return ([question, correctAnswer]);
}

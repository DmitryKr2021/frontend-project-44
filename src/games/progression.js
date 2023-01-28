import readlineSync from 'readline-sync';

export default function isInProgression() {
  const arr = [];
  const progressionLength = 8;
  const start = Math.ceil(Math.random() * 20);
  const step = Math.ceil(Math.random() * 5);
  for (let i = 0; i < progressionLength; i += 1) {
    arr.push(start + step * i);
  }
  const deleteNumber = Math.ceil(Math.random() * (progressionLength - 2));
  const correctAnswer = arr[deleteNumber];
  arr[deleteNumber] = '..';
  console.log(`Question: ${arr.join(', ')}`);
  const userAnswer = +readlineSync.question('Your answer: ');
  return ([userAnswer, correctAnswer]);
}

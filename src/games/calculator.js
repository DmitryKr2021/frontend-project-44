import readlineSync from 'readline-sync';

export default function calculator() {
  let correctAnswer;
  const counter = Math.round(Math.random() * 2);
  const a = Math.floor(Math.random() * 20);
  const b = Math.floor(Math.random() * 20);
  switch (counter) {
    case 0: console.log(`Question: ${a} + ${b}`);
      correctAnswer = a + b; break;
    case 1: console.log(`Question: ${a} * ${b}`);
      correctAnswer = a * b; break;
    case 2: console.log(`Question: ${a} - ${b}`);
      correctAnswer = a - b; break;
    default:
  }
  const userAnswer = +readlineSync.question('Your answer: ');
  return ([userAnswer, correctAnswer]);
}

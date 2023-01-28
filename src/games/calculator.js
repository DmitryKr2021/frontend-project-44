import readlineSync from 'readline-sync';

export default function calculator() {
  let correctAnswer;
  const counter = Math.round(Math.random() * 2);
  const a = Math.floor(Math.random() * 20);
  const b = Math.floor(Math.random() * 20);
  if (counter === 0) {
    console.log(`Question: ${a} + ${b}`);
    correctAnswer = a + b;
  }
  if (counter === 1) {
    console.log(`Question: ${a} * ${b}`);
    correctAnswer = a * b;
  }
  if (counter === 2) {
    console.log(`Question: ${a} - ${b}`);
    correctAnswer = a - b;
  }
  const userAnswer = +readlineSync.question('Your answer: ');
  return ([userAnswer, correctAnswer]);
}

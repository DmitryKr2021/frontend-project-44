import MathCeilRandom from '../random.js';

export default function calculator() {
  const counter = Math.round(Math.random() * 2);
  const b = MathCeilRandom(20);
  const a = MathCeilRandom(20);
  const questions = [`${a} + ${b}`, `${a} * ${b}`, `${a} - ${b}`];
  const correctAnswers = [(a + b), (a * b), (a - b)];
  const question = questions[counter];
  const correctAnswer = correctAnswers[counter];
  return ([question, correctAnswer]);
}

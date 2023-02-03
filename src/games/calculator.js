import generateRandomNumber, { calculateRandomExpression } from '../utils.js';

export default function calculateExpression() {
  const randomNumber = Math.round(Math.random() * 2);
  const a = generateRandomNumber([0, 20]);
  const b = generateRandomNumber([0, 20]);
  const operators = ['+', '*', '-'];
  const [question, correctAnswer] = calculateRandomExpression(a, b, operators[randomNumber]);

  return [question, correctAnswer];
}

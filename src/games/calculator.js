import calculateRandomExpression from '../utils/calculateRandomExpression.js';
import getRandomNumber from '../utils/getRandomNumber.js';

export default function calculateExpression() {
  const operators = ['+', '*', '-'];
  const randomNumber = Math.round(Math.random() * (operators.length - 1));
  const number1 = getRandomNumber(0, 20);
  const number2 = getRandomNumber(0, 20);
  const answer = calculateRandomExpression(number1, number2, operators[randomNumber]);
  const question = `${number1} ${operators[randomNumber]} ${number2}`;
  const roundQuestion = 'What is the result of the expression?';
  return [question, answer, roundQuestion];
}

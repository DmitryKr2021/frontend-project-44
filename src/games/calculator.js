import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

function calculate(number1, number2, operator) {
  switch (operator) {
    case '+': return number1 + number2;
    case '*': return number1 * number2;
    case '-': return number1 - number2;
    default: throw new Error(`Unknown operator: '${operator}'!`);
  }
}

const generateRound = () => {
  const operators = ['+', '*', '-'];
  const randomNumber = getRandomNumber(0, operators.length - 1);
  const number1 = getRandomNumber(0, 20);
  const number2 = getRandomNumber(0, 20);
  const answer = calculate(number1, number2, operators[randomNumber]);
  const question = `${number1} ${operators[randomNumber]} ${number2}`;
  return [question, String(answer)];
};

export default function runCalc() {
  const description = 'What is the result of the expression?';
  runEngine(generateRound, description);
}

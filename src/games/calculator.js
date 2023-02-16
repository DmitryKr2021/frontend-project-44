import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

function calculate(x, y, operator) {
  switch (operator) {
    case '+': return x + y;
    case '*': return x * y;
    case '-': return x - y;
    default: throw new Error(`Unknown operator: '${operator}'!`);
  }
}

export default function runCalc() {
  const generateRound = () => {
    const operators = ['+', '*', '-'];
    const randomNumber = getRandomNumber(-1, (operators.length - 1));
    const number1 = getRandomNumber(0, 20);
    const number2 = getRandomNumber(0, 20);
    const answer = calculate(number1, number2, operators[randomNumber]);
    const question = `${number1} ${operators[randomNumber]} ${number2}`;
    return [question, String(answer)];
  };
  const description = 'What is the result of the expression?';
  runEngine(generateRound, description);
}

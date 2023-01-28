import askName from './cli.js';
import isEvenNumber from './games/evenNumber.js';
import isPrimeNumber from './games/primeNumber.js';
import isInProgression from './games/progression.js';
import isCommonDivisor from './games/commonDivisor.js';
import calculator from './games/calculator.js';

let userName;
let counter = 0;
const maxCount = 3;

export default function startGames() {
  userName = askName();
}

export function checkAnswer(answers, functionName) {
  if (answers[0] === answers[1]) {
    console.log('Correct!');
    counter += 1;
  } else {
    console.log(`'${answers[0]}' is wrong answer; (. Correct answer was '${answers[1]}'
Let's try again, ${userName}!`);
    return;
  }

  if (counter === maxCount) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  switch (functionName) {
    case 'evenNumber': checkAnswer(isEvenNumber(), 'evenNumber'); break;
    case 'commonDivisor': checkAnswer(isCommonDivisor(), 'commonDivisor'); break;
    case 'primeNumber': checkAnswer(isPrimeNumber(), 'primeNumber'); break;
    case 'progression': checkAnswer(isInProgression(), 'progression'); break;
    case 'calculator': checkAnswer(calculator(), 'calculator'); break;
    default:
  }
}

import readlineSync from 'readline-sync';
import askName from './cli.js';
import isCorrectAnswer from './isCorrectAnswer.js';

export default function runEngine(thisFunction, functionName) {
  const functionResult = thisFunction();
  let counter = 0;
  const maxCount = 3;
  const startQuestions = {
    evenNumber: 'Answer "yes" if the number is even, otherwise answer "no"',
    commonDivisor: 'Find the greatest common divisor of given numbers',
    primeNumber: 'Answer "yes" if given number is prime. Otherwise answer "no"',
    progression: 'What number is missing in the progression?',
    calculator: 'What is the result of the expression?',
  };

  console.log('Welcome to the Brain Games!');
  const userName = askName();
  console.log(startQuestions[functionName]);

  function checkAnswer([question, correctAnswer] = functionResult) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (isCorrectAnswer(userAnswer, correctAnswer)) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer; (. Correct answer was '${correctAnswer}'
Let's try again, ${userName}!`);
      return;
    }
    if (counter === maxCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    checkAnswer(thisFunction());
  }
  checkAnswer(thisFunction());
}

import readlineSync from 'readline-sync';
import askName from './cli.js';

export default function runEngine(generateRound, roundQuestion) {
  let counter = 0;
  const maxCount = 3;

  console.log('Welcome to the Brain Games!');
  const userName = askName();
  console.log(roundQuestion);

  while (counter < maxCount) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer; (. Correct answer was '${correctAnswer}'
Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

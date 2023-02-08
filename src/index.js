import readlineSync from 'readline-sync';
import askName from './cli.js';

export default function runEngine(generateRound) {
  const roundCount = 3;

  console.log('Welcome to the Brain Games!');
  const userName = askName();
  console.log(`Hello, ${userName}!`);
  if (generateRound === 'noRound') { return; }

  const [roundQuestion] = generateRound().slice(2);
  console.log(roundQuestion);

  for (let counter = 0; counter < roundCount; counter += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer; (. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

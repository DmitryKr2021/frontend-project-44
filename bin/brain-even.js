#!/usr/bin/env node
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-cycle
import userName from './brain-games.js';

export default function evenNumber() {
  console.log('Hi there!\nAnswer "yes" if number even otherwise answer "no"');
  let counter = 0;
  const maxCount = 3;
  function beginGame() {
    const example = Math.ceil(Math.random() * 100);
    console.log(`Question: ${example}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = example % 2 ? 'no' : 'yes';
    if (answer === userAnswer) {
      console.log('Correct!\n');
      counter += 1;
      if (counter === maxCount) {
        console.log(`Congratulations, ${userName}!`);
        return true;
      }
      beginGame();
    } else {
      console.log(`Sorry, You are wrong\nLet's try again, ${userName}`);
      counter = 0;
      beginGame();
    }
    return null;
  }

  beginGame();
  return true;
}

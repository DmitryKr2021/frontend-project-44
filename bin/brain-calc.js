#!/usr/bin/env node
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-cycle
import userName from './brain-games.js';

export default function calculator() {
  const sum = (a, b) => a + b;
  const multi = (a, b) => a * b;
  const differ = (a, b) => a - b;
  console.log('Hi there!');
  console.log('What is the result of the expression?');
  const args = [];
  let userAnswer;
  let correctAnswer;
  const generateArgs = () => {
    args[0] = Math.floor(Math.random() * 20);
    args[1] = Math.floor(Math.random() * 20);
    return args;
  };
  const checkSum = ([a, b] = generateArgs()) => {
    userAnswer = +readlineSync.question(`${a} + ${b} = `);
    correctAnswer = sum(a, b);
    return userAnswer === correctAnswer;
  };
  const checkMulti = ([a, b] = generateArgs()) => {
    userAnswer = +readlineSync.question(`${a} * ${b} = `);
    correctAnswer = multi(a, b);
    return userAnswer === correctAnswer;
  };
  const checkDiffer = ([a, b] = generateArgs()) => {
    userAnswer = +readlineSync.question(`${a} - ${b} = `);
    correctAnswer = differ(a, b);
    return userAnswer === correctAnswer;
  };

  function againGame() {
    console.log(`Sorry, ${userAnswer} is wrong answer; (. Correct answer was ${correctAnswer}\n
Let's try again, ${userName}!`);
    // eslint-disable-next-line no-use-before-define
    beginGame();
  }

  function beginGame() {
    if (checkSum()) {
      console.log(`Correct!
What is the result of the expression?`);
      if (checkMulti()) {
        console.log(`Correct!
What is the result of the expression?`);
        if (checkDiffer()) {
          console.log(`Correct!
         Congratulation!`);
        } else {
          againGame();
        }
      } else {
        againGame();
      }
    } else {
      againGame();
    }
  }
  beginGame();
  return true;
}

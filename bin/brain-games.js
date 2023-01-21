#!/usr/bin/env node
/* eslint-disable no-console */

/*const readlineSync = require('readline-sync');
const calculator = require('./calculator');
const progression = require('./progression');
const evenNumber = require('./evennumber');
const primeNumber = require('./primenumber');
const commonDivisor = require('./commondivisor');

const chooseGame = `
***********************************
* There are brain-games for You:  *
* "Calculator": type "cl";        *
* "Progression": type "pr";       *
* "Even number": type "en";       *
* "Max common divisor": type "md";*
* "Prime number": type "pn"       *
* QUIT: type "q"                  *
**********************************;
YOUR CHOOSE: `;

const games = ['cl', 'pr', 'en', 'md', 'pn', 'q'];
let userName;
process.stdin.setEncoding('utf-8');*/
console.log('Welcome to the Brain Games!\n');

/*function askName() {
  userName = readlineSync.question('May I have your name? ');
  if (userName === '') {
    console.warn('INCORRECT_INPUT');
    askName();
  } else {
    console.log(`Hi ${userName}!`);
  }
}
askName();

function myGame() {
  const game = readlineSync.question(chooseGame);
  if (!games.includes(game)) {
    console.log(`Sorry, ${game} is not in games list. Try again\n`);
    myGame();
  } else {
    console.log(`Oh, ${userName} choosed ${game}!\n`);
    switch (game) {
      case 'cl': if (calculator()) { myGame(); } break;
      case 'pr': if (progression()) { myGame(); } break;
      case 'en': if (evenNumber()) { myGame(); } break;
      case 'pn': if (primeNumber()) { myGame(); } break;
      case 'md': if (commonDivisor()) { myGame(); } break;
      default: console.log(`Bye, ${userName}!`);
    }
  }
}

myGame();*/

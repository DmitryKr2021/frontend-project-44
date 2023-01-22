#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askName from '../src/cli.js';
// eslint-disable-next-line import/no-cycle
import evenNumber from './brain-even.js';

/*const calculator = require('./calculator');
const progression = require('./progression');
const evenNumber = require('./evennumber');
const primeNumber = require('./primenumber');
const commonDivisor = require('./commondivisor');*/

const chooseGame = `
***********************************
* There are brain-games for You:  *
* "Calculator": type "cl";        *
* "Progression": type "pr";       *
* "Even number": type "en";       *
* "Max common divisor": type "md";*
* "Prime number": type "pn"       *
* QUIT: type "q"                  *
***********************************
YOUR CHOOSE: `;

const games = ['cl', 'pr', 'en', 'md', 'pn', 'q'];
process.stdin.setEncoding('utf-8');
console.log('Welcome to the Brain Games!\n');

const userName = askName();
console.log(`Hi ${userName}!`);

function myGame() {
  const game = readlineSync.question(chooseGame);
  if (!games.includes(game)) {
    console.log(`Sorry, ${game} is not in games list. Try again\n`);
    myGame();
  } else {
    console.log(`Oh, ${userName} choosed ${game}!\n`);
    switch (game) {
      // case 'cl': if (calculator()) { myGame(); } break;
      // case 'pr': if (progression()) { myGame(); } break;
      case 'en': if (evenNumber()) { myGame(); } break;
      // case 'pn': if (primeNumber()) { myGame(); } break;
      // case 'md': if (commonDivisor()) { myGame(); } break;
      default: console.log(`Bye, ${userName}!`);
    }
  }
}
export default userName;
myGame();

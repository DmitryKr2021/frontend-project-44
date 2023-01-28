#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars
import brainGames from './brain-games.js';
import isPrimeNumber from '../src/games/primeNumber.js';
import { checkAnswer } from '../src/index.js';

console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
checkAnswer(isPrimeNumber(), 'primeNumber');

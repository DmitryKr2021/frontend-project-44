#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars
import brainGames from './brain-games.js';
import isPrimeNumber from '../src/games/primeNumber.js';
import { checkAnswer } from '../src/index.js';

console.log('Answer "yes" if number prime otherwise answer "no"');
checkAnswer(isPrimeNumber(), 'primeNumber');

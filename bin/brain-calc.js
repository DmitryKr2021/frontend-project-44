#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars
import brainGames from './brain-games.js';
import calculator from '../src/games/calculator.js';
import { checkAnswer } from '../src/index.js';

console.log('What is the result of the expression?');
checkAnswer(calculator(), 'calculator');

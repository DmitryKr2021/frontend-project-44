#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars
import brainGames from './brain-games.js';
import isEvenNumber from '../src/games/evenNumber.js';
import { checkAnswer } from '../src/index.js';

console.log('Answer "yes" if the number is even otherwise answer "no"');
checkAnswer(isEvenNumber(), 'evenNumber');

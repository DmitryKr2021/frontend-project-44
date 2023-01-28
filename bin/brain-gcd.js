#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars
import brainGames from './brain-games.js';
import isCommonDivisor from '../src/games/commonDivisor.js';
import { checkAnswer } from '../src/index.js';

console.log('Find the greatest common divisor of given numbers');
checkAnswer(isCommonDivisor(), 'commonDivisor');

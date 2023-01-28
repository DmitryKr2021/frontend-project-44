#!/usr/bin/env node
// eslint-disable-next-line no-unused-vars
import brainGames from './brain-games.js';
import isInProgression from '../src/games/progression.js';
import { checkAnswer } from '../src/index.js';

console.log('What number is missing in the progression?');
checkAnswer(isInProgression(), 'progression');

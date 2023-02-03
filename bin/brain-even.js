#!/usr/bin/env node
import runEngine from '../src/index.js';
import determineIfNumberIsEven from '../src/games/evenNumber.js';

runEngine(determineIfNumberIsEven, 'Answer "yes" if the number is even, otherwise answer "no"');

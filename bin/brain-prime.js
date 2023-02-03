#!/usr/bin/env node
import runEngine from '../src/index.js';
import determineIfNumberIsPrime from '../src/games/primeNumber.js';

runEngine(determineIfNumberIsPrime, 'Answer "yes" if given number is prime. Otherwise answer "no"');

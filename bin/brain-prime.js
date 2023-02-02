#!/usr/bin/env node
import runEngine from '../src/index.js';
import determineIfNumberIsPrime from '../src/games/primeNumber.js';

runEngine(determineIfNumberIsPrime, 'primeNumber');

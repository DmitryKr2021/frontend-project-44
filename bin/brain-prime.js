#!/usr/bin/env node
import runEngine from '../src/index.js';
import testPrimeNumber from '../src/games/primeNumber.js';

runEngine(testPrimeNumber, 'primeNumber');

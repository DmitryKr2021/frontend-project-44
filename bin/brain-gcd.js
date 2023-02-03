#!/usr/bin/env node
import runEngine from '../src/index.js';
import determineCommonDivisor from '../src/games/commonDivisor.js';

runEngine(determineCommonDivisor, 'Find the greatest common divisor of given numbers');

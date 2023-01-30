#!/usr/bin/env node
import runEngine from '../src/index.js';
import testCommonDivisor from '../src/games/commonDivisor.js';

runEngine(testCommonDivisor, 'commonDivisor');

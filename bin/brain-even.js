#!/usr/bin/env node
import runEngine from '../src/index.js';
import testEvenNumber from '../src/games/evenNumber.js';

runEngine(testEvenNumber, 'evenNumber');

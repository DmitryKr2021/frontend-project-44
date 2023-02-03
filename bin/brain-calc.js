#!/usr/bin/env node
import runEngine from '../src/index.js';
import calculateExpression from '../src/games/calculator.js';

runEngine(calculateExpression, 'What is the result of the expression?');

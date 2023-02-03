#!/usr/bin/env node
import runEngine from '../src/index.js';
import determineMissingProgressionTerm from '../src/games/progression.js';

runEngine(determineMissingProgressionTerm, 'What number is missing in the progression?');

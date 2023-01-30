import MathCeilRandom from '../random.js';

export default function testEvenNumber() {
  const testNumber = MathCeilRandom(100);
  const question = `${testNumber}`;
  const correctAnswer = testNumber % 2 ? 'no' : 'yes';
  return ([question, correctAnswer]);
}

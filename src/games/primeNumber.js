import isPrime from '../isPrime.js';
import MathCeilRandom from '../random.js';

export default function testPrimeNumber() {
  const testNumber = MathCeilRandom(50) + 2;
  const question = `${testNumber}`;
  const correctAnswer = isPrime(testNumber) ? 'yes' : 'no';
  return ([question, correctAnswer]);
}

import readlineSync from 'readline-sync';

export default function isPrimeNumber() {
  function isPrime(arg) {
    let result = arg % 2;
    for (let divisor = 3; divisor < Math.round(arg / 3); divisor += 2) {
      result *= arg % divisor;
    }
    return result !== 0;
  }
  const testNumber = Math.ceil(Math.random() * 50) + 2;
  console.log(`Question: ${testNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(testNumber) ? 'yes' : 'no';
  return ([userAnswer, correctAnswer]);
}

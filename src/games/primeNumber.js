import readlineSync from 'readline-sync';

export default function isPrimeNumber() {
  function isPrime(arg) {
    if (arg % 2 === 0) { return false; }
    for (let divisor = 3; divisor < Math.round(arg / 2); divisor += 2) {
      if (arg % divisor === 0) { return false; }
    }
    return true;
  }
  const testNumber = Math.ceil(Math.random() * 20);
  console.log(`Question: ${testNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrime(testNumber) ? 'yes' : 'no';
  return ([userAnswer, correctAnswer]);
}

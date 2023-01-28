import readlineSync from 'readline-sync';

export default function isEvenNumber() {
  const testNumber = Math.ceil(Math.random() * 100);
  console.log(`Question: ${testNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = testNumber % 2 ? 'no' : 'yes';
  return ([userAnswer, correctAnswer]);
}

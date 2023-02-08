import readlineSync from 'readline-sync';

export default function askName() {
  const userName = readlineSync.question('May I have your name? ');
  if (userName === '') {
    console.warn('INCORRECT_INPUT');
    askName();
  }
  return userName;
}

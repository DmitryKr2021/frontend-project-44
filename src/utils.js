const generateRandomNumber = ([min, max]) => Math.ceil(Math.random() * (max - min)) + min;

export function calculateRandomExpression(x, y, operator) {
  let result;
  let question;
  switch (operator) {
    case '+': result = x + y; question = `${x} + ${y}`; break;
    case '*': result = x * y; question = `${x} * ${y}`; break;
    case '-': result = x - y; question = `${x} - ${y}`; break;
    default: throw new Error(`Unknown operator: '${operator}'!`);
  }
  return [question, String(result)];
}

export function findMaxCommonDivisor(x, y) {
  if (y !== 0) {
    const z = x % y;
    return findMaxCommonDivisor(y, z);
  }
  return x;
}

export function isEvenNumber(arg) {
  return arg % 2 === 0;
}

export function generateProgression(progressionLength, startProgression, stepProgression) {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startProgression + stepProgression * i);
  }
  return progression;
}

export default generateRandomNumber;

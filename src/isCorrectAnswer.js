export default function isCorrectAnswer(userAnswer, correctAnswer) {
  return typeof correctAnswer === 'string' ? userAnswer === correctAnswer : +userAnswer === correctAnswer;
}

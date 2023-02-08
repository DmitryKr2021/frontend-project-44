export default function getProgression(length, startNumber, step) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(startNumber + step * i);
  }
  return progression;
}

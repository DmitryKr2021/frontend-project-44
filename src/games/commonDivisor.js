export default function testCommonDivisor() {
  const args = [];
  const generateArgs = () => {
    args[0] = Math.ceil(Math.random() * 30);
    args[1] = Math.ceil(Math.random() * 30);
    return args;
  };
  const findMaxCommonDivisor = (x, y) => {
    if (y !== 0) {
      const z = x % y;
      return findMaxCommonDivisor(y, z);
    }
    return x;
  };
  const [a, b] = generateArgs();
  const correctAnswer = findMaxCommonDivisor(a, b);
  const question = `${a} ${b}`;
  return ([question, correctAnswer]);
}

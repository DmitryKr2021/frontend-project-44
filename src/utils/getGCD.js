export default function getGCD(x, y) {
  if (y !== 0) {
    const z = x % y;
    return getGCD(y, z);
  }
  return x;
}

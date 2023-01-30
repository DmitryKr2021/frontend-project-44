export default function isPrime(arg) {
  let result = arg % 2;
  for (let divisor = 3; divisor < Math.round(arg / 3); divisor += 2) {
    result *= arg % divisor;
  }
  return result !== 0;
}

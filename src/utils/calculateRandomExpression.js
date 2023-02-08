export default function calculateRandomExpression(x, y, operator) {
  switch (operator) {
    case '+': return x + y;
    case '*': return x * y;
    case '-': return x - y;
    default: throw new Error(`Unknown operator: '${operator}'!`);
  }
}

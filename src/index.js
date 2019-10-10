module.exports = function multiply(first, second) {
  const result = (BigInt(first) * BigInt(second));
  return String(result);
}

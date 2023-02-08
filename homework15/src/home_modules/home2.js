export function getSum(f1, f2, skip) {
  let result = 0;
  for (let i = f1; i <= f2; i++) {
    if (skip) {
      result += i % 2 === 0 ? 0 : i;
    } else {
      result += i;
    }
  }
  return result;
}

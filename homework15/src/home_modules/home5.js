export function getRandomArray(length, min, max) {
  const result = [];
  if (length <= 0) {
    return result;
  }
  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return result;
}

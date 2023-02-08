export function getMaxDigit(number) {
  let max = 0;
  let str = number.toString();

  if (str.length === 1) {
    max = Number(str);
  } else {
    max = Number(str[0]);
    for (let i = 1; i < str.length; i++) {
      if (Number(str[i]) > max) {
        max = Number(str[i]);
      }
    }
  }
  return max;
}

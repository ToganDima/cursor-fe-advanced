function delay() {
  return new Promise((resolve) => setTimeout(resolve, 50));
}

export async function getRandomChinese(length = 4) {
  let result = "";
  while (length > 0) {
    let sign = Date.now().toString().slice(-5);
    let symbol = String.fromCharCode(sign);
    result += symbol;
    await delay();
    length--;
  }
  console.log(result);
  return result;
}

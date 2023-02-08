function getRandomValue() {
  return Math.floor(Math.random() * 256 + 1);
}

function getColorStr() {
  return (
    "rgb(" +
    getRandomValue() +
    ", " +
    getRandomValue() +
    ", " +
    getRandomValue() +
    ")"
  );
}

export function createBoxes() {
  const mainBox = document.querySelector('.main-box');
  for (let i = 0; i < 25; i++) {
    let newEl = document.createElement("div");
    newEl.classList.add("box");
    newEl.style.backgroundColor = getColorStr();
    mainBox.append(newEl);
  }
}

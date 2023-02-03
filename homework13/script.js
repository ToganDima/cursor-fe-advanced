function* createIdGenerator() {
    for (let i = 1; i < Infinity; i++) {
        yield i;
    }
}
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function newFontGenerator(fSize) {
    let curFontSize = fSize;
    return {
        next(typeMove) {
            if (typeMove === 'up') {
                curFontSize += 2;
            } else if (typeMove === 'down') {
                curFontSize -= 2;
            }
            return { value: curFontSize }
        }
    }
}

const fontGenerator = newFontGenerator(14);

document.getElementById("size-up").addEventListener('click', function () {
    reRenderElem(fontGenerator.next("up").value);
});

document.getElementById("size-down").addEventListener("click", function () {
    reRenderElem(fontGenerator.next("down").value);
});

const fontEl = document.querySelector(".font-text");

function reRenderElem(size) {
    let elFontSize = `${size}px`;
    fontEl.innerText = elFontSize;
    fontEl.style.fontSize = elFontSize;
}
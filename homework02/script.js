
let firstNumber = Number(prompt("Введіть перше число:"));

while (firstNumber <= 0 || isNaN(firstNumber) || !Number.isInteger(firstNumber)) {
    firstNumber = Number(prompt("Некоретні дані! Введіть ціле та більше 0 число:"));
}

let secondNumber = Number(prompt("Введіть друге число:"));

while (secondNumber <= 0 || isNaN(secondNumber) || !Number.isInteger(secondNumber) || secondNumber <= firstNumber) {
    secondNumber = Number(prompt("Некоретні дані! Введіть ціле, більше за перше та більше 0 число:"));
}

let skipEvenNumbers = confirm("Пропускати парні числа при сумуванні?");
let result = 0;

for (let i = firstNumber; i <= secondNumber; i++) {
    if (skipEvenNumbers) {
        result += (i % 2 === 0) ? 0 : i; 
    } else {
        result += i;
    }
}

document.writeln(`Сума чисел: ${result}`);
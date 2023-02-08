
let firstNumber = Number(prompt("Введіть перше число:"));

while (firstNumber <= 0 || isNaN(firstNumber) || !Number.isInteger(firstNumber)) {
    firstNumber = Number(prompt("Некоретні дані! Введіть ціле та більше 0 число:"));
}

let secondNumber = Number(prompt("Введіть друге число:"));

while (secondNumber <= 0 || isNaN(secondNumber) || !Number.isInteger(secondNumber) || secondNumber <= firstNumber) {
    secondNumber = Number(prompt("Некоретні дані! Введіть ціле, більше за перше та більше 0 число:"));
}

let skipEvenNumbers = confirm("Пропускати парні числа при сумуванні?");

function getSum(f1, f2, skip) {

    let result = 0;

    for (let i = f1; i <= f2; i++) {
        if (skip) {
            result += (i % 2 === 0) ? 0 : i;
        } else {
            result += i;
        }
    }

    return result;
    
}

let sum = getSum(firstNumber, secondNumber, skipEvenNumbers);
document.writeln(`Сума чисел: ${sum}`);
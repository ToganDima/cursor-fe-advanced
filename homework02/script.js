let firstNumber = 0;
let secondNumber = 0;

let numberIsCorrect = false;
let errorMsg = "Введено некоректні дані!";

while (!numberIsCorrect) {
    firstNumber = Number(prompt("Введіть перше число:"));
    if (isNaN(firstNumber) || !Number.isInteger(firstNumber)) {
        alert(errorMsg);
    } else {
        numberIsCorrect = true;
    }
}

numberIsCorrect = false;

while (!numberIsCorrect) {
    secondNumber = Number(prompt("Введіть друге число:"));
    if (isNaN(secondNumber) || !Number.isInteger(secondNumber)) {
        alert(errorMsg);
    } else {
        numberIsCorrect = true;
    }
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
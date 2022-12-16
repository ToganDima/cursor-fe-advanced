
function getMaxDigit(number) {

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

function getPowNumber(number, powValue = 0) {
    
    let result = 0;
    
    if (powValue === 0) {
        result = 1;
    }  else if (powValue === 1) {
        result = number;
    } else {
        result = number * number;
        for (let i = 2; i < powValue; i++) {
            result = result * number;
        }
    }

    return result;

}

function formatName(name) {

    let result = '';
    let nameLCase = name.toLowerCase();

    if (nameLCase.length > 0) {
        result = nameLCase[0].toUpperCase() + nameLCase.slice(1); 
    }

    return result;

}

function getSalary(sum) {
    
    const tax = 19.5;
    return sum - (sum * tax / 100).toFixed(2);

}

function getRandomNumber(n, m) {

    let random = Math.random();

    return Math.floor(random * (m - n + 1)) + n;

}

function countLetter(letter, str) {

    let result = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == letter.toLowerCase()) {
            result += 1;
        }
    }

    return result;

}

function convertCurrency(cur) {

    let result = '';
    let sum = 0;

    let dolStartPosition = cur.indexOf('$');
    let uahStartPosition = cur.toLowerCase().indexOf('uah');

    if (dolStartPosition > 0) {
        sum = Number(cur.slice(0, dolStartPosition));
        if (!isNaN(sum)) {
            result = '' + sum * 40 + 'грн.';
        }
    } else if (uahStartPosition > 0) {
        sum = Number(cur.slice(0, uahStartPosition));
        if (!isNaN(sum)) {
            result = '' + sum / 40 + '$';
        }    
    } else {
        result = 'Працюємо тільки з $ або UAH';
    }

    return result;

}

function getRandomPassword(passLength = 8) {

    let randomPass = '';
    for (let i = 0; i < passLength; i++) {
        randomPass += getRandomNumber(0, 9);
    }

    return randomPass;

}

function deleteLetters(letter, str) {

    let resultStr = '';

    for (let i = 0; i < str.length; i++) {
        resultStr += (str[i].toLowerCase() !== letter.toLowerCase()) ? str[i] : '';
    }
    
    return resultStr;

}

function isPalyndrom(str) {

    let result = true;
    let strToCheck = str.toLowerCase().replaceAll(' ', '');
    
    for (let i = 0; i < Math.floor(strToCheck.length / 2); i++) {
        if (strToCheck[i] !== strToCheck[strToCheck.length - i - 1]) {
            result = false;
            break;
        }
    }

    return result;

}

function deleteDuplicateLetter(str) {

    let result = '';
    let strToCheck = str.toLowerCase();

    for (let i = 0; i < strToCheck.length; i++) {
        if (strToCheck.indexOf(strToCheck[i]) === strToCheck.lastIndexOf(strToCheck[i])) {
            result += strToCheck[i];
        }    
    }

    return result;

}

document.writeln(`<p>Функція №1: ${getMaxDigit(39872)} </p>`);
document.writeln(`<p>Функція №2: ${getPowNumber(3, 5)} </p>`);
document.writeln(`<p>Функція №3: ${formatName("вЛад")} </p>`);
document.writeln(`<p>Функція №4: ${getSalary(1000)} </p>`);
document.writeln(`<p>Функція №5: ${getRandomNumber(3, 25)} </p>`);
document.writeln(`<p>Функція №6: ${countLetter("т", "Трансформатор")} </p>`);
document.writeln(`<p>Функція №7: ${convertCurrency("250$")} </p>`);
document.writeln(`<p>Функція №8: ${getRandomPassword(6)} </p>`);
document.writeln(`<p>Функція №9: ${deleteLetters("т", "Трансформатор")} </p>`);
document.writeln(`<p>Функція №10: ${isPalyndrom("Я несу гусеня")} </p>`);
document.writeln(`<p>Функція №11: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")} </p>`);

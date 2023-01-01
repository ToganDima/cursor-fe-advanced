
function getRandomArray(length, min, max) {
    const result = [];
    if (length <= 0) {
        return result;
    }
    for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return result;
}

console.log('Function #1: ', getRandomArray(15,1,100));

function getModa(...numbers) {
    const modaNumbers = numbers.reduce((resObj, curVal) => {
        if (!Number.isInteger(curVal)) {
            return resObj;
        }
        if (resObj[curVal]) {
            resObj[curVal] +=1;
        } else {
            resObj[curVal] = 1;
        }
        return resObj;
    }, {});
    let maxCount = Math.max(...Object.values(modaNumbers));
    return Object.keys(modaNumbers).filter((key) => { 
        return modaNumbers[key] === maxCount;
    });
}

console.log('Function #2: ', getModa(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2));

function getAverage(...numbers) {
    const numArr = numbers.filter((curVal) => {
        return Number.isInteger(curVal);
    });
    return numArr.reduce((sum, curVal) => {
        return sum + curVal;
    }) / numArr.length;
}

console.log('Function #3: ', getAverage(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2));

function getMedian(...numbers) {
    const numArr = numbers.filter(curVal => Number.isInteger(curVal)).sort((a, b) => a - b);
    return (numArr.length % 2 === 0) ? 
    (numArr[numArr.length / 2 - 1] + numArr[numArr.length / 2]) / 2 : numArr[(numArr.length - 1) / 2];
}

console.log('Function #4: ', getMedian(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2));

function filterEvenNumbers(...numbers) {
    return numbers.filter((curVal) => curVal % 2 !== 0);
}

console.log('Function #5: ', filterEvenNumbers(1, 2, 3, 4, 5, 6));

function countPositiveNumbers(...numbers) {
    return numbers.reduce((count, curVal) => {
        if (curVal > 0) {
            count++;
        }
        return count;
    }, 0)
}

console.log('Function #6: ', countPositiveNumbers(1, -2, 3, -4, -5, 6));

function getDividedByFive(...numbers) {
    return numbers.filter((value) => value % 5 === 0);
}

console.log('Function #7: ', getDividedByFive(6,2,55,11,78,2,55,77,57,87,23,2,56,3,2));

function replaceBadWords(string = '', badWords = ['shit', 'fuck']) {
    const allWords = string.split(' ');
    const newWords = allWords.map((curVal) => {
        badWords.forEach((word) => {
            curVal = curVal.replace(word, '***');
        });
        return curVal;
    });
    return newWords.join(' ');
}

console.log('Function #8: ', replaceBadWords("Are you fucking kidding? Holy shit!"));

function divideByThree(word) {
    let checkStr = word.replaceAll(' ', '').toLowerCase();
    if (checkStr.length <= 3) {
        return checkStr;
    }
    const resultStr = Array.from(checkStr).reduce((totalVal, curVal, curIndex) => {
        totalVal += curVal;
        if (curIndex > 0 && curIndex !== checkStr.length - 1 && (curIndex + 1) % 3 === 0) {
            totalVal += ' ';
        }
        return totalVal;
    }, '');
    return resultStr.split(' ');
}

console.log('Function #9: ', divideByThree("Commander"));

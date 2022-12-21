
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getStudentsPairs(studentsArr = []) {
 
    const boys = [];
    const girls = [];

    for (let i = 0; i < studentsArr.length; i++) {
        let studName = studentsArr[i];
        if (studName[studName.length - 1] === "а") {
            girls.push(studName);
        } else {
            boys.push(studName);
        }
    }

    const result = [];

    for (let i = 0; i < boys.length; i++) {
        result.push([boys[i], girls[i]]);
    }

    return result;

}

const pairs = getStudentsPairs(students);
console.log('Student pairs: ', pairs);

function getPairsWithTheme(pairsArr = []) {

    const result = [];

    for (let i = 0; i < pairsArr.length; i++) {
        result.push([pairsArr[i][0] + " і " + pairsArr[i][1], themes[i]]);
    }

    return result;

}

const pairsWhithTheme = getPairsWithTheme(pairs);
console.log('Pairs with theme: ', pairsWhithTheme);

function getStudentsWithMarks(studentsArr = [], marksArr = []) {

    const result = [];

    for (let i = 0; i < studentsArr.length; i++) {
        result.push([studentsArr[i], marksArr[i]]);
    }

    return result;

}

const studentsWithMarks = getStudentsWithMarks(students, marks);
console.log('Students with marks: ', studentsWithMarks);

function getPairsWithMarks(pairsWithThemeArr = []) {

    const result = [];

    for (let i = 0; i < pairsWithThemeArr.length; i++) {
        let randomMark = Math.floor(Math.random() * 5) + 1;
        result.push([pairsWithThemeArr[i][0], pairsWithThemeArr[i][1], randomMark]);
    }

    return result;

}

const pairsWithMarks = getPairsWithMarks(pairsWhithTheme);
console.log('Pairs with random marks: ', pairsWithMarks);
const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

function getSubjects(studentObj) {
    return Object.keys(studentObj.subjects).map((curVal) => {
        curVal = curVal[0].toUpperCase() + curVal.slice(1);
        return curVal.replaceAll('_', ' ');
    });
}

console.log('Function #1: ', getSubjects(students[0]));

function getAverageMark(studentObj) {
    const allMarks = Object.values(studentObj.subjects).reduce((total, curVal) => {
        return total.concat(curVal);
    }, []);
    const sum = allMarks.reduce((totalVal, curVal) => {
        return totalVal + curVal;
    }, 0);
    return Number((sum / allMarks.length).toFixed(2));
}

console.log('Function #2: ', getAverageMark(students[0]));

function getStudentInfo(studentObj) {
    const studentInfo = {
        name: studentObj.name,
        course: studentObj.course,
        averageMark: getAverageMark(studentObj)
    };
    return studentInfo;
}

console.log('Function #3: ', getStudentInfo(students[0]));

function getStudentsNames(studentsArr) {
    const names = [];
    studentsArr.forEach((value, index) => {
        names.push(value['name']);
    });
    return names.sort();
}

console.log('Function #4: ', getStudentsNames(students));

function getBestStudent(studentsArr) {
    let bestStudent = '';
    let maxMark = 0;
    studentsArr.forEach((value, index) => {
        let curMark = getAverageMark(value);
        if (curMark > maxMark) {
            bestStudent = value.name;
            maxMark = curMark;
        }    
    });
    return bestStudent;
}

console.log('Function #5: ', getBestStudent(students));

function calculateWordLetters(str = '') {
    const wordLetters = Array.from(str).reduce((resObj, curVal) => {
        if (resObj[curVal]) {
            resObj[curVal] +=1;
        } else {
            resObj[curVal] = 1;
        }
        return resObj;
    }, {});
    return wordLetters;
}

console.log('Function #6: ', calculateWordLetters('test'));
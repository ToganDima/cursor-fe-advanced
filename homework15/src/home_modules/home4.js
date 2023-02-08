export function getStudentsPairs(studentsArr = []) {
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

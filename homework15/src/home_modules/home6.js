export function getSubjects(studentObj) {
  return Object.keys(studentObj.subjects).map((curVal) => {
    curVal = curVal[0].toUpperCase() + curVal.slice(1);
    return curVal.replaceAll("_", " ");
  });
}

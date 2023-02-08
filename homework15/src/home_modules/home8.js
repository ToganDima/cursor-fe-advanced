class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marksArr = [5, 4, 4, 5];
    this.studentStatus = true;
  }
  getInfo() {
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }
  get marks() {
    return this.studentStatus ? this.marksArr : null;
  }
  set marks(value) {
    if (this.studentStatus) {
      this.marksArr.push(value);
    }
  }
  getAverageMark() {
    return (
      this.marksArr.reduce((sum, curVal) => {
        return sum + curVal;
      }, 0) / this.marksArr.length
    );
  }
  dismiss() {
    this.studentStatus = false;
  }
  recover() {
    this.studentStatus = true;
  }
}

export { Student };

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
        return (this.studentStatus) ? this.marksArr : null;
    }
    set marks(value) {
        if (this.studentStatus) {
            this.marksArr.push(value);
        }
    }
    getAverageMark() {
        return this.marksArr.reduce((sum, curVal) => {
            return sum + curVal;
        }, 0) / this.marksArr.length;
    }
    dismiss() {
        this.studentStatus = false;
    }
    recover() {
        this.studentStatus = true;
    }
}

class BudgetStudent extends Student {
    constructor(university, course, fullName, scholarship = 1400) {
        super(university, course, fullName);
        this.scholarship = scholarship;
        setInterval(() => this.getScholarship(), 30000);
    }
    getScholarship() {
        if (this.studentStatus && this.getAverageMark() >= 4) { 
            console.log(`Ви отримали ${this.scholarship} грн. стипендії.`);
        }
    }
}

const student1 = new Student("Вищоа Школа Психотерапії м.Одеса,", 2, "Остап Родоманський Бендер");
const student2 = new BudgetStudent("ЛНУ ім.Івана Франка", 4, "Василько Василь Васильович");
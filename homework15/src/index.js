import { getMaxPrice } from "./home_modules/home1"; 
import { getSum } from "./home_modules/home2";
import { getMaxDigit } from "./home_modules/home3";
import { getStudentsPairs } from "./home_modules/home4";
import { getRandomArray } from "./home_modules/home5";
import { getSubjects } from "./home_modules/home6";
import { getMySalary } from "./home_modules/home7";
import { Student } from "./home_modules/home8";
import { createBoxes } from "./home_modules/home9";
import { getRandomChinese } from "./home_modules/home10";
import { getFilmData } from "./home_modules/home11";
import { createIdGenerator } from "./home_modules/home12";

import maleImg from "./images/male.png";
import femaleImg from "./images/female.png";
import naImg from "./images/na.png";

import "./styles/style.css";

let maxPrice = getMaxPrice(5, 120, 44);
document.querySelector('#hw1').textContent = `Homework 1. Function getMaxPrice: ${maxPrice}`;

let sum = getSum(2, 6, true);
document.querySelector('#hw2').textContent = `Homework 2. Function getSum: ${sum}`;

let maxDigit = getMaxDigit(73951);
document.querySelector('#hw3').textContent = `Homework 3. Function getMaxDigit: ${maxDigit}`;

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const pairs = getStudentsPairs(students);
document.querySelector('#hw4').textContent = `Homework 4. Function getStudentsPairs: ${pairs}`;

let randomArr = getRandomArray(6, 2, 100);
document.querySelector('#hw5').textContent = `Homework 5. Function getRandomArray: ${randomArr}`;

const studentsArr = {
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}
    
let subjects = getSubjects(studentsArr);
document.querySelector('#hw6').textContent = `Homework 6. Function getSubjects: ${subjects}`;

const ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476,
};
let salary = getMySalary(ukraine);
document.querySelector('#hw7').textContent = `Homework 7. Function getMySalary: output in console`;

const stud1 = new Student("LNU", 4, "Dmytro Tohan");
const studentInfo = stud1.getInfo();
document.querySelector('#hw8').textContent = `Homework 8. Function getInfo: ${studentInfo}`;

let boxes = createBoxes();
document.querySelector('#hw9').textContent = `Homework 9. Function createBoxes`;

let randomChinese = getRandomChinese(6);
document.querySelector("#hw10").textContent = `Homework 10. Function getRandomChinese: output in console`;

let filmData = getFilmData();
document.querySelector("#hw10").textContent = `Homework 11. Function getFilmData: output in console`;

const imgBox = document.querySelector(".images-cont");

const male = document.createElement('img');
male.src = maleImg;
imgBox.append(male);

const female = document.createElement("img");
female.src = femaleImg;
imgBox.append(female);

const na = document.createElement("img");
na.src = naImg;
imgBox.append(na);

document.querySelector("#hw12").textContent = `Homework 12. Function createIdGenerator: output in console`;
let idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);





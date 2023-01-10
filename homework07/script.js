const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 
};
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
};
const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};

function getMyTaxes(salary) {
    return this.tax * salary;
}
console.log('Function #1: ', getMyTaxes.call(ukraine, 3000));

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
} 
console.log('Function #2: ', getMiddleTaxes.call(latvia));

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}
console.log('Function #3: ', getTotalTaxes.call(litva));

function getMySalary(country) {
    setInterval(function() {
        let salary = Math.floor(Math.random() * 501) + 1500; 
        let taxes = getMyTaxes.call(country, salary);
        let profit = salary - taxes;
        console.log({ salary, taxes, profit });
    }, 10000);
}
getMySalary(ukraine);
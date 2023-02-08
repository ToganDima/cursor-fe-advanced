function getMyTaxes(salary) {
  return this.tax * salary;
}

export function getMySalary(country) {
  setInterval(function () {
    let salary = Math.floor(Math.random() * 501) + 1500;
    let taxes = getMyTaxes.call(country, salary);
    let profit = salary - taxes;
    console.log({ salary, taxes, profit });
  }, 10000);
}

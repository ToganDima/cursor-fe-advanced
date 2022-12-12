
let battery70Ah = 15.678; 
let battery150Ah = 123.965;
let battery100Ah = 90.2345;

let maxPrice = Math.max(battery70Ah, battery150Ah, battery100Ah);
document.writeln(`<p>Максимальна ціна: ${maxPrice}</p>`);

let minPrice = Math.min(battery70Ah, battery150Ah, battery100Ah);
document.writeln(`<p>Мінімальна ціна: ${minPrice}</p>`);

let sum = battery100Ah + battery150Ah + battery70Ah;
document.writeln(`<p>Вартість всіх товарів: ${sum}</p>`);

let amount = Math.floor(battery100Ah) + Math.floor(battery150Ah) + Math.floor(battery70Ah);
console.log(`Ціла вартість всіх товарів: ${amount}</p>`);

let roundSum = Math.round(sum / 100) * 100 ; 
document.writeln(`<p>Вартість всіх товарів округлена до сотень: ${roundSum}</p>`);

document.writeln(`<p>Сума товарів парне число: `, (amount % 2 === 0), `</p>`);

document.writeln(`<p>Сума решти: ${500 - sum}`, `</p>`);

let average  = (sum / 3).toFixed(2);
document.writeln(`<p>Середнє значення цін: ${average}`, `</p>`);

let discount = Math.floor(99 * Math.random() + 1); 
document.writeln(`<p>Знижка: ${discount} %</p>`);

let discountPrice = (sum - sum * discount / 100).toFixed(2); 
document.writeln(`<p>Сума до оплати зі знижкою: ${discountPrice}</p>`);

let profit = (sum / 2 - sum * discount / 100).toFixed(2);
document.writeln(`<p>Чистий прибуток: ${profit} </p>`);
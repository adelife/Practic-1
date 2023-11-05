/**

 *? Використовуючи функцію if...else,

 *? напишіть код, який запитуватиме:

 *? "Яка офіційна назва JavaScript?"

 *? Якщо користувач вводить "ECMAScript",

 *? то показати через alert: "Вірно!"

 *? інакше відобразити:"Не знаєте? ECMAScript!"

 */

// function ask() {
//   const answer = prompt('Яка офіційна назва JavaScript?');
//   if (answer !== null && answer.toLowerCase().trim() === 'ecmascript') {
//     alert('Вірно!');
//   } else {
//     alert('Не знаєте? ECMAScript!');
//   }
// }

// ask();
/*
Напишіть програму, яка отримає від користувача
 число (кількість хвилин) та виведе в консоль
 рядок у форматі годин та хвилин
 https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 70 === 01:10
 */

const time = prompt('Enter your number!');
const hour = String(Math.floor(time / 60)).padStart(2, '0');
const minutes = String(time % 60).padStart(2, '0');
console.log(`${hour}:${minutes}`);

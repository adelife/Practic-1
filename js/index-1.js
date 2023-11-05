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

// const time = prompt("Enter your number!");
// const hour = String(Math.floor(time / 60)).padStart(2, "0");
// const minutes = String(time % 60).padStart(2, "0");
// console.log(`${hour}:${minutes}`);

/**
 *? Напишіть цикл, який виводить у консоль
 *? всі парні числа  від max до min  за спаданням
 */

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i--) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/**
 *? При завантаженні сторінки користувачеві пропонується
 *? в prompt ввести число. Введення додається до значення
 *? змінної total.
 *? Операція введення числа триває до того часу,
 *? поки користувач не натисне кнопку Cancel у prompt.
 *? Після того як користувач припинив введення, натиснувши на
 *? кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
 
 *! Робити перевірку, що користувач ввів саме число,
 *! а не довільний набір символів не потрібно.
 */
// let number = prompt(`Enter your number`);
// let total = 0;
// while (number !== null) {
//   total += Number(number);
//   number = prompt(`Enter your number`);
// }
// alert(`Загальна сума введених чисел дорівнює ${total}`);

/**
 *? Напишіть цикл, який пропонує ввести
 *? число більше 100 через prompt.
 *? Якщо відвідувач ввів інше число – попросити
 *? ввести ще раз і таке інше.
 *? Цикл повинен питати число, поки відвідувач не
 *? введе число більше 100 або не натисне кнопку
 *? Скасування в prompt
 */

let number = prompt("Enter number > 100");
while (number <= 100 && number!==null )
{
  number = prompt("Enter number > 100");
}

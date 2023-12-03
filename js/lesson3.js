// ? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 },
// ];

// const updateFruits = (arrayFruits) => {
//   return arrayFruits.map((fruit, indx) => {
//     return { ...fruit, price: fruit.price * 0.8, id: indx+1 };
//   });
// };

// // 2 варіант
// const updateFruits = (arrayFruits) =>
//      arrayFruits.map((fruit, indx) =>
//       ({ ...fruit, price: fruit.price * 0.8, id: indx+1 })
//     );

//   console.log(updateFruits(fruits));

/**
*? Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

 */
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// function counterTags(tweets) {
//   const newArray = tweets.flatMap((tweet) => tweet.tags);
//   console.log(newArray);
//   return newArray.reduce((acc, tag) => {
//     console.log(acc);
//     return { ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 };
//   }, {});
// }
// console.log(counterTags(tweets));

/**
 *? З об'єкту concerts потрібно отримати масив
 *? в якому будуть лише імена міст.
 *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
 *? відсортувати їх у хронологічному порядку.
 *? Результат вивести у консоль.
 *? Очікуваний результат ["Одеса", "Умань", "Харків"]
 */
// const concerts = {
//   Київ: new Date("2020-04-01"),
//   Умань: new Date("2025-07-02"),
//   Вінниця: new Date("2020-04-21"),
//   Одеса: new Date("2025-03-15"),
//   Хмельницький: new Date("2020-04-18"),
//   Харків: new Date("2025-07-10"),
// };

// const towns = Object.keys(concerts);
// const filterTowns = towns
//   .filter((town) => concerts[town] > new Date())
//   .sort((a, b) => concerts[a] - concerts[b]);
// console.log(filterTowns);

//TODO:=============================================

/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */

//  class Client {
//   #login;
//   #email;
//   constructor (login, email){
// this.#login = login;
// this.#email = email;
//   }
//   get login (){
//     return this.#login;
//   }
//   set login (newLogin){
//     this.#login = newLogin;
//   }
//   get email (){
//     return this.#email;
//   }
//   set email (newEmail){
//     this.#email = newEmail;
//   }
//  }
//  const newClient = new Client(`John`, `Johnmail`);
//  console.log(newClient);
// newClient.email = `JohnNewEmail`;
// console.log(newClient.email);

/*Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/

const someFn = `function foo() {
  const arr = [1, 2, 3];
  console.log(arr);
}`;

console.log(checkBrackets(someFn));



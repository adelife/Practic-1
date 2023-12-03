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
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

function counterTags(tweets) {
  return tweets
    .flatMap((tweet) => tweet.tags)
    .reduce((acc, tag) => {
      console.log(acc);
      return { ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 };
    }, {});
}
console.log(counterTags(tweets));

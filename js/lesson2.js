/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

//  const user = {
//     name: "John",
//     age: 20,
//     hobby: "tennis",
//     premium: true,
//   };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// const keys = Object.keys(user);
// for (const key of keys){
//     console.log(key);
//     console.log(`${key}:${user[key]}`)
// }

// console.log(user);

/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */

// const someObj = {
//   worker1: 360,
//   worker2: 750,
//   worker3: 240,
// };

// function totalSalary(obj){
//   const arSalary = Object.values(obj);
//   console.log(arSalary);
//   let sumRezult =0;
//   for (const eleven of arSalary){
//     sumRezult += eleven;
//   }
// return sumRezult;

// }
// console.log(totalSalary(someObj));

/**
 *? Напишіть ф-цію calcTotalPrice(someStones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція рахує та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(someStones, stonesName) {
//   for (const obj of someStones) {
//     if (stonesName === obj.name) {
//       return obj.price * obj.quantity;
//     }
//   }
//   return `Камінь не знайдено`;
// }

// console.log(calcTotalPrice(stones, "аааа"));

///**
// *? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

// const fruits = [
//   { name: 'apple', price: 200 },
//   { name: 'orange', price: 300 },
//   { name: 'grapes', price: 750 },
// ];

// function updateFruits(array) {
//   let newFruits = [];
//   let id = 1;
//   for (const obj of array) {
//     const copyObj = { id, ...obj, price: obj.price * 0.8 };
//     newFruits.push(copyObj);
//     id += 1;
//   }
//   return newFruits;
// }

// console.log(updateFruits(fruits));
// console.log(fruits);

/**
 *? Записати масив, const arr = ['BEST', 'the', 'foo', 'is', 'JS' ]
 *? розвернути масив,
 *? вирізати foo,
 *? перевести його в рядок розділений пробілами
 *? Очікуваний результат "JS is the BEST"
 */

/* массив arr не має мутуватися */

// const arr = ["BEST", "the", "foo", "is", "JS"];
// // const copyArr = [...arr];
// // copyArr.reverse();
// // const index = copyArr.indexOf("foo");
// // copyArr.splice(index, 1);
// // const string = copyArr.join(" ");

// // console.log(arr);
// // console.log(copyArr);
// // console.log(string);

// const rezult = arr
//   .slice(0, arr.indexOf("foo"))
//   .concat(arr.slice(arr.indexOf("foo") + 1))
//   .reverse()
//   .join(" ");
// console.log(rezult);

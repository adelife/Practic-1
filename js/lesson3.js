// ? Напишіть функцію, яка приймає массив об'єктів і повертає новий массив
// *? Зробіть знижку 20 % на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

// const updateFruits = (arrayFruits) => {
//   return arrayFruits.map((fruit, indx) => {
//     return { ...fruit, price: fruit.price * 0.8, id: indx+1 };
//   });
// };




// 2 варіант
const updateFruits = (arrayFruits) => 
     arrayFruits.map((fruit, indx) => 
      ({ ...fruit, price: fruit.price * 0.8, id: indx+1 })
    );
  
  console.log(updateFruits(fruits));
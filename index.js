//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

// const formInputRef = document.querySelector("#alertInput")
// const btnRef = document.querySelector("#alertButton")
// btnRef.addEventListener("click", () => {
//     console.log(formInputRef.value);
// })

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const firstInputEl = document.querySelector("#leftSwapInput");
// const secondInputEl = document.querySelector("#rightSwapInput");
// const swapBtnEl = document.querySelector("#swapButton");
// swapBtnEl.addEventListener("click", () => {
//   //1 варінат
//   const firstInputValue = firstInputEl.value;
//   const secondInputValue = secondInputEl.value;
//   secondInputEl.value = firstInputValue;
//   firstInputEl.value = secondInputValue;

//2 варінат
// const firstInputValue = firstInputEl.value;
//   firstInputEl.value = secondInputEl.value;
//   secondInputEl.value = firstInputValue;
// });
//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// const formInputRef = document.querySelector('#passwordInput');
// const btnRef = document.querySelector('#passwordButton');
// btnRef.addEventListener('click', () => {
//   if (formInputRef.getAttribute('type') === 'password') {
//     formInputRef.setAttribute('type', 'text');
//     btnRef.textContent = 'Приховати';
//     return;
//   }
//   formInputRef.setAttribute('type', 'password');
//   btnRef.textContent = 'Розкрити';
// });

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/
// const decreaseBtnRef = document.querySelector('#decrease');
// const increaseBtnRef = document.querySelector('#increase');
// const boxRef = document.querySelector('#box');
// decreaseBtnRef.addEventListener('click', () => {
//   const sizeBox = parseInt(getComputedStyle(boxRef).width);
//   boxRef.style.width = sizeBox - 10 + 'px';
//   boxRef.style.height = sizeBox - 10 + 'px';
// });
// increaseBtnRef.addEventListener('click', () => {
//   const sizeBox = parseInt(getComputedStyle(boxRef).width);
//   boxRef.style.width = sizeBox + 10 + 'px';
//   boxRef.style.height = sizeBox + 10 + 'px';
// });
//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/
// window.addEventListener('click', () => {});
// аналогічно без window:

addEventListener('click', event => {
  console.log(event.currentTarget);
  console.log(event.target);
  if (event.target.id === 'place') {
    console.log(true);
  } else {
    console.log(false);
  }
});

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

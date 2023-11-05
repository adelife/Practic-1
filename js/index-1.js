/**

 *? Використовуючи функцію if...else,

 *? напишіть код, який запитуватиме:

 *? "Яка офіційна назва JavaScript?"

 *? Якщо користувач вводить "ECMAScript",

 *? то показати через alert: "Вірно!"

 *? інакше відобразити:"Не знаєте? ECMAScript!"

 */

 function ask(){
    const answer= prompt("Яка офіційна назва JavaScript?");
    if(answer !== null &&  answer.toLowerCase().trim() === "ecmascript"){
     alert("Вірно!");
    } else{
        alert("Не знаєте? ECMAScript!");
    }
 }

ask()
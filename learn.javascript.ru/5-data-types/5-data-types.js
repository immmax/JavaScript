"use strict";

// РАЗДЕЛ 5 - Типы данных

// 5.2 - Числа

// Задача - Сумма пользовательских чисел
// let a = +prompt("a?", '')
// let b = +prompt("b?", '')
// alert( a + b )

// или

// alert( +prompt(`a?`) + +prompt(`b?`))


// Задача - Почему 6.35.toFixed(1) == 6.3?

// alert( 6.35.toFixed(1) );
// alert( Math.round(6.35 * 10) / 10 );


// Задача - Ввод числового значения
// function readNumber() {
//   let userInput;

//   do {
//     userInput = prompt("Enter a number")

//     switch (userInput) {
//       case "": return null;
//       case null: return null;
//     }
//   } while ( !isFinite(userInput) );

//   return +userInput
// }

// let number = readNumber()
// alert( number )


// Задача - Бесконечный цикл по ошибке
// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) alert( i );
// }


// Задача - Случайное число от min до max
// function random(min, max) {
//   console.log( min + (max - min) * Math.random() )
// }

// while (true) {
//   random(-4, 7)
// }



// Задача - Случайное целое число от min до max
// function randomInteger(min, max) {
//   let number = min + (max + 1 - min) * Math.random()

//   return Math.floor(number)
// }

// let stat = {
//   "1": 0,
//   "2": 0,
//   "3": 0,
//   "5": 0,
//   "6": 0,
//   "7": 0,
//   "4": 0,
//   "8": 0,
//   "9": 0,
//   "10": 0
// }

// for (let i = 0; i < 100; i++) {
//   stat[randomInteger(1, 10)] += 1
// }

// console.log(stat)
"use strict";

// РАЗДЕЛ 5 - Типы данных

// 5.2 - ЧИСЛА

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


// 5.3 - СТРОКИ

// Задача - Сделать первый символ заглавным
function ucFirst(str) {
  if (str == '') return ''
  return str[0].toUpperCase() + str.slice(1)
}

// Задача - Проверка на спам
function checkSpam(str) {
  str.toLowerCase().includes('viagra') ||
  str.toLowerCase().includes('xxx')
}

// Задача - Усечение строки
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.substr(0, maxlength-1) + '…'
  }

  return str
}

// Задача - Выделить число
function extractCurrencyValue(str) {
  return +str.slice(1)
}


// 5.4 - МАССИВЫ

// Задача - Операции с массивами
let styles = ["Джаз", "Блюз"];
console.log( styles );

styles.push("Рок-н-ролл");
console.log( styles );

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Классика";
console.log( styles );

styles.shift();
console.log( styles );

styles.unshift("Рэп", "Регги");
console.log( styles );


// Задача - Сумма введённых чисел
function sumInput() {
  let arr = []

  while (true) {
    let newValue = prompt("Введите ЧИСЛО:")

    // return alert(newValue)

    if (!isFinite(newValue) || newValue == '' || newValue == null) {
      break
    }

    arr.push(+newValue)
  }
  let result = 0

  for (let item of arr) {
    result += item;
  }

  return alert( result )
}

// sumInput()

// Задача - Подмассив наибольшей суммы
function getMaxSubSum(arr) {
  let maxSum = 0

  let currentSum = 0

  for (let item of arr) {
    function getMaxSubSum(arr) {
    let maxSum = 0

    let currentSum = 0

    for (let item of arr) {
      currentSum += item

      if (currentSum < 0) {
        currentSum = 0
      }

      if ( currentSum > maxSum ) {
        maxSum = currentSum
      }
    }
  }
    return maxSum
  }
}
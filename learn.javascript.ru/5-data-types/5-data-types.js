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
  if (str == "") return "";
  return str[0].toUpperCase() + str.slice(1);
}

// Задача - Проверка на спам
function checkSpam(str) {
  str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx");
}

// Задача - Усечение строки
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.substr(0, maxlength - 1) + "…";
  }

  return str;
}

// Задача - Выделить число
function extractCurrencyValue(str) {
  return +str.slice(1);
}

// 5.4 - МАССИВЫ

// Задача - Операции с массивами
// let styles = ["Джаз", "Блюз"];
// console.log( styles );

// styles.push("Рок-н-ролл");
// console.log( styles );

// let middleIndex = Math.floor(styles.length / 2);
// styles[middleIndex] = "Классика";
// console.log( styles );

// styles.shift();
// console.log( styles );

// styles.unshift("Рэп", "Регги");
// console.log( styles );

// Задача - Сумма введённых чисел
// function sumInput() {
//   let arr = []

//   while (true) {
//     let newValue = prompt("Введите ЧИСЛО:")

//     if (!isFinite(newValue) || newValue == '' || newValue == null) {
//       break
//     }

//     arr.push(+newValue)
//   }
//   let result = 0

//   for (let item of arr) {
//     result += item;
//   }

//   return alert( result )
// }

// sumInput

// Задача - Подмассив наибольшей суммы
// function getMaxSubSum(arr) {
//   let maxSum = 0
//   let currentSum = 0

//   for (let item of arr) {
//     currentSum += item

//     if (currentSum < 0) {
//       currentSum = 0
//     }

//     if ( currentSum > maxSum ) {
//       maxSum = currentSum
//     }
//   }

//   return maxSum
// }

// 5.5 - МЕТОДЫ МАССИВОВ

// Задача - Переведите текст вида border-left-width в borderLeftWidth
// function capitalize(str) {
//   if (str == "") return "";
//   return str[0].toUpperCase() + str.slice(1);
// }

// function camelize(str) {
//   let arr = str.split("-");

//   let result = arr[0];
//   result += arr
//     .slice(1)
//     .map((item) => capitalize(item))
//     .join("");

//   return result;
// }

// Задача - Фильтрация по диапазону
// function filterRange(arr, a, b) {
//   return arr.filter((item) => a <= item && item <= b);
// }

// Задача - Фильтрация по диапазону "на месте"
// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if (a > arr[i] || arr[i] > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// Задача - Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// alert( arr ); // 8, 5, 2, 1, -10

// Задача - Скопировать и отсортировать массив
// function copySorted(arr) {
//   return arr.slice().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// OR
// let sorted = arr.toSorted();

// console.log( arr ); // HTML, JavaScript, CSS (без изменений)
// console.log( sorted ); // CSS, HTML, JavaScript

// Задача - Создать расширяемый калькулятор
// function Calculator() {
//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b,
//   };

//   this.calculate = function (str) {
//     let arr = str.split(" ");
//     let a = +arr[0];
//     let action = arr[1];
//     let b = +arr[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[action](a, b);
//   };

//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// }

// Задача - Трансформировать в массив имён
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];
// let names = users.map(item => item.name)
// OR
// let names = users.reduce((accum, item) => {
//   accum.push(item.name);
//   return accum
// }, [])

// console.log( names ); // Вася, Петя, Маша

// Задача - Трансформировать в объекты
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map( user =>
//   ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id,
//   }), [])

// console.log( usersMapped )

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин


// Задача - Отсортировать пользователей по возрасту
// function compareUsersAge(a, b) {
//   if (a.age > b.age) return 1;
//   if (a.age == b.age) return 0;
//   if (a.age < b.age) return -1;
// }

// function sortByAge(users) {
//   // users.sort(compareUsersAge);
//   // OR
//   users.sort( (a, b) => a.age - b.age);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// alert(JSON.stringify(arr));
// console.log(arr); // WARNING: выводит уже отсортированный массив
// sortByAge(arr);
// console.log(arr);

// теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя


// Задача - Перемешайте массив
// function shuffle(array) {
//   return array.sort( () => Math.random() - 0.5);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log( shuffle(arr) );
// // arr = [3, 2, 1]

// console.log( shuffle(arr) );
// // arr = [2, 1, 3]

// console.log( shuffle(arr) );
// // arr = [3, 1, 2]

// Задача - Получить средний возраст
// function getAverageAge(users) {
//   return users.reduce( (sum, user) => sum + user.age, 0) / users.length
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// Задача - Оставить уникальные элементы массива
// function unique(arr) {
//   let uniqueArray = [];

  // for ( let item of arr ) {
  //   if ( !uniqueArray.includes(item) ) {
  //     uniqueArray.push(item)
  //   }
  // }
  // OR
  // arr.forEach((item) => {
  //   if (!uniqueArray.includes(item)) {
  //     uniqueArray.push(item);
  //   }
  // });
  //OR
  // return arr.reduce( (accumulator, item) => {
  //   if (!accumulator.includes(item)) {
  //     accumulator.push(item);
  //   };
  //   return accumulator;
  // }, [])

  // return uniqueArray;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// console.log( unique(strings) ); // кришна, харе, :-O
// console.log(Array.from(new Set([1, 2, 3, 3, 4, 5, 5]))); // кришна, харе, :-O

// Задача - Создайте объект с ключами из массива
// function groupById(arr) {
//   let result = {}
//   arr.forEach(item => result[item.id] = item );
//   return result
// }

// function groupById(arr) {
  // return arr.reduce((accum, item) => {
  //     accum[item.id] = item;
  //     return accum;
  //   }, {});
// }

// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];

// let usersById = groupById(users);

// alert(JSON.stringify(usersById));
// console.log(usersById);

// console.log(Object.groupBy(users, ({id}) => id));


// 5.7 - Map и Set

// Задача - Фильтрация уникальных элементов массива
function unique(arr) {
  return Array.from(new Set(arr));
}


// Задача - Отфильтруйте анаграмы
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//   let unique = new Map();
//   arr.forEach((item) => {
//     unique.set(Array.from(item.toLowerCase()).sort().join(""), item);
//   });

//   return Array.from(unique.values())

//   // console.log(Array.from(unique.values()));
// }

// aclean(arr);


// Задача - Перебираемые ключи
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
// OR
// let keys = [...map.keys()];
console.log(keys)
keys.push("more");
console.log(keys);
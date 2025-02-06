"use strict";

// let user = {
//   name: "Jonh",
//   age: 30,
//   isAdmin: true,
// }

// for (let key in user) {
//   console.log(key)
//   console.log(user[key])
// }

// ЗАДАНИЕ - Привет, object
// let user = {};
// user["name"] = "John";
// user["surname"] = "Smith";
// user["name"] = "Pete"
// delete user["name"]

// ЗАДАНИЕ - Проверка на пустоту
// const schedule = {};

// const isEmpty = function(object) {
//   let countKey = 0

//   for (let key in object) {
//     countKey += 1
//   }

//   return (countKey === 0)
// }

// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false


// ЗАДАНИЕ - Сумма свойств объекта
// let salaries = {}

// const countSalaries = function(object) {
//   let sum = 0

//   for (let name in object) {
//     sum += object[name]
//   }

//   return sum
// }

// console.log(countSalaries(salaries))

// salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// console.log(countSalaries(salaries))


// ЗАДАНИЕ - Умножаем все числовые свойства на 2

// function multiplyNumeric(obj) {
//   for (let prop in obj) {
//     if (typeof (obj[prop]) === "number") {
//       obj[prop] *= 2
//     }
//   }
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// console.log(menu);
// multiplyNumeric(menu);
// console.log(menu);

// РАЗДЕЛ 4.4
// ЗАДАНИЕ - Создайте калькулятор

// let calculator = {
//   read() {
//     this.a = +prompt("a?", ""),
//     this.b = +prompt("b?", "")
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   }
// }

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// ЗАДАНИЕ - Цепь вызовов

// let ladder = {
//   step: 0,
//   up() {
//     return this.step++;
//   },
//   down() {
//     return this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };

// РАЗДЕЛ 4.5
// Задача - Калькулятор

function Calculator() {
  this.read = function() {
    this.a = +prompt("a?", ""),
    this.b = +prompt("b?", "")
  },

  this.sum = function() {
    return this.a + this.b;
  },

  this.mul = function() {
    return this.a * this.b;
  }
}

// Задача - Аккумулятор

function Accumulator(startingValue) {
  this.value = startingValue

  this.read = function() {
    this.value += +prompt("New Number?", "")
  }
}
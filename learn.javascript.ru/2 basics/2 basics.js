"use strict";
// let message = 'I am JavaScript!'
// alert(message);

// let username = "datskiy_dev"
// let age = 29
// let city = 'Seattle, WA'
// alert(`My name is ${username}, I'm ${age}! And I'm iOS Developer from ${city}.`)
// age = 25
// alert("My name is {username}, I'm {age}! And I'm iOS Developer from {city}.")


// const startLearningJS = '2025.01.15'

// let admin;
// let name = "John";

// admin = name;
// alert(admin);

// let ourPlanetName = "Earth"
// let currentUserName = "Unknown Artist";

// alert(`Привет ${1+2}`)

// let result = prompt("Hey! What is your name?", "");
// let result = prompt("Hey! What is your age?", "");
// console.log(result)
// console.log(typeof result)
// result = Number(result)
// console.log(result)
// console.log(typeof result)


// let result = confirm("Are you here?")
// console.log(result)

// let result = " 29 y.o.   "
// console.log(result)

// result = Number(result)
// console.log(result)

// result = " 29    "
// result = Number(result)
// console.log(result)


// Chapter 2.9
// true
// false
// false - wrong
// true
// false
// true
// false


// Chapter 2.10
// let officialName = prompt("What is the official name of JavaScript?");

// if ( officialName == "ECMAScript") {
//   alert("Correct!")
// } else {
//   alert("You're wrong.")
// }

// let value = prompt("Enter any number","")

// if (value > 0) {
//   alert(1)
//  } else if (value < 0) {
//   alert(-1)
//  } else {
//   alert(0)
//  }

// let result = (a + b < 4) ? "Not enough..." : "That's a lot!"
// let message = (login == 'Сотрудник') ? "Привет" :
// (login == 'Директор') ? "Здравствуйте" :
// (login == '') ? "Нет логина" :
// ""

// if (!(14 <= age && age <= 90))

// if (90 < age || age < 14)

// username = prompt("Enter username", '')

// if (username === "Админ") {
//   let password = prompt("Enter password", '')

//   if (password === "Я главный") {
//     alert("Здравствуйте")
//   } else if (password != "Я главный") {
//     alert("Неверный пароль")
//   } else {
//     alert("Отменено")
//   }
// } else if (username != "Админ") {
//   alert("Я вас не знаю")
// } else {
//    alert("Отменено")
// }

// let num1 = 10,
//     num2 = 20,
//     result;

// if (result === null || result === undefined) {
//   if (num1 !== null && num1 !== undefined) {
//     result = num1;
//   } else {
//     result = num2;
//   }
// }

// result ??= num1 ?? num2

// for (let i = 2, i <= 10, i++) {
//   if (i % 2) continue;
//   alert(i)
// }

// let i = 0
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++
// }
let result;

do {
  result = prompt("Enter a number over 100", "");
} while (result) <= 100 && result);
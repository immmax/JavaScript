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


// let result;

// do {
//   result = prompt("Enter a number over 100", "");
// } while (result <= 100 && result);

// let n = +prompt("Enter a number", "73")
// let result = '';

// outer: for(let i = 2; i <= n; i++) {
//   for(let j = 2; j <= i / 2; j++) {
//     if (i % j === 0) continue outer;
//   }
//   result += i + ' ';
// }

// alert(result)

// if (browser === 'Edge') {
//   alert( "You've got the Edge!" );
// } else if (['Chrome', 'Firefox', 'Safari', 'Opera'].includes(browser)) {
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// }

// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//   case 0:
//     alert('Вы ввели число 0');
//     break;

//   case 1:
//     alert('Вы ввели число 1');
//     break;

//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }

// function checkAge(age) {
//   return (age > 18) ? true: confirm('Родители разрешили?');
// }

// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }

// function min(a, b) {
//   return (a < b) ? a : b;
// }

// function pow(x, n) {
//   if (n >= 1 && n % 1 == 0) {
//     return x ** n
//   } else {
//     // bad idea to return a string
//     return `Степень ${n} не поддерживается, используйте натуральное число`
//   }
// }

// let x = prompt("X:"),
//     n = prompt("N:")

// alert( pow(x, n) )

// let sayHi = function() {
//   alert('hello, world')
// };

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => { alert("Вы согласились."); },
  () => { alert("Вы отменили выполнение."); }
);
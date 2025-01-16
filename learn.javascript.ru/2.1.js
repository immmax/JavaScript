"use strict";
let message = 'I am JavaScript!'
// alert(message);

let username = "datskiy_dev"
let age = 29
let city = 'Seattle, WA'
// alert(`My name is ${username}, I'm ${age}! And I'm iOS Developer from ${city}.`)
age = 25
// alert("My name is {username}, I'm {age}! And I'm iOS Developer from {city}.")


const startLearningJS = '2025.01.15'

let admin;
let name = "John";

admin = name;
// alert(admin);

let ourPlanetName = "Earth"
let currentUserName = "Unknown Artist";

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

let result = " 29 y.o.   "
console.log(result)

result = Number(result)
console.log(result)

result = " 29    "
result = Number(result)
console.log(result)


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
let message = (login == 'Сотрудник') ? "Привет" :
(login == 'Директор') ? "Здравствуйте" :
(login == '') ? "Нет логина" :
""
"use strict";

// РАЗДЕЛ 6 - Продвинутая работа с функциями

// 6.1 - РЕКУРСИЯ И СТЕК

// Задача - Вычислить сумму чисел до данного

// 1 - С использованием цикла
// function sumTo(n) {
//   let result = 0
//   for (let i = 1; i <= n; i++) {
//     result += i
//   }
//   return result
// }

// 2 - Через рекурсию
// function sumTo(n) {
//   if (n == 1) return n
//   return n + sumTo(n-1)
// }

// 3 - Через арифметическую прогрессию
// function sumTo(n) {
//   return n * (1 + n) / 2
// }

// console.log(sumTo(1))
// console.log(sumTo(2))
// console.log(sumTo(3))
// console.log(sumTo(4))
// console.log(sumTo(100))

// Задача - Вычислить факториал
// function factorial(n) {
//   if (n == 1) return 1
//   return n * factorial(n - 1)
// }

// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(3))
// console.log(factorial(4))
// console.log(factorial(5))

// Задача - Числа Фибоначчи
// function fib(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fib(n-1) + fib(n-2);
//   }
// }

// console.log( fib(3) )
// console.log( fib(7) )
// console.log( fib(77) )

// Задача - Вывод односвязного списка
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// function printList(list) {
//   console.log(list.value);
//   if (list.next) {
//     return printList(list.next);
//   }
// }

// printList(list);

// Задача - Вывод односвязного списка в обратном порядке
// function printListBackward(list) {
//   if (list.next) {
//     printListBackward(list.next);
//   }
//   console.log( list.value )
// }

// console.log(printListBackward(list));

// Раздел 6.3 - Область видимости переменных, замыкание

// Задача - Сумма с помощью замыканий
// function sum(a) {
//   return function (b) {
//     a + b;
//   };
// }

// Задача - Фильтрация с помощью функции
function inBetween(a, b) {
  return (item) => arr.slice(a, b).includes(item);
}

function inArray(arr) {
  return (item) => arr.includes(item);
}

// Задача - Сортировать по полю
function byField(str) {
  return (a, b) => (a[str] > b[str] ? 1 : -1);
}

// Задача - Армия функций
// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let k = i
//     let shooter = function() { // функция shooter
//       console.log( k );
//       return k; // должна выводить порядковый номер
//     };
//     shooters.push(shooter); // и добавлять стрелка в массив
//     i++;
//   }

//   // ...а в конце вернуть массив из всех стрелков
//   return shooters;
// }

// let army = makeArmy();

// // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
// army[0](); // 10 от стрелка с порядковым номером 0
// army[1](); // 10 от стрелка с порядковым номером 1
// army[2](); // 10 ...и т.д.
// army[3](); // 10 ...и т.д.
// army[4](); // 10 ...и т.д.
// army[5](); // 10 ...и т.д.
// army[6](); // 10 ...и т.д.
// army[7](); // 10 ...и т.д.

// Раздел 6.6 - Объект функции, NFE

// Задача - Установка и уменьшение значения счётчика
// function makeCounter() {
//   makeCounter.count = 0;

//   function counter() {
//     return makeCounter.count++;
//   }

//   counter.set = (value) => (makeCounter.count = value);

//   counter.decrease = () => makeCounter.count--;

//   return counter;
// }

// let counter = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1
// counter.set(10); // установить новое значение счётчика
// console.log(counter()); // 10
// counter.decrease(); // уменьшить значение счётчика на 1
// console.log(counter()); // 10 (вместо 11)


// Задача - Сумма с произвольным количеством скобок
// function sum(a) {
//   sum.counter = a

//   function f(b) {
//     sum.counter += b;
//     return f;
//   };

//   f.toString = () => sum.counter;

//   return f;
// }

// console.log(sum(1)(2) == 3) // 1 + 2
// console.log(sum(1)(2)(3) == 6) // 1 + 2 + 3
// console.log(sum(5)(-1)(2) == 6)
// console.log(sum(6)(-1)(-2)(-3) == 0)
// console.log(sum(0)(1)(2)(3)(4)(5) == 15)


// Раздел 6.8 - Объект функции, NFE

// Задача - Вывод каждую секунду
// function printNumbers(from, to) {
//   let counter = from

//   let timerId = setInterval(() => {
//     console.log(counter);
//     if (counter == to) {
//       clearInterval(timerId);
//     }
//     counter++;
//   }, 1000);
// }


function printNumbers(from, to) {
  let counter = from;

  let timerId = setTimeout(function next() {
    console.log(counter);
    if (counter < to) {
      setTimeout(next, 1000);
    }
    counter++;
  }, 1000);

}

printNumbers(3, 8)
console.log("В.С.Ё.");


// Задача - Что покажет setTimeout?
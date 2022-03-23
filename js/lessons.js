// let number = 4; 

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// console.log(answers);

// const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

// const user = "Roman";

// alert(`Hello , ${user}`);

// console.log('arr' + ' - object');
// console.log(4 + +'5');

// const isChecked = false,
//       isClose = false;

// console.log(isChecked || !isClose);

// exercise 12-13

// if ( 4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error')
// }

// Вечное условие 

// if (1) {
//     console.log('Ok!');
// } else {
//     console.log('Error')
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('More');
// } else {
//     console.log('Ok!');
// }

// Тернарный оператор

// (num === 50) ? console.log('Ok!') : console.log('Error');

// Конструкция switch 
// const num = 51;

// switch (num) {
//     case 49:
//         console.log('Error');
//         break;
//     case 100:
//         console.log('Error');
//         break;
//     case 50:
//         console.log('Correct');
//         break;
//     default:
//         console.log('Not today');
//         break;
// }

// Exercise 14

// let num = 50;

// while (num < 55) {
//     console.log(num);
// }
// Пример выше - бесконечный цикл

// 1й способ задавания цикла

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// 2й способ задавания цикла

// let num = 50;

// do {
//     console.log(num);
//     num++;  
// }
// while (num < 55);

// 3й способ задавания цикла

// let num = 50;

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// }

// Exercise 16
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a,b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//     console.log("Hello"); 
// };

// logger();

// const calc = (a, b) => a + b;

// Exercise 17
// const str = "test";
// // console.log(str[2] = 'd');
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";

// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));
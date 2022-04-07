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

// Lesson  12-13

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

// Lesson  14

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

// Lesson  16
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

// Lesson 17
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

// Lesson 19

// function first() {
//     // Do something

//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function leadrJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();  
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// leadrJS('JavaScript', done);

// Lesson  20
// const obj = new Object(); // - Одна из устаревших записей
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         background: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// }

// options.makeTest();

// const {border, background} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);
// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//        for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//        }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// Lesson  21

// const arr = [2, 13, 26, 8, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });



// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// Lesson  22
// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// }

// const copy = obj; // Ссылка

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (const key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'asasa';

// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'];
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newArray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// Lesson  23
// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);
// const soldier = {
//     health: 400,
//     aromor: 100,
//     sayHello: function() {
//         console.log("hello");
//     }
// };

// const jonh = Object.create(soldier);

// // const jonh = {
// //     health: 100
// // };

// // jonh.__proto__ = soldier;

// // Object.setPrototypeOf(jonh, soldier);

// jonh.sayHello();

// console.log(jonh.aromor);

// Lesson  25
// function hello() {
//     console.log("Hello World");
// }

// hello();

// function hi() {
//     console.log("Say hi!");
// }

// hi();

// const arr = [1, 14, 4, 30, 54],
//       sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }

// console.log(sorted);

// Lesson  26

// // To String 

// // 1)
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// // 2)
// console.log(typeof(5 + ''));

// const num  = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// console.log(fontSize);

// // To Number

// // 1)
// console.log(typeof(Number('4')));

// // 2) 
// console.log(typeof(+'4'));

// // 3)
// console.log(typeof(parseInt("15px", 10)));

// let answer = +prompt("Hello", "");

// // To Boolean

// // 1) 
// let switcher = null; 

// if (switcher) {
//     console.log("Working...");
// }

// switcher = 1;

// if (switcher) {
//     console.log("Working...");
// }

// // 2)
// console.log(typeof(Boolean('4')));

// // 3)
// console.log(typeof(!!'44444'));

// Lesson  26
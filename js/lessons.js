'use strict';

// Lesson  10
// const vehincleBodyWidth = 5000;
// const vehincleBodyLength = 4000;

// console.log("Ширина кузова автомобиля: " + vehincleBodyWidth + ', длина ' + vehincleBodyLength);

// ['vruru', 'ecrvrev', 'vvuug'].map(a =>) {}
// Request
// data 
// response 

// snake_case
// UPPER_SNAKE_CASE
// Kebab-case
// PascalCase

// const COLOR_RED = '#fff';
// cosnt _apeBase = '';

// Lesson  12
// const arr = ['a', 'b', 'c'];

// arr[10] = '3456';

// console.log(arr[10]);

// const arrObj = {
//     a: 'a',
//     1: 'b',
//     2: 'c',
//     abc: {
//         df: [{}, {}],
//         def: {

//         }
//     }
// }

// const b = 'b';

// // arrObj.b = '1234';
// arrObj[b]= '1234';

// console.log(arrObj['b']);
// console.log(arrObj.b);

// // const obj = {a: 1, b: 2};
// const obj = {
//     Anna: 500,
//     Alice: 800
// };

// Lesson  13

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// console.log(typeof(answers));
// console.log(typeof(null));

// Lesson 14

// const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

// const user = "Roman";

// alert(`Hello , ${user}`);

// Lesson 15

// console.log('arr' + ' - object');
// console.log(4 + +'5');

// let incr = 10,
//     decr = 10;

// // ++incr;
// // --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);
// console.log(2 + 2 + 2 !== '6');

// const isChecked = false,
//       isClose = false;

// console.log(isChecked || !isClose);

// Lesson  20

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

// Lesson  21
// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'asafaf');

// if (hamburger === 3 && cola === 1 && fries ) {
//     console.log('Все сыты!');
// } else {
//     console.log('Мы уходим!');
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Все довольны!');
// } else {
//     console.log('Мы уходим!');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

// console.log(!0);


// Lesson  22

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

// Lesson  23
// for ( let i = 0; i < 3; i++) {
//     console.log(i);

//     for ( let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for ( let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);

// first: for ( let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);

//     for ( let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);

//         for ( let k = 0; k < 5; k++) {
//             if ( k === 2) break first;

//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// Lesson  25

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

// Lesson 26
// const usdCurr = 28;
// const eurCurr = 32;

// function convert (amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// Lesson 27

// const usdCurr = 28;
// const discount = 0.9;

// function convert (amount, curr) {
//     return curr * amount;
// }

// function promotion (result) {
//     console.log(result * discount);
    
// }

// const res = convert(500, usdCurr);

// promotion(res);

// function test () {
//     for ( let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return;
//     }
//     console.log('done');
// }

// test();

// function doNothing () {};
// console.log(doNothing() === undefined);

// Lesson 28

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


// Lesson 31

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


// Lesson  32

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

// Lesson  33

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


// Lesson  35

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


// Lesson  36

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);
// const soldier = {
//     health: 400,
//     armor: 100,
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

// console.log(jonh.armor);



// Lesson  38

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



// Lesson  39

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



// Lesson  40

// let number = 5; debugger

// function logNumber() {
//     let number = 4; debugger
//     console.log(number);
// }

// number = 6;

// logNumber(); debugger

// number = 8;

// logNumber(); debugger

// function createCounter() {
//     let counter = 0;

//     const myFunction = function() { debugger
//         counter = counter + 1; debugger
//         return counter; debugger
//     }

//     return myFunction;
// }
// debugger
// const increment = createCounter(); debugger
// const c1 = increment(); debugger
// const c2 = increment(); debugger
// const c3 = increment(); debugger

// console.log(c1, c2, c3);

// for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//         let num = 3;
//     }

//     console.log(num);
// }



// Lesson  42

// const box = document.getElementById('box');
// console.log(box);

// const btns = document.getElementsByTagName('button');
// console.log(btns[0]);

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');
// console.log(hearts);

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);



// Lesson  43

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'),
//       oneHeart = wrapper.querySelector('.heart');
    

// // box.style.backgroundColor = 'blue';
// // box.style.width = '500px';

// box.style.cssText = 'background-color: blue; width: 300px;'

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor ='red';

// // for ( let i = 0; i < hearts.length; i++) {
// //     hearts[i].style.backgroundColor = 'blue';
// // }

// hearts.forEach(item => {
//     item.style.backgroundColor ='blue';
// });

// const div = document.createElement('div');
// // const text = document.createTextNode('Тут был я');

// div.classList.add('black');

// wrapper.append(div);
// // wrapper.appendChild(div);

// // wrapper.prepend(div);

// // hearts[0].before(div);
// // hearts[0].after(div);

// // wrapper.insertBefore(div, hearts[1]);

// // circles[0].remove;
// // wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// // wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = '<h1>Hello World</h1>';
// div.insertAdjacentHTML('afterend' , '<h2>Hello</h2>')

// // div.textContent = 'Hello';



// Lesson  45

// const btn = document.querySelector('button'),
//       btns = document.querySelectorAll('button'),
//       overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('Hello');
// }

// btn.addEventListener('click', () => {
//     alert('Hello');
// });

// btn.addEventListener('click', () => {
//     alert('Hello World');
// });

// let i = 0;

// const deleteElement = (e) => {
//    console.log(e.target);
//    console.log(e.type);
// //    i++;
// //    if (i == 1) {
// //     btn.removeEventListener('click', deleteElement);
// //    }
// };

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement, {once: true});
// });

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//     event.preventDefault();

//     console.log(event.target);
// });



// Lesson  46

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);


// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }

//     console.log(node);
// }


// Lesson  47

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result += x;
//         // result = x * result // идентичная запись
//     }

//     return result;
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// pow(2, 1);
// pow(2, 2);
// pow(2, 3);
// pow(2, 4);

// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, { 
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, { 
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }],

//         semi: {
//             students: [{
//                 name: "Test",
//                 progress: 100
//             }]
//         }
//     }
// };

// function getTotalProgressByIteration (data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++ ) {
//                 total += course[i].progress;
//             }
//         } else {
//                 for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;
                
//                 for (let i = 0; i < subCourse.length; i++ ) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// getTotalProgressByIteration(students);
// // console.log(getTotalProgressByIteration(students));

// function getTotalProgressByRecursion (data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i < data.length; i++ ) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];

//         for ( let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }

//         return total;
//     }
// }

// const result = getTotalProgressByRecursion(students);

// console.log(result[0]/result[1]);



// Lesson  49

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');

//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();

//         console.log('click');
//         console.log(e.targetTouches);
//     });

//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();

//         console.log(e.targetTouches[0].pageX);
//     });

//     box.addEventListener('touchend', (e) => {
//         e.preventDefault();

//         console.log('end');
//     });
// });



// Lesson  50

// const p = document.querySelectorAll('p');
// console.log(p);

// function loadScript(src) {
//     const script = document.createComment('script');
//     script.src = "js/practice.js";
//     script.async = false;
//     document.body.append(script);
// }

// loadScript("js/practice.js");
// loadScript("js/some.js");



// Lesson 53

// const box = document.querySelector('.box');

// const newHeight = 100;
// const newWidth = 400;

// function changeParams(elem, h, w) {
//     elem.style.height = `${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
//     elem.innerHTML = (h ?? 200) * (w ?? 200);
// }

// changeParams(box, newHeight, newWidth);

// let userName;
// let userKey;

// console.log(userName ?? userKey ?? 'User');


// Lesson 54

// const box = document.querySelector('.box');
// const block = document.querySelector('.block');

// console.log(block);

// if (block) {
//     console.log(block.textContent);
// }

// block?.textContent = '123';
// console.log(block?.textContent);

// console.log(1+2);

// const userData = {
//     name: 'Roman',
//     age: null,
//     say: function () {
//         console.log('Hello');
//     }
// }

// userData.say();
// userData.hey?.();

// const userData = null;

// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skill.js);
// }

// console.log(userData?.skill?.js);



// Lesson 55

// const boxesQuery = document.querySelectorAll('.box');
// const boxesGet = document.getElementsByClassName('box');

// boxesQuery.forEach(box => {
//     if (box.matches('.this')) {
//         // console.log('This one!');
//         console.log(box);
//     }
// })

// console.log(boxesQuery[0].closest('.wrapper'));

// boxesQuery[0].remove();
// boxesGet[0].remove();

// for ( let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
//     // boxesGet[boxesGet.length] = div;
// }

// console.log(boxesQuery);
// console.log(boxesGet);
// // console.log(document.body.children);

// console.log(Array.from(boxesGet));



// Lesson 56

// const obj = {
//     name: 'Test',
//     [Symbol('id')] : 1,
//     getId: function () {
//         return this[id];
//     }
// }

// // let id = Symbol('id');
// // let id2 = Symbol('id');
// // // let id = Symbol(id);

// // console.log(id == id2);

// // obj[id] = 1;

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);
// // console.log(obj[id]);

// // for (let value in obj) console.log(value);

// const myAwesomeDB = {
//     movies: [],
//     actors: [],
//     [Symbol.for('id')]: 123
// }

// // Сторонний код библиотке
// myAwesomeDB.id = '323232';

// console.log(myAwesomeDB[Symbol.for('id')]);
// console.log(myAwesomeDB);



// Lesson 57

// const birthday = Symbol('birthday');

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     // birthday: '20/04/1993',
//     [birthday] : '20/04/2022',
//     showMyPublicDate: function () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }
// // Object.defineProperty(user, 'birthday', {value: prompt('Date?') , enumerable: true, configurable: true});

// // console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
// Object.defineProperty(user, 'showMyPublicDate', { enumerable: false});

// for (let key in user) console.log(key);
// console.log(Object.getOwnPropertyDescriptor(user, birthday));

// Object.defineProperties(user, {
//     name: {writable: false},
//     surname: {writable: false}
// })

// Object.defineProperty(user, 'name', {writable: false});
// Object.defineProperty(user, 'gender', {value: 'male'});
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));



// Lesson 58

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicDate: function () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }

// // for ( const key of user) console.log(user[key]);

// const arr = ['b', 'a', 'c'];
// Array.prototype.someMethod = function () {};


// console.dir(arr);

// for ( const key of arr) {
//     console.log(key);
// }

// const str = 'string';

// for ( const key in str) {
//     console.log(str[key]);
// }

// const salaries = {
//     john: 500,
//     ivan: 1000,
//     ann: 5000,
//     sayHello: function () {
//         console.log('Hello');
//     }
// }

// salaries[Symbol.iterator] = function () {
//     return {
//         current: this.john,
//         last: this.ann,

//         next() {
//             if (this.current < this.last) {
//                 this.current = this.current + 500;
//                 return {done: false, value: this.current};
//             } else {
//                 return {done: true};
//             }
//         }
//     };
// }

// for (let res of salaries) {
//     console.log(res);
// }

// const iterator = salaries[Symbol.iterator]();
// console.log(iterator.next());



// Lesson 59

// const user = {
//     4: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicDate: function () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }

// console.log(user);
// console.log(typeof(Object.keys(user)[0]));

// У нас есть список магазинов в торговой сети. Каждый из магазинов содержит определенный перечень товаров и на каждый из них выделяется определенный бюджет. 

// const shops = [
//     {rice: 500},
//     {oil: 200},
//     {bread: 50}
// ]

// const budget = [5000, 15000, 25000];

// const map = new Map([
//     [{paper: 400}, 8000]
// ]);

// // оптимальный вариант записи
// shops.forEach((shop, i) => {
//     map.set(shop, budget[i]);
// });

// console.log(map);

// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);
// аналогичная запись
// map.set(shops[0], 5000)
//     .set(shops[1], 15000)
//     .set(shops[2], 25000);


// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear(key);
// map.size;

// Способы перебора map
// map.keys()
// map.values()
// map.enteries()
// map.forEach()

// const goods = [];

// for (let shop of map.keys()) {
//     console.log(shop);
//     goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// for (let price of map.values()) {
//     console.log(price);
// }

// for (let [shop, price] of map.entries()) {
//     console.log(shop, price);
// }

// map.forEach((value, key, map) => {
//     console.log(key, value);
// });

// const user = {
//     name: 'Alex',
//     surname: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicDate: function () {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }

// const userMap = new Map(Object.entries(user));
// console.log(userMap);

// const newUserObj = Object.fromEntries(userMap);
// console.log(newUserObj);



// Lesson 60

// const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// // set.add('Ivan');
// // set.add('Oleg');

// console.log(unique(arr));

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// for (let value of set) console.log(value);

// set.forEach((value, valueAgain, set) => {
//     console.log(value, valueAgain);
// });

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());



// Lesson 61

// const bigint = 12414124124124214214124124124124214n;

// const sameBigInt = BigInt(12414124124124214214124124124124214);

// console.log(typeof(bigint));
// console.log(typeof(sameBigInt));

// console.log(5n + 3n);
// console.log(5n / 2n);
// console.log(5n + 3);
// console.log(Math.round(5n));

// let bigint = 1n;
// let number = 2;

// console.log(bigint + BigInt(number));
// console.log(Number(bigint) + number);
// console.log(+bigint + number);



// Lesson  63

// const btns = document.querySelectorAll('button');
//       wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));

// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }

//     btns[1].classList.toggle('red');
// });

// console.log(btns[0].className);

// wrapper.addEventListener('click', (event) => {
//     console.dir(event.target);
//     if (event.target && event.target.matches('button.red')) {
//         console.log('Hello');
//     }
// });

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);



// Lesson  65

// const btn = document.querySelector('.btn');
// let timerID,
//     i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let position = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (position == 300) {
//             clearInterval(id);
//         } else {
//             position++;
//             elem.style.top = position + 'px';
//             elem.style.left = position + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);

// function logger () {
//     if (i == 3) {
//         clearInterval(timerID);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout( function log(){
//     console.log('Tik-tak');
//     id = setTimeout(log, 500);
// }, 500);



// Lesson  66

// function func () {
//     window.smth = 'string';
// }

// const someRes = getData();
// const node = document.querySelector('.class');

// setInterval(function() {
//     if (node) {
//         node.innerHTML = someRes;
//     }
// }, 1000);

// function outer() {
//     const potentialHugeArray = [];
//     return function inner() {
//         potentialHugeArray.push('Hello');
//         console.log('hi!');
//     }
// }

// const sayHello = outer();

// function createElement() {
//     const div = document.createElement('div');
//     div.id = 'test';
//     document.body.append(testDiv);
// }

// createElement();

// function deleteElement() {
//     document.body.removeChild(document.getElementById('test'));
// }

// deleteElement();


// Lesson  67 

// let user = {name: 'Iven'};

// // const arr = [user];
// let map = new WeakMap();
// map.set(user, 'data');

// user = null;

// console.log(map);
// // console.log(arr[0]);

// let cache = new WeakMap();

// function cacheUser(user) {
//     if (!cache.has(user)) {
//         cache.set(user, Date.now());
//     }

//     return cache.get(user);
// }

// let lena = {name: 'Elena'};
// let alex = {name: 'Alex'};

// cacheUser(lena);
// cacheUser(alex);

// lena = null;

// console.log(cache.has(lena));
// console.log(cache.has(alex));

// let messages = [
//     {text: 'Hello', from: 'Jonh'},
//     {text: 'World', from: 'Alex'},
//     {text: '...', from: 'M'},
// ]

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// // readMessages.add(messages[1]);

// readMessages.add(messages[0]);
// messages.shift();
// console.log(readMessages.has(messages[0]));



// Lesson  68
// const now = new Date('2022-04-10');
// new Date.parse('2022-04-10');

// console.log(now.setHours(40));
// console.log(now);


// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// let start = new Date();

// for (let i =0; i < 100000; i++) {
//     let some = i ** 3;
// }

// let end = new Date();

// alert(`Цикл отработал за ${end - start} миллисекунд`);



// Lesson  71
// const box = document.querySelector('.box'),
//       btn = document.querySelector('button');

// // const width = box.clientWidth;
// // const height = box.clientHeight;
// // const width = box.offsetWidth;
// // const height = box.offsetHeight;
// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height);

// btn.addEventListener('click', () => {
//     // box.style.height = box.scrollHeight + 'px';
//     console.log(box.scrollTop);
// });

// console.log(box.getBoundingClientRect().top);

// const style = window.getComputedStyle(box);

// console.log(style.display);

// console.log(document.documentElement.scrollTop);




// Lesson  74

// const box = document.querySelector('.box');

// let observer = new MutationObserver(mutationRecords => {
//     console.log(mutationRecords);
// });

// observer.observe(box, {
//     childList: true
// });

// observer.disconnect();



// Lesson  75

// const num = new Number(3);
// console.log(num);

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`)
// }

// ivan.exit();

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);



// Lesson 76

// 1) Обычная функция: this = window, но если use strict = undefined

// function showThis() {
//     console.log(this);
// }

// showThis();

// Практическая задача с собеседований
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this); // что выведет тутб какой контекст вызова у функции sum === undefined, потому что не важно где эта f запускается, важно что ответ будет window/undefined
//         // return this.a + this.b; // будет ли работать эта комбинация, если нет, то как исправить
//         return a + b; // === при помощи замыкания решается
//     }

//     console.log(sum());
// }

// showThis(4,5);

// 2) Методы обьектов тоже функции. Контекст у вызова обьектов === сам обьект

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this); // тут контекст === самому обьекту
//         function shout() {
//             console.log(this); // контекст === undefined, обычная функция
//         }
//         shout();
//     }
// }

// obj.sum();

// 3) Оператор New. this в конструкторах и классах - это новый экземляр обьекта

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// let ivan = new User('Ivan', 23);

// 4) Ручная привязка this: call(), apply(), bind()

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));


// const btn = document.querySelector('button');

// Стандартный обработчик события
// btn.addEventListener('click', function () {
//     this.style.backgroundColor = 'red';
//     console.log(this);
// });

// Чаще всего используют такие записи с использованием event target и (e) =>
// btn.addEventListener('click', (e) => {
//     e.target.style.backgroundColor = 'red';
//     console.log(this);
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this.num);
//         };

//         say();
//     }
// };

// obj.sayNumber();

// Полный вариант
// const double = (a) => {
//     return a * 2;
// }

// Сокращенный вариант
// const double = a => a * 2;

// console.log(double(4));



// Lesson 77

// Концепция start
// class Rectangle {
//     constructor (height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }
// // Концепция end

// class ColoredRectangleWithText extends Rectangle {
//     constructor (height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

// div.showMyProps();
// console.log(div.calcArea());

// Экзепляры
// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 40);

// console.log(square.calcArea());
// console.log(long.calcArea());
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

// Lesson  28

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

// Lesson  29

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

// Lesson  31
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

// Lesson  32
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

// Lesson  34

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

// Lesson  35

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

// Lesson  37
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

// Lesson  39
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

// Lesson  40
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
// Домашнее задание к уроку 10:
// 1. Создайте переменную, которая будет отображать имя пользователя. 
// (Пользователь - user, имя - name). В неё поместите значение "John"
// 2. На следующей строке создайте переменную, отображающую номер пользователя (номер - number). В неё поместите значение 25.
// 3. Измените значение второй переменной с 25 на 24 на следующей строке.

// const userName = 'John';
// let userNumber = 25;
// userNumber = 24;

// Домашнее задание к уроку 12:
// 1. Создайте переменную с названием магазина (магазин - store, имя - name) и поместите в неё любое название на ваш выбор
// 2. Создайте обьект под названием storeDescription
// 3. Во внутрь этого обьекта напрямую поместите свойство budget и укажите его как 10000. Напрямую - это сразу внутри фигурных скобок, мы его расширяем на месте
// 4. Во внутрь обьекта storeDescription напрямую поместите свойство employees. Это должен быть массив, который содержит имена трех сотрудников на ваш выбор. 

// const storeName = 'Везунчик';

// const storeDescription = {
//     budget: 10000,
//     employees: ['Ivan', 'Petr', 'Elena'],
//     products: {
//         potato: 55,
//         cucumber: 10
//     },
//     open: true
// }

// Практический урок 19:

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли 

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false 
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// Домашнее задание к уроку 21:
// 1. Что выведет в консоль код?
// console.log( NaN || 2 || undefined ); // - Мой ответ 2, правильно
// console.log( NaN && 2 && undefined ); // - Мой ответ Nan, правильно
// console.log( 1 && 2 && 3 ); // Мой ответ 3, правильное
// console.log( !1 && 2 || !3 ); // Мой ответ вернетcзначение  '!3', в целом да, точное значение вернет false
// console.log( 25 || null && !3 ); // Мой ответ 25, правильно
// console.log( NaN || null || !3 || undefined || 5); // Мой ответ 5, правильно
// console.log( NaN || null && !3 && undefined || 5); // Мой ответ false, правильный ответ 5. Ошибка в неправильном выполнении вычислений
// console.log( 5 === 5 && 3 > 1 || 5); // Мой ответ 3, ответ true, что по сути правда

// 2. Выполняется ли условие?
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// Выполнится, так как левая часть false, а правая true. Оператор   && работает, когда один из вариантов true. Результат выполняется.

// 3. Выполняется ли условие?
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// Выполнится, так как первые 3 значения false, а nuggets true. Оператор && работает, когда один из вариантов true. Результат выполняется.

// 4. Выполняется ли условие?
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// Не выполнится, так как оба значения false. Результат в консоли не выолняется.

// Домашнее задание к уроку 23
// 1. При помощи цикла выведите часла от 5 до 10 включительно.

// function firstTask() {
//     for ( let i = 5; i < 11; i++) {
//         console.log(i);
//     }
// }
// firstTask();

// 2. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18). Когда цикл дойдет до 13 - остановить весь цикл.

// function secondTask() {
//     for ( let i = 20; i > 9; i-- ) {
//         if (i === 13) break;
//         console.log(i);
//     }
// }
// secondTask();

// 3. При помощи цикла for выведите четные числа от 2 до 10 включительно.

// function thirdTask() {
//     for ( let i = 2; i < 11; i++) {
//         if ( i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
// thirdTask();

// 4. Перепишите цикл for на вариант с while. Результат должен остаться таким же. Не создайте бесконечный цикл.
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// function fourthTask() {
//     let i = 2;

//     while ( i <= 16 ) {
//         if ( i % 2 ) {
//             console.log(i);
//         }
//         i++;
//     }
// }
// fourthTask();

// 5. Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// function fifthTask() {
//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }
//     console.log(arrayOfNumbers);
    
//     // Не трогаем
//     return arrayOfNumbers;
// }
// fifthTask();

// 6. Заполните новый массив(result) числами из старого (arr). Количество элементов в массиве можно получить как arr.lenght, а к элементам обращаемся все так же: arr[0], arr[1] и т.д.

// function sixTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for( let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

//     console.log(result);
//     // Не трогаем
//     return result;
// }
// sixTask();

// 7. Измените данный массив так, чтобы все числа были увеличины в 2 раза, а если попадается строка строка - то к ней добавлено "- done". 
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping -done', 40, 'Homework - done']

// function seventhTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for ( let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number' ) {
//             data[i] = data[i] * 2;
//         } else if ( typeof(data[i]) === 'string') {
//             data[i] = data[i] + ' - one';
//         }
//     }
//     console.log(data);
//     // Не трогаем
//     return data;
// }
// seventhTask();

// 8. Разверните массив data наоборот при помощи цикла и запищите данные в массив result.
// Должно получиться: ['Homework', 20, 'Shopping', 10, 5]

// function eighthTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     // Не трогаем
//     return result;
// }
// eighthTask();

// 9. Написать код, который при помощи * в консоли нарисует фигуру:
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for ( let j = 0; j < lines - i; j++) {
//         result += ' ';
//     }
//     for ( let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);


/* Практический урок 24

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false 
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }

// console.log(personalMovieDB);

// Домашнее задание к уроку 27

// 1. Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку. 
// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон" 

// function sayHello(userName) {
//     return `Привет, ${userName}!`;
// }

// sayHello();
// console.log(sayHello('Roman'));

// 2. Создайте функцию, которая принимает в себя 1 аргумент в виде целового числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и на число на 1 больше. 
// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4,5,6]

// function returnNeighboringNumbers(numbers) {
//     return [numbers - 1, numbers, numbers + 1];
// }

// returnNeighboringNumbers();
// console.log(returnNeighboringNumbers(10));

// 3. Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - база, второе число - это сколько раз нужно будет повторить это число в прогрессии. Функция должна возвращать строку(или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---", после последнего числа их не должно быть. 
// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент.
// Пример: вызов функции getMathResult(5, 3) даст ответ 5---10---15

// function getMathResult(numBase, numRepeat) {
//     if ( typeof(numRepeat) !== 'number' || numRepeat <= 0) {
//         return numBase;
//     }

//     let str = '';

//     for (let i = 1; i <= numRepeat; i++) {
//         if ( i === numRepeat) {
//             str += `${numBase * i}`;
//         } else {
//             str += `${numBase * i}---`;
//         }
//     }

//     return str;
// }

// getMathResult();
// console.log(getMathResult(5,3));

// Практические урок 29:

// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно*/

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// } 

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//               b = prompt('На сколько оцените его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres();

// Домашнее задание к уроку 29

// 1. Создайте функцию, которая будет вычислять обьем и площадь полной поверхности куба. Эта функция принимает в себя целое число со значениями длины ребра куба. Ответ выведите в формате строки, который изображен в примерах. 
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вывести строку "При вычислении произошла ошибка"
// Пример: calculateVolumeAndArea(5) => "Обьем куба: 125, площадь всей поверхности: 150"

// function calculateVolumeAndArea(lenght) {
//     if(typeof(lenght) !== 'number' || lenght < 0 || !Number.isInteger(lenght)) {
//         return 'При вычислении произошла ошибка';
//     }

//     let volume = 0,
//         area = 0;

//     volume = lenght * lenght * lenght;
//     area = 6 * (lenght * lenght);

//     return `Обьем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea();
// console.log(calculateVolumeAndArea(15));


// 2. Напишите функцию, которая будет определять номер купе по переданному ей номеру места. 
// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение: "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
// Пример: getCoupeNumber(33) => 9

// function getCoupeNumber(seat) {
//     if (typeof(seat) !== 'number' || seat < 0 || !Number.isInteger(seat)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seat === 0 || seat > 36) {
//         return 'Таких мест в вагоне не существует';
//     }

//     for (let i = 4; i <= 36; i = i + 4) {
//         if (seat <= i) {
//             return Math.ceil(i/4);
//         }
//     }
// }

// getCoupeNumber();
// console.log(getCoupeNumber(33));
// console.log(getCoupeNumber(37));


// 3. Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. Обратите на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
// Пример: getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 30 минут"

// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Ошибка, проверьте данные";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0: 
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут` ;
// }

// getTimeFromMinutes();
// console.log(getTimeFromMinutes(150));
// console.log(getTimeFromMinutes(50));


// 4. Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом - возвращает 0. Дробные числа разрешены.
// Пример: findMaxNumber(1, 5, 6.6, 11) => 11
// findMaxNumber(1, 4, '5', 10) => 0

// function findMaxNumber(a, b, c, d) {
//     if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b ,c, d);
//     }
// }

// findMaxNumber();
// console.log(findMaxNumber(1, 5, 6.6, 11));
// console.log(findMaxNumber(1, 4, '5', 10));


// 5. Создайте функцию, которая будет принимать в себя один аргумент - целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибонначи. Причем, их количество должно быть равно переданному аргументу. 
// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии. 
// Пример: fib(4) => "0 1 1 2"

// function fib(num) {
//     if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
//         return '';
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i ++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// fib();
// console.log(fib(4));
// console.log(fib(7));

// Домашнее задание к уроку 35
// 1. Напипите функцию showExperience, которая будет принимать в себя обькт со всеми данными и возвращать строку с опытом. 
// Пример: showExperience(personalPlanPeter) => '1 mounth'
// P.S. Желательно использовать деструктуризацию, но не обязательно. 
// 2. Напишите функцию showProgrammingLangs, которая будет принимать в себя обьект со всеми данными и возвращать строку в нужном виде. 
// Пример: showProgrammingLangs(personalPlanPeter) => 'Язык js изучен на 20%. Язык php изучен на 10%'
// Пример функция должна рабоать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.
// 3. Создайте метод showAgeAndLangs внутри обьект personalPlanPeter. При его вызове метод будет принимать в себя обьект и вовращать строку в нужном виде. 
// Пример: personalPlanPeter.showAgeAndLangs(personalPlanPeter) => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из обьекта, а языки всегда в верхнем регистре. Если данные в обьекте поменяются, то и сообщение тоже изменится.

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;

//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(lang => {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// showExperience(personalPlanPeter);
// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     return str;
// }

// showProgrammingLangs(personalPlanPeter);
// console.log(showProgrammingLangs(personalPlanPeter));

// 1. Напишите функцию showFamily, которая будет принимать в себя массив строк возвращать сообщение в нужном формате.
// Пример: showFamily(family) => "Семья состоит из: Peter Ann Alex Linda"
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пустая'

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `;
//     });

//     return str;
// }

// showFamily(family);
// console.log(showFamily(family));

// 2. Напииште функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре. 
// Пример: lisbon rome milan dublin

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     let str = '';

//     arr.forEach(city => {
//         str += `${city.toLowerCase()}` + '\n';
//     });

//     return str;
// }

// standardizeStrings(favoriteCities);
// console.log(standardizeStrings(favoriteCities));

// 3. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// Пример: const someString = 'This is some strange string';
// Функцию можно приненить к любой строке. Если в функцию приходит не строка - вернуть сообщение 'Ошибка' 

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return 'Ошибка!';
//     }

//     return str.split('').reverse().join('');

//     // При помощи цикла
//     // let newStr = '';

//     // for (let i = str.length - 1; i >=0; i--) {
//     //     newStr += str[i];
//     // }

//     // return newStr;
// }

// reverse(someString);
// console.log(reverse(someString));

// 4. Представьте такую реальную ситуацию. У вас банкомат, который выдает деньги из двух разных банков в разных валютах.
// Один банк основной с базовыми валютами, второй дополнительный с прочими валютами. 
// Вам нужно создать главную функцию availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу(сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку "Нет достапных валют". Функция возвращает строку в нужном виде с нумерацией валют 
// Пример: availableCurr(['UAH' , 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты: 
// 1 - UAH
// 2 - RUB
// Заметьте: 
// - CHY изчес из списка валют, значит такая валюта закончилась 
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже
// - Нумерация начинается с 1 
// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//     arr.forEach(function(curr, i) {
//         if (curr !== missingCurr) {
//             str += `${i + 1} - ${curr}\n`;
//         }
//     });

//     // C помощью цикла
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] === missingCurr) {
//     //         continue;
//     //     }
//     //     str += `${i + 1} - ${arr[i]}\n`;
//     // }

//     return str;
// }

// availableCurr(['UAH' , 'RUB', 'CNY'], 'CNY');
// console.log(availableCurr(['UAH' , 'RUB', 'CNY'], 'CNY'));



// Практические урок 37:
// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB.
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                   b = prompt('На сколько оцените его?', '');
        
//             if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function () {
//         if (personalMovieDB.count < 10) {
//             console.log('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('Произошла ошибка');
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function () {
//         // for (let i = 1; i <= 3; i++) {
//         for (let i = 1; i < 2; i++) {
//             // let = genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             // if (genre === '' || genre == null) {
//             //     console.log("Вы ввели неккоректные данные или не ввели их вообще");
//             //     i--;
//             // } else {
//             //     personalMovieDB.genres[i - 1] = genre;
//             // }

//             // альтернативный вариант 
//             let genres = prompt(`Введите ваши любимые жанры через запятую`);

//             if (genres === '' || genres == null) {
//                 console.log("Вы ввели неккоректные данные или не ввели их воовсе");
//                 i--;
//             } else {
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort();
//             }
//         }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };



// Домашнее задание к уроку 37
//  1. У вас есть небольшой кусочек данных о торговом центре, которые записаны в обьекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
// Основная задача - написать функцию isBudgetEnough, которая будет возвращать строку. Если бюджета хватает для отопления всего обьема торгового центра - выводится "Бюджета достаточно", если нет - "Бюджета недостаточно". 
// Но эта задача содержит несколько подзадач внутри: 
// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего обьема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого обьема;
// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой обьект

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     let square = 0;
//     let volume = 0;

//     data.shops.forEach(shop => {
//         square += shop.width + shop.length;
//     });

//     volume = data.height * square;

//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }

// isBudgetEnough(shoppingMallData);
// console.log(isBudgetEnough(shoppingMallData));

// 2. У вас есть список учеников, которые хотят поиграть в игру. Но команд может быть только 3 по 3 человека, Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итогу, функция возвращает новый массив с тремя командами и строкой как четвертый элемент.
// Пример: sortStudentsByGroups(students) => {
//     [
//         ['Andrew', 'Ann', 'Bernard'],
//         ['Cris', 'Josh', 'Mark'],
//         ['Peter', 'Sam', 'Sandra'],
//         'Оставшиеся студенты: Takesi'
//     ]
// }
// Если убирать одного студента, то результат -, если добавлять, то через запятую. То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [],
//           b = [],
//           c = [],
//           rest = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }

//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
// }

// sortStudentsByGroups(students);
// console.log(sortStudentsByGroups(students));



// Практические урок 41:

// Какое будет выведено значение: let x = 5; alert( x++ ); ?
// Выведет значение 5, так как постфиксная форма вернет нам сначала 5.

// Чему равно такое выражение: [ ] + false - null + true ?
// Равно NaN. Мы не можем строки отнять от числа

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// Ответ 2, так как выполняется последовательное присвание справа налево.

// Чему равна сумма [ ] + 1 + 2?
// Сумма равноа 12. Просходит конкатенация пустой строки с числами

// Что выведет этот код: alert( "1"[0] )?
// Выведет 1

// Чему равно 2 && 1 && null && 0 && undefined ?
// Вернет null. Так как оператор && останавливается на первом ложном значении

// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// Да. есть. Так как !! превращает в булиновое значение. Поэтому при === их типы не равны.

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// Вернется 3. Так как оператор || возвращает первое true значение

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// Не правда, так как это просто две разные переменные, просто с одинаковыми данными.

// Что выведет этот код: alert( +"Infinity" ); ?
// Выведет Infinity. Строка преобразовывается в число, в нашем случае это число бесконечности.

// Верно ли сравнение: "Ёжик" > "яблоко"?
// Не верное. Так как Я больше Ё из-за того, что последняя буква алфавита и идет позже

// Чему равно 0 || "" || 2 || undefined || true || falsе ?
// Равно 2. На 2 остановится логический оператор, так как это первое истинное значение



// Домашнее задание к уроку 41

// У вас есть обьект с данными о ресторане. Начинающий разработчик создал несколько функций, которые работают неправильно и он не может понять почему. Нужно исправить функции так, чтобы они давали всегда правильный результат.

// 1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё результат все время неправильный. Необходимо найти причины и исправить.

// 2) Функция isAverageLunchPriceTrue должна брать цены двух блюд из меню, складывать их и сравнивать с средним чеком(averageLunchPrice)

// Сейчас функция работает, но постоянно выдает неправильный результат. Ведь из представленного меню сумма любых цен всегда будет больше 20, Необходимо найти причину и исправить.

// 3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и переписывать их в другой ресторан. Конечно, в другом ресторане будут другие блюда, другие официанты и тп.  Сейчас эта функция только в начале разработки и должна менять данные про официантов. 

// Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов, но и и основные данные! В restorantData сотрудник Alice изчезает и заменяется Mike! Необходимо найти причину и немедленно исправить, чтобы данные были разделены. 

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0,-1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors = [{name: 'Mike', age: 32}];
//     return copy;
// }

// transferWaitors(restorantData);



// Домашнее задание к уроку 47

// Напишите функцию, которая вычисляет факториал

// Задание простое, но нужно попнимать что такое факториал вообще. Факториал - число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!

// Отсюда мы можем понять, что функция должна принимать 1 аргумент, который будет являться числом. Будет неплохо, если вы на собеседовании сразу напишите проверку на приходящее значение :) Поэтому, если в нашу функцию приходит дробное число или не число - возвращается строка с любым сообщением на ваше усмотрение. Если 0 и меньше - возвращается число 1. 
// Общая формула факториала: n! = n * (n - 1) * (n - 2) * ... * 1
// Примеры значений для разных n:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// factorial(4) => 24

// function factorial(n) {
//     if (typeof(n) !== 'number' || !Number.isInteger(n)) {
//         return 'Введите цельное число';
//     } 

//     if (n >= 1) {
//         return n * factorial(n - 1);
//     } else {
//         return 1;
//     }
// }

// factorial();
// console.log(factorial(5), factorial(-8), factorial(0));



// Домашнее задание к уроку 61
// 1. В каждой книге есть n страниц с номерами страниц от 1 до n. Написать функцию amountOfPages(), аргумент которой summary составляется путем сложения количества цифр всех номеров страниц. Эта функция возвращает число - количество страниц n в книге. Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.
// Пример: 
// Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617
// Фукнция на вход как раз принимает это общее количество цифр, а возвращает конечное число, то есть последнюю страницу книги.
// amountOfPage(5) => 5
// amountOfPage(25) => 17
// amountOfPage(1095) => 401
// amountOfPage(185) => 97

// function amountOfPages(summary){
//     let result = '';
//     let n = 0;

//     for (let i = 1; i <= summary; i++) {
//       result += i;
//       if (result.length === summary) {
//         n = i;
//         break;
//       }
//     }

//     return n;
// }

// amountOfPages(5);
// amountOfPages(25);
// amountOfPages(1095);
// amountOfPages(185);

// console.log(amountOfPages(5));
// console.log(amountOfPages(25));
// console.log(amountOfPages(1095));
// console.log(amountOfPages(185));


// 2. Панграмма  — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу без повторений. Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).
// Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.
// Пример:
// isPangram(«The quick brown fox jumps over the lazy dog») => true
// isPangram(«Hello World») => false

// function isPangram(string) {
//     return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
// }

// isPangram('The quick brown fox jumps over the lazy dog');
// isPangram('Hello World');

// console.log(isPangram('The quick brown fox jumps over the lazy dog'));
// console.log(isPangram('Hello World'));

// // Варианты решения с учебника
// // Это должно экономить ресурсы компьютера
// function isPangram(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//       return string.indexOf(x) !== -1;
//     });
// }

// // С другим методом и строка каждый раз преобразовывается в коллбэке
// function isPangram(string){
//     return 'abcdefghijklmnopqrstuvwxyz'
//       .split('')
//       .every((x) => string.toLowerCase().includes(x));
// }

// // При помощи цикла
// function isPangram(str) {
//     letters: for (var c = 0; c < 26; c++) {
//         for (let i = 0; i < str.length; i++) {
//             let s = str.charCodeAt(i)
//             if (s < 65 || s > 90 && s < 97 || s > 122) continue
//             if (s === 65 + c || s === 97 + c) continue letters
//         }
      
//         return false
//     }
    
//     return true
// }

// // С использованием регулярных выражений
// function isPangram(string){
//     return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
// }


// 3. Создайте функцию deepCount, которая будет считать количество всех  элементов в массиве, включая и вложенные массивы. Учтите, что сам вложенный массив тоже входит в счет. Чтобы понять задачу детальнее, давайте рассмотрим примеры:
// deepCount([1, 5, 3]) => 3
// deepCount(["1", 5, "3", ["10"]]) => 5 (Заметьте, что последний элемент был посчитан сам + его внутренность)
// deepCount([1, 2, [3, 4, [5]]]) => 7
// deepCount([]) => 0
// deepCount([[[[[[[[[]]]]]]]]]) => 8

// function deepCount(a){
//     return a.reduce((s,e)=>s+(Array.isArray(e) ? deepCount(e) : 0),a.length);
// }


// другой вариант
// function deepCount(a){
//     let count = a.length;
//     for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
//     return count;
// }




// Домашнее задание к уроку 88

// Задача 1
// 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать  будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.
// 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать  будет строку, которая содержит названия фильмов через запятую.
// Пример: 
// showListOfFilms(films) =>  "Titanic, Die hard 5, Matrix, Some bad film"
// 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма. 
// Пример: 
// setFilmsIds(films) =>  [
//     { name: 'Titanic', rating: 9, id: 0 },
//     { name: 'Die hard 5', rating: 5, id: 1 },
//     { name: 'Matrix', rating: 8, id: 2 },
//     { name: 'Some bad film', rating: 4, id: 3 }
// ]
// 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом  из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray);

// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];

// function showGoodFilms(arr) {
//     return arr.filter(film => film.rating >= 8);
// }

// console.log(showGoodFilms(films));

// function showListOfFilms(arr) {
//     return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
// }

// showListOfFilms(films);
// console.log(showListOfFilms(films));

// function setFilmsIds(arr) {
//     return arr.map((film, i) => {
//         film.id = i;
//         return film;
//     });
// }

// const tranformedArray = setFilmsIds(films);
// console.log(tranformedArray);

// function checkFilms(arr) {
//     return arr.every(film => film.id || film.id === 0 ? true : false)
// }

// checkFilms(tranformedArray);

// console.log(checkFilms(tranformedArray));

// Задача 2

// 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)
// Пример:
// getPositiveIncomeAmount(funds) => 13300
// 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех  значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.
// Пример:
// getTotalIncomeAmount(funds) => -500
// const funds = [
//     {amount: -1400},
//     {amount: 2400},
//     {amount: -1000},
//     {amount: 500},
//     {amount: 10400},
//     {amount: -11400}
// ];

// const getPositiveIncomeAmount = (data) => {
//     return data.filter(item => item.amount > 0).reduce((sum, current) => sum + current.amount, 0);
// };

// console.log(getPositiveIncomeAmount(funds));

// const getTotalIncomeAmount = (data) => {
//     return data.some(item => item.amount > 0) ? data.reduce((sum, current) => sum + current.amount, 0) : getPositiveIncomeAmount();
// };

// console.log(getTotalIncomeAmount(funds));
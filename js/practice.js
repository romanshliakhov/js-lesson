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
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
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

// Домашнее задание к уроку 

// Задание на урок 24:
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

// Задание на урок 27
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




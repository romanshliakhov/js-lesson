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



// Задание на урок 11:

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


// Задание на урок 15:
/* Задание на урок:

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

// Задание на урок 18:
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




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

let num = 50;

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}

//Задание 1
let i = 0;
let a = Number(prompt('Сколько раз вам сказать привет?'));
while (i <= a) {
    alert('Привет');
    i++
}


//Задание 2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


//Задание 3

for (let i = 7; i <= 22; i++) {
    console.log(i);
}


//Задание 4

let obj = { 'Коля': '200', 'Вася': '300', 'Петя': '400' };
for (let key in obj) {
    console.log(key + ' — зарплата ' + obj[key] + ' долларов.');
}

//Задание 5

let n = 1000;
let num = 0;
while (n >= 50) {
    n = n / 2;
    num = num + 1;
}
console.log('Получившееся число: ', n);
console.log('Количество итераций: ', num);


//Задание 6

let firstFriday = 3;
for (let i = firstFriday; i <= 31; i = i + 7) {
    console.log('Сегодня пятница, ' + i + '-е число. Необходимо подготовить отчет.');
}

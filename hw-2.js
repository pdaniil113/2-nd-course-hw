let a = 10;
alert(a);

a = 20;
alert(a);

const yearFirstIPhone = '9 января 2007 года';
alert(yearFirstIPhone);

const javascriptCreatorName = 'Brendan Eich';
alert(javascriptCreatorName);

a = 10;
let b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);
a = 2;

let result = a ** 5;
alert(result);

a = 9;
b = 2;
alert(a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = Number(prompt('Сколько вам лет?'));
alert(age);

let user = {
    name: "Иннокентий",
    age: 25,
    isAdmin: true,
};
user["city of residence"] = "Moskow";
user.age = 30;
delete user["city of residence"];

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

let имя = prompt("Как вас зовут?");
alert(`Привет, ${имя}!`);


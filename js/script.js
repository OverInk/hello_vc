"use strick"
console.log('Я' + ' учу');
// console.log('учу');
console.log('JS');

const COLOR_EYE = "#0FF";
console.log(COLOR_EYE);

let userName = "Вася";
let user = "Никита";
user = userName;
console.log(user);

let userUndefined;
console.log(typeof userUndefined);
console.log(userUndefined);

let userNull = null;
console.log(userNull);

let userBooLean = true;
if (userBooLean) {
	console.log(':)');
} else {
	console.log(';(');
}
let userBooLean2 = false;
if (userBooLean2) {
	console.log(':)');
} else {
	console.log(';(');
}
// Тут проверяем тип данных Number
let trueOrFalse = 58 < 18;
console.log(trueOrFalse);

let userAge = 20;
let userHeight = 1.83;
console.log(userAge);
console.log(typeof userAge);
console.log(userHeight);
console.log(typeof userHeight);

let getInfinity = 58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);

let getInfinity2 = -58 / 0;
console.log(getInfinity2);
console.log(typeof getInfinity2);

let getNan = 'Фрилансер' / 10;
console.log(getNan);
console.log(typeof getNan);

const bigInteger = 12345678901234567890123456789n;
console.log(typeof bigInteger);

let userNameV1 = "Фрилансер по жизни";
console.log(typeof userNameV1);

let userNameV2 = 'Фрилансер по жизни';
console.log(typeof userNameV2);

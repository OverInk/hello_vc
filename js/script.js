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

let userInfo = {
	name: "Фрилансер по жизни",
	age: 36
}
console.log(userInfo);
console.log(typeof userInfo);

let id = Symbol("id");
console.log(typeof id);

let funcV = function name(params) { }
console.log(typeof funcV);

let userA = 58;
console.log(userA);
console.log(typeof userA);
userA = String(userA);
console.log(userA);
console.log(typeof userA);


let userB = "58";
console.log(userB);
console.log(typeof userB);
userB = Number(userB);
console.log(userB);
console.log(typeof userB);

let userC = "Фрилансер";
userC = Number(userC);
console.log(userC);
console.log(typeof userC);

let userD = "36" / "6";
console.log(userD);
console.log(typeof userD);

let userF = "";
console.log(userF);
console.log(typeof userF);
userF = Boolean(userF);
console.log(userF);
console.log(typeof userF);
//Выведится истиа
if (0) {
	console.log('Loj');
} else if (" ") {
	console.log('Istina!');
}
//Здесь будет правда, тк 2 == производит приравнивание типов
if (5 == "5") {
	console.log('Istina');
} else {
	console.log('Loj');
}
//Здесь будет ложь, так как три === делает строгое сравнение, должно быть
//одного типа, а не number and string
if (1 === "1") {
	console.log('Istina');
} else {
	console.log('Loj');
}
//Здесь ложь, так как && - означает "и то, и другое", а 92 больше 11, НО
//58 не меньше 100!
let message1 = (92 > '11' && 58 < 100) ? 'Istina' : 'Loj';
console.log(message);

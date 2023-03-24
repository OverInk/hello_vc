"use strick"
console.log('Я' + ' учу');
// console.log('учу');
console.log('JS');

const COLOR_EYE = "#0FF";
console.log(COLOR_EYE);


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
console.log(message1);


//Операторы JS. Проверка взятие остатка от деления
let x;
x = 11 % 3;
console.log(`Результат взятка остатка от деления:${x}`);

let resuilOne = 10 * "80";
console.log(resuilOne);
console.log(typeof resuilOne);

let resultTwo = 3 - "Free";
console.log(resultTwo);
console.log(typeof resultTwo);

let resultTh = (8 + 2, 19 + 1);
console.log(resultTh++);
console.log(resultTh);

let userG = 0;
let userGH;
userGH = userG++;
console.log(userGH);

userGH = ++userG;
console.log(userGH);


let num1 = 0;
while (num1 < 5) {
	console.log(num1);
	num1++;
};

let numO = 5;
while (numO) {
	console.log(numO);
	numO--;
};

for (let numT = 0; numT < 5; numT++) {
	console.log(numT);
};


let numF = 0;
for (; numF < 5; numF++) {
	if (numF == 2) continue;
	console.log(numF);
};

let numTh = 0;
for (; numTh < 5; numTh++) {
	console.log(numTh);
	if (numTh == 2) break;
};
console.log(`Работа окончена: numTh = ${numTh}`);

//через while
let dom1 = 1;
while (dom1 < 6) {
	console.log(dom1);
	dom1++;
};

//через конструкцию do..while
let dom2 = 1;
do {
	console.log(dom2);
	dom2++;
} while (dom2 < 6);


//через конструкцию for (попробуй не задавать новый dom и посмотри, будет ли старое значение использоваться или новое)
let dom3 = 1;
for (; dom3 < 6; dom3++) {
	console.log(dom3);
};

//Задача 2. Проверить, будет ли последний результат 0? Ответ нет, последний будет результат 1.
let dom4 = 8;
while (dom4) {
	console.log(dom4);
	dom4--;
};

//задача 3. Переписать на while
let dom5 = 0;
while (dom5 < 3) {
	console.log(`Число: ${dom5}`);
	dom5++;
};

//Задача 4. Прекратить цикл, когда size = 1
firstFor: for (let dom6 = 0; dom6 < 2; dom6++) {
	for (let size1 = 0; size1 < 3; size1++) {
		console.log(size1);
		if (size1 == 1) {
			break firstFor;
		}
	}
};

function calcSumm(numOne = 1, numTwo = 2) {
	console.log(`Переменная numOne: ${numOne}`);
	console.log(`Переменная numTwo: ${numTwo}`);

	let numSumm = numOne + numTwo;

	console.log(`Сумма: ${numSumm}`)
}
calcSumm();


function calcSum(numThree, numFour) {
	let numSum = numThree + numFour;
	return numSum;
}
let funcRezult = calcSum(1, 2);
console.log(`Сумма:${funcRezult}`);


function calcSummm(numFive, numSix) {
	if (numSix === 1) {
		return numFive;
	} else {
		return numFive * calcSummm(numFive, numSix - 1);
	}
}
console.log(calcSummm(2, 3));

//Пример, где переменной задают функцию
let getSum;
if (2 > 1) {
	getSum = function () {
		let sum = 2 + 1;
		console.log(sum);
	};
};
getSum();


//Домашка из урока с функциями. (первая функция рабочая, но она всегда внизу, поэтому закомментирована)
function showName() {
	console.log('Никита с задержкой в 0сек!');
}
setTimeout(showName, 0);
console.log('Коля!');
//Коля в консоле будет первее, чем Вася, так как задержка

//Правильно вызывать функцию в любом месте, если функция не вызвана как переменная
showMessage();
function showMessage() {
	console.log('Сообщение');
};

//Задача: надо записать функцию так, чтобы при строгом режиме фунцкия внутри некго блока не выдывала ошибку при вызове этой же функции вне данного блока

let showMessage2;
if (2 > 1) {
	showMessage2 = function () {
		console.log('Сообщение');
	}
}
showMessage2();

//Тема с объектами

let userInf = {
	name: "Вася",
	age: 30,
	"likes JS": true,
};
console.log(userInf);
console.log(userInf.name);
console.log(["likes JS"]);

let id = Symbol("id");
let userInf2 = {
	name: "Вася",
	age: 30,
	[id]: "Некое значение",
};
console.log(userInf2);

let userInf3 = {
	name: "Вася",
	age: 30,
	address: {
		city: "Moskva",
		street: "Freedom",
	}
};
console.log(userInf3);
console.log(userInf3.address);
console.log(userInf3.address.city);

//Проверка сущетсования свойства
let userInf4 = {
	name: "Вася",
	// age: 30,
};
if (userInf4.age) {
	console.log(userInf4);
};

//Проверка существование свойства и с выводом undefined
//Опциональная цепочка
let userInf5 = {
	name: "Вася",
	age: 30,
	// address: {
	// 	city: "Moskva",
	// 	street: "Freedom",
	// }
};
console.log(userInf5?.address?.street);

//Тоже проверка, уже через оператор in
let userInf6 = {
	name: "Вася",
	age: 30,
	address: {
		city: "Moskva",
		street: "Freedom",
	}
};
if ("name" in userInf6) {
	console.log(userInf6.name);
}

// Цикл for .. in
let userInf7 = {
	name: "Вася",
	age: 30,
	address: {
		city: "Moskva",
		street: "Freedom",
	}
};
for (let key in userInf7) {
	console.log(key);
	console.log(userInf7[key]);
};
for (let key in userInf7.address) {
	console.log(key);
	console.log(userInf7.address[key]);
}

//Функция-конструктор. В конце создаются два объекта со своими значениями
function UserInfo(age) {
	this.name = "Kolya";
	this.age = age;
}
console.log(new UserInfo(26));
console.log(new UserInfo(13));

//Домашка. Здесь метод копирование и выводится последнее значение, то есть 45.
let userInf8 = {
	name: "Вася",
	age: 30,
};
console.log(userInf8);
let userGG = userInf8;
console.log(userGG);
userGG.age = 45;
console.log(userInf8.age);

//Что будет в консоли?? В конце будет Вася, так как this не привязана к функции, даже после ее обнуления
let userInf9 = {
	name: "Вася",
	age: 30,
	showInf() {
		console.log(`${this.name}`);
	}
};

let userHH = userInf9;
userInf9 = null;
userHH.showInf();

//Используется для userInf8. Выше он прописан. Должен выпасть Вася и 30
for (const key in userInf8) {
	const value = userInf8[key];
	console.log(value);
};

//Используется для userInf7. Выше он прописан. Должно выпасть Москва и Фриден
for (const key in userInf7.address) {
	console.log(userInf7.address[key]);
};

//Задача 8. С мелкими подзадачами
// 1.Создадим пустой объект
let teskOne = {
};
console.log(teskOne);
//Добавим свойство name со значением Коля и свойство age с 15
teskOne.name = "Коля";
teskOne.age = 15;
console.log(teskOne);
//Изменить свойство name на Женя
teskOne.name = "Женя";
console.log(teskOne);
//Удалить свойство age со значением
delete teskOne.age;
console.log(teskOne);


//Числа
let numOne1 = Math.floor(5.8);
console.log(numOne1);

let numOne2 = Math.ceil(2.2);
console.log(numOne2);

let numOne3 = Math.round(-2.2);
console.log(numOne3);

//parseInt and parseFloat
let numTwo1 = parseInt("150.48px");
console.log(numTwo1);
console.log(typeof numTwo1);

let numTwo2 = parseFloat("150.48px");
console.log(numTwo2);
console.log(typeof numTwo2);










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


//Homework. #1
let numm0 = 1.005 + Number.EPSILON;
let numm = Math.round(numm0 * 100) / 100;
console.log(numm);

//Tesk 2. 
let numm1 = parseFloat("135.17px");
console.log(numm1);
console.log(typeof numm1);

//tesk 3
let numm4 = 58 + "Frilanser";
if (numm4 !== NaN) {
	console.log('Резуьтат значения NaN');
};

//Проверка
console.log(isNaN(58 + "Frilanser"));

//tesk 4, where max
console.log(Math.max(10, 58, 39, -150, 0));

//tesk 5
let numm5 = 56.98989;
console.log(Math.floor(numm5));

//Строки в JS
let text1 = 'фрилансер';
console.log(text1.slice(5, 6));
console.log(text1.toUpperCase());
console.log(text1.slice(3, 6));
console.log(text1.includes('лан', 4)); //будет false, тк начинается с 3 буквы подстрока лан

//Массивы
let arrOne = [
	"Kolya",
	{
		type: "JS",
		age: 30,
	},
	true,
	function () {
		console.log("Привет, я есть я");
	}
];
console.log(arrOne);
console.log(arrOne[0]);
console.log(arrOne[1].type);
console.log(arrOne[2]);
arrOne[3]();

let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(matrix);
console.log(matrix[0][1]);

let arr = ['Vanya', 'Kolya', 'Olya',];
arr[0] = 'Vika';
console.log(arr);
arr[3] = 'Dura'; //добавление нового
console.log(arr);
//Добавляет элемент в конец массива
arr.push('Vasya');
console.log(arr);
//Удаляет элемент в начале
arr.shift();
console.log(arr);
//Удаляет последний элемент
arr.pop();
console.log(arr);
//Добавляет элементы в начало массива, сдвигая все остальные
arr.unshift('Dima', 'Mura');
console.log(arr);
//Удаляет элемент в 1 позиции
arr.splice(1, 1);
console.log(arr);
//Удаляет элемент в первой позиции и возвращает в перемнную
let remoted = arr.splice(1, 1);
console.log(remoted);
//Заменяет элемент в конкретном месте
arr.splice(2, 1, 'NeDura');
console.log(arr);
//Добавляет элемент(ы) ПЕРЕд выбранной позицией
arr.splice(1, 0, 'Afrodita', 'Misha');
console.log(arr);
//Удаляет элемент (если брать отрицательные числа). 
//-1 - означает последний элемент 
arr.splice(-1.1);
console.log(arr);

//Метод slice
let arrTwo = arr.slice(1, 2);
console.log(arrTwo);
let arrF = arr.slice();
console.log(arrF);
//Метод concat
let arrFive = arr.concat('Petya');
console.log(arrFive);

console.log(arr.indexOf('Afrodita'));
console.log(arr.includes('Dura'));
console.log(arr.sort());

let arrNumber = [22, 1, 8];
console.log(arrNumber.sort((a, b) => a - b));

console.log(arr.reverse());
//Метод преобразования массива
let str = 'Vanya, Kolya, Olya';
let arrSTR = str.split(',');
console.log(arrSTR);
let arrSTR1 = str.split(',', 2);
console.log(arrSTR1);

let str1 = arr.join('');
console.log(str1);

//Метод reduce
let arrSumma = [2, 4, 6, 7];
let reduceSumma = arrSumma.reduce(function (previousValue, item, index, array) {
	return item + previousValue;
}, 0);
console.log(reduceSumma);

//Домашка.#1
let arrD = ['Vanya', 'Kolya', 'Olya'];
let newArr = arrD;
newArr.push('Petya');
console.log(arrD);
console.log(arrD.length);
//#2

let usersD = ['Afrodita', 'Vika'];
usersD.push('Olya');
console.log(usersD);
usersD.splice(1, 1, 'Petya');
console.log(usersD);
let resultD = usersD.filter(item => item.length > 0);
console.log(resultD);
//Proverka
if (Array.isArray(resultD)) {
	console.log('Massiv');
} else {
	console.log('Ne massiv');
};
let deletArr = usersD.splice(0, 1);
console.log(deletArr);
console.log(usersD);
usersD.unshift('Masha', 'Pasha');
console.log(usersD);

//#3
let arrD1 = ['Vanya', 'Kolya', 'Olya'];
let deletArr2 = arrD1.splice(1, 1);
console.log(deletArr2);

//#4
let srtD = 'Vanya, Kolya, Olya';
let arrD3 = srtD.split(',');
console.log(arrD3);

//#5
let arrD4 = [9, 2, 8,];
let reduceV = arrD4.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});

//alert
//alert('Privet!');

//Confirm
//const confirmR = confirm('Do you want to verstat?');

//Prompt
//const promptR = prompt("Kto ti?");
//console.log(promptR);

const bodyElement = document.body;
const childNodes = bodyElement.childNodes;
for (let node of childNodes) {
	console.log(node);
};

const bodyChildren = bodyElement.children;
console.log(bodyChildren);

const elemOne = document.querySelectorAll('.script');
console.log(elemOne);

const lessonL = document.querySelector('.lesson-l');
console.log(lessonL);

const elems = document.getElementsByTagName('li');
console.log(elems);

const textElement = document.querySelector('.lesson__text');
const textElementContent = textElement.innerHTML;
console.log(textElementContent);

//textElement.innerHTML = `Живи, а работай в свободное время!`;

textElement.innerHTML = `<p>${textElementContent}</p> <p>Живи и работай в свободное время</p>`;
console.log(textElement.innerHTML);

//const text7ElementContent = textElement.outerHTML;
//console.log(text7ElementContent);


textElement.outerHTML = `<p>Использую ouetrHTML</p>`;
console.log(textElement.outerHTML);


const textElement2 = document.querySelector('.text-test');
const textElementContent2 = textElement2.textContent;
console.log(textElementContent2);

textElement2.textContent = `<p>Тест вставки текста через textContent </p>`;
console.log(textElement2.textContent);

const getComment = textElement2.nextSibling;
console.log(getComment);
console.log(getComment.data);

//Изменение комментария
getComment.data = 'Privet data';
console.log(getComment.data);

//Создание нового элемента
const newElem = document.createElement('div');
console.log(newElem);

newElem.innerHTML = 'Живи, а работай в <span class="red">свободное время</span>';
console.log(newElem);

const newText = document.createTextNode('Stroka with createTextNode');
console.log(newText);
//textElement2.before(newElem);
//textElement2.after(newElem);
//textElement2.prepend(newElem);
textElement2.append(newElem);

//const lessonL = document.querySelector('.lesson-l');
lessonL.insertAdjacentHTML(
	'beforebegin',
	'<p>Это снова проба вставки <spam class ="red"> строки в HTML</span>!</p>',
);

const textElem = document.querySelector('.clonetext');
const cloneTextElement = textElem.cloneNode(true);
const lessonL2 = document.querySelector('.lesson21');
lessonL2.after(cloneTextElement);

const element = document.querySelector('.lesson-l');
console.log(element);
const elementClass = element.className;
console.log(elementClass);
element.classList.add('active');
for (let className of element.classList) {
	console.log(className);
};

element.style.color = "red";

element.style.cssText = `
	margin-bottom:30px;
	background-color:yellow;
`;

console.log(element.style.color);

const elementStyle = getComputedStyle(element);
console.log(elementStyle.color);

lessonL.setAttribute('some-attribute', 'value-attribute');
if (lessonL.hasAttribute('some-attribute')) {
	console.log('Some-attribute существует');
};

//HOMEWORK DOM/ #1
const domHomew = document.querySelector('.homework');
console.log(domHomew.dataset.sayHi);

//#2 
const domLiHome = document.getElementsByTagName('li')[3];
const elemLi = domLiHome.textContent;
console.log(elemLi);

//#3
const domClassH = document.querySelector('.like');
console.log(domClassH);

//#4
const domVstavkaH = document.querySelector('.lesson-ui');
domVstavkaH.insertAdjacentHTML(
	'beforeend',
	'<li>Текст из домашки</li>'
);

//Koordinati
const mainElem = document.documentElement;
const mainElemWidth = mainElem.clientWidth;
const mainElemHeight = mainElem.clientHeight;
console.log(mainElemWidth);
console.log(mainElemHeight);

const windowW = window.innerWidth;
const windowH = window.innerHeight;
console.log(windowW);
console.log(windowH);

//maybe slipet
let scrollWidth = Math.max(
	document.body.scrollWidth, document.documentElement.scrollWidth,
	document.body.offsetWidth, document.documentElement.offsetWidth,
	document.body.clientWidth, document.documentElement.clientWidth
);
let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);
console.log(scrollWidth);
console.log(scrollHeight);

const windowScrollTop = window.pageYOffset;
const windowScrollLeft = windowW.pageXOffset;
console.log(windowScrollTop);
console.log(windowScrollLeft);

//Metrika
const blockM = document.querySelector('.lesson__block');
const elemOffsetPareant = blockM.offsetParent;
console.log(elemOffsetPareant);
const elemOffsetLeft = blockM.offsetLeft;
console.log(elemOffsetLeft);
const elemOffsetTop = blockM.offsetTop;
console.log(elemOffsetTop);

const elemClientLeft = blockM.clientLeft;
console.log(elemClientLeft);
const elemClientTop = blockM.clientTop;
console.log(elemClientTop);

const elemClientWidth = blockM.clientWidth;
console.log(elemClientWidth);
const elemClientHeight = blockM.clientHeight;
console.log(elemClientHeight);

const elemScrollWidth = blockM.scrollWidth;
console.log(elemScrollWidth);
const elemScrollHeight = blockM.scrollHeight;
console.log(elemScrollHeight);

//Js Homework #1
const homeWidthWin = window.innerWidth;
console.log(homeWidthWin);

const homeElem = document.documentElement;
const homeElemWidth = homeElem.clientWidth;
console.log(homeElemWidth);

const homeRaznicaProcrutka = homeWidthWin - homeElemWidth;
console.log(homeRaznicaProcrutka);

//#2
//console.log(homeScrollTop);
//homeTest.scrollTop = 500;
window.scrollTo(0, 100);

//#3
const homeElem1 = document.elementFromPoint(100, 200);
const homeElem2 = document.elementFromPoint(500, 548);
const homeElem3 = document.elementFromPoint(357, 1000);
console.log(homeElem1);
console.log(homeElem2);
console.log(homeElem3);


//Sobitiya
const button = document.querySelector('.button');
//button.onclick = function () {
//	console.log('Клик!');
//};

//ИЛИ (const button  указан выше)
//function showConsole() {
//	console.log('Klik!');
//};
//button.onclick = showConsole;

//const button = document.querySelector('.button');
button.addEventListener("click", function (e) {
	console.log('Клик!');
});
button.addEventListener("click", function (e) {
	console.log('Клак!');
});


const options = {
	"capture": false,
	"once": true,
	"passive": false,
};
const button1 = document.querySelector('.button1');
function showConsole1() {
	console.log('Klik!');
};
button1.addEventListener("click", showConsole1, options);


const button2 = document.querySelector('.button2');
function showConsole2(event1) {
	//console.log(event1.type);
	//console.log(event1.target);
	//console.log(event1.currentTarget);
	//console.log(event1.clientX);
	//console.log(event1.clientY);
	console.log(event1);
};
button2.addEventListener("click", showConsole2);


const block = document.querySelector('.block');
const blockInner = document.querySelector('.block__inner');
const blockInnerInner = document.querySelector('.block__inner-inner');

block.addEventListener("click", function (event) {
	console.log('Клик на блок!');
});

blockInner.addEventListener("click", function (event) {
	console.log('Клик на блок второго уровня!');
}, { "capture": true });

blockInnerInner.addEventListener("click", function (event) {
	console.log('Клик на блок третьего уровня!');
});

//const buttonD = document.querySelectorAll('.button');
//function showConsole3() {
//console.log('Ура!');
//};
//buttonD.forEach(buttonItem => {
//buttonItem.addEventListener("click", showConsole3);
//});



const lessonD = document.querySelector('.lesson');
function showConsole3() {
	console.log('Ура!');
};
lessonD.addEventListener("click", function (event) {
	if (event.target.closest('button')) {
		showConsole3();
	}
});

const menuBody = document.querySelector('.menu');
document.addEventListener("click", menu1);
function menu1(event) {
	if (event.target.closest('.menu__button')) {
		menuBody.classList.toggle('_active');
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active');
	}
};

document.addEventListener("keyup", function (event) {
	console.log(event.code);
	if (event.code === 'Escape') {
		menuBody.classList.remove('_active');
	};
});

const link1 = document.querySelector('.link');
link1.addEventListener("click", function (event) {
	console.log('Наши действия');
	event.preventDefault();
});

const buttonM = document.querySelector('.button-click');

buttonM.addEventListener("mousedown", function (event2) {
	console.log(`нажата кнопка ${event2.which}`);
});
buttonM.addEventListener("click", function (event2) {
	console.log(`нажата основная кнопка мыши`);
});
buttonM.addEventListener("contexmenu", function (event2) {
	console.log(`Вызвано контексное меню`);
});

document.addEventListener("keydown", function (event) {
	console.log(`Нажата клавиша ${event.code} (${event.key})`);
});
document.addEventListener("keyup", function (event) {
	console.log(`Отжата клавиша ${event.code} (${event.key})`);
});

document.addEventListener("keydown", function (event) {
	if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
		console.log('Отмена действий! (клавиша Z)');
	};
});

//const txtItem = document.querySelector('.textarea__item');
//const txtItemLimited = document.querySelector('maxlength');
//const txtCounter = document.querySelector('.textarea__counter span');
//txtCounter.innerHTML = txtItemLimited;

//txtItem.addEventListener("keyup", txtSetCounter);
//function txtSetCounter() {
//	const txtCounterResult = txtItemLimited - txtItem.value.length;
//	txtCounter.innerHTML = txtCounterResult;
//};

//txtItem.addEventListener("keydown", function (event) {
//	if (event.repeat) txtSetCounter();
//});


//PROKRYTKA (scroll)
//window.addEventListener("scroll", function (event) {
//	console.log(`${scrollY}px`);
//});

document.addEventListener("DOMContentLoaded", readyDom);
window.addEventListener("load", redyLoad);

function readyDom() {
	const image = document.querySelector('.image');
	console.log(document.readyState);
	console.log('Dom загружен!');
	console.log(image.offsetWidth);
};

function redyLoad() {
	console.log(document.readyState);
	const image1 = document.querySelector('.image');
	console.log('Станица загружена!');
	console.log(image1.offsetWidth);
};

//Homework
const homeWork = document.querySelector('.domashka');
document.addEventListener("click", homeworkClick);
function homeworkClick(eventH) {
	if (eventH.target.closest('.button-doma')) {
		homeWork.classList.toggle('_active');
	};
	if (!eventH.target.closest('.domashka')) {
		homeWork.classList.remove('_active');
	};
};
document.addEventListener("keyup", function (eventH) {
	console.log(eventH.code);
	if (eventH.code === 'Escape') {
		homeWork.classList.remove('_active');
	};
});

const homeTextarea = document.querySelector('.textarea__doma');
const homeLength = document.querySelector('maxlenght');
const homeTextareaText = document.querySelector('.textarea__text-doma span');
homeTextareaText.innerHTML = homeLength;

homeTextarea.addEventListener("keyup", setOffHome);
function setOffHome() {
	const homeResult = homeLength - homeTextarea.value.length;
	homeTextareaText.innerHTML = homeResult;
};

homeTextarea.addEventListener("keydown", function (eventHH) {
	if (eventHH.repeat) setOffHome;
});

//Js and Forms
document.body.insertAdjacentHTML(
	"afterbegin",
	`<form name="some" class="some-form" action="#">Поле ввода</form>`
);

console.log(document.forms);

const mainForm = document.forms.main;
const mainFormInput = mainForm.element.nameInput;
//const mainFormtextarea = mainForm.elements.nameTextarea;
console.log(mainFormInput.value);
















// zad 1
const ex1 = function () {
	console.log("==========ZADANIE 1==========");
	str = "";
	for (let i = 1; i <= 100; i++) {
		if (i % 6 === 0) str += "FizBuz ";
		else if (i % 2 === 0) str += "Fiz ";
		else if (i % 3 === 0) str += "Buz ";
		else {
			str += i + " ";
		}
	}
	return str;
};

// zad 2
const ex2 = function () {
	const r = Number(prompt("Wprowadz promień koła:"));
	if (isNaN(r)) {
		alert("Wprowadz liczbę!");
		ex2();
	} else {
		const obw = 2 * Math.PI * r;
		const p = Math.PI * r ** 2;
		alert(`Obwód wynosi ${obw.toFixed(2)};\nPole wynosi ${p.toFixed(2)}`);
	}
};

//zad 3
const arr = [];
const createArr = () => {
	console.log("==================zadanie 3===================");
	let sum = 0;
	while (sum < 200) {
		const rand = Math.floor(Math.random() * 10 + 1);
		sum += rand;
		arr.push(rand);
	}
};
createArr();
console.log("===3 a)=== ", arr);

const findMin = () => {
	let minValue = arr[0];
	for (item of arr) {
		if (item < minValue) minValue = item;
	}
	arr.splice(
		arr.findIndex((el) => el == minValue),
		1
	);
};
findMin();
console.log("===3 b)=== ", arr);

const findMax = () => {
	let maxValue = arr[0];

	for (item of arr) {
		if (item > maxValue) maxValue = item;
	}
	arr.splice(arr.lastIndexOf(maxValue), 1);
};
findMax();
console.log("===3 c)=== ", arr);

const countDuplicates = () => {
	const counts = {};
	arr.forEach((item) => {
		counts[item] = (counts[item] || 0) + 1;
	});
	console.log("===3 d)===", counts);
};
countDuplicates();

const moveToTheEnd = () => {
	const newArr = arr.splice(0, 10);
	arr.push(...newArr);
	console.log("===3 f)=== ", arr);
};
moveToTheEnd();

// zad 4
const names = ["Kamila", "Adrianna", "Bogusław", "Franciszek", "Kleopatra"];
const codeNames = () => {
	console.log("==================zadanie 4===================");

	names.forEach((name, idx) => {
		names[idx] = name.replace(/[aA]/g, "4").replace(/[eE]/g, "3");
		// names[idx] = names[idx].replace(/[eE]/g, "3");
		if (name.length > 6) {
			const middle = names[idx].slice(3, -3);
			names[idx] = names[idx].replace(middle, "...");
		}
	});
};
codeNames();
console.log(names);

// zad 5
const cart = () => {
	console.log("==================zadanie 5===================");
	const str =
		"jajka, mleko, masło, chleb, kiwi, papier, mydlo, pieczarki, zupa, kluski";
	const shopArr = [];
	const cartArr = [];
	let cartPrice = 0;
	const strArr = str.split(", ");

	strArr.forEach((item) => {
		shopArr.push({ name: item, price: (Math.random() * 10).toFixed(2) });
	});
	console.table(shopArr);

	while (cartArr.length < shopArr.length / 2) {
		const rand = Math.floor(Math.random() * shopArr.length);
		if (!cartArr.includes(shopArr[rand])) {
			const amount = Math.floor(Math.random() * 9 + 1);
			cartArr.push({
				...shopArr[rand],
				amount: amount,
			});
			cartPrice += shopArr[rand].price * amount;
		}
	}
	console.table(cartArr);
	console.log(cartPrice.toFixed(2));
};
cart();

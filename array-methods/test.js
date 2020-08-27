"use strict";

const clients = ["Archi", "Kolin", "Tanya"];

const newClients = ["Jon", "Flex", "Radmin"];

const name = "PersonX";
let arrayLength = clients.length; //длина массива

console.log(clients);

//получаем доступ по индексу к значению массива и переопрелделение===================
// const clientsName = clients[2];
// console.log(clientsName);

// clients[2] = "NewClients";
// console.log(clients);

// Итерация по массиву==============================================================
// for (let i = 0; i < clients.length; i += 1) {
//   console.log("Client Name is:", clients[i]);
// }

// Добавление елементов в массив в конец============================================
// for (let i = 0; i < 500; i += 1) {
//   clients.push(`NewClients-${i}`);
// }
// console.log(clients);

// Цыкл For of======================================================================
// for (const item of clients) {
//   console.log(item);
// }

// Цыкл For of итерация по строке======================================================================
// let someString = "Hellow World";
// for (let item of someString) {
//   item += " Char-";
//   console.log(item);
// }
// Прерывание цыкла при найденом елементе======================================================================
// let someName = "Tanya";
// let message = "Такого имени нету в массиве";
// for (let item of clients) {
//   if (item === someName) {
//     message = "Tanya is in array";
//     break; //если нашли то пририваем итерацию по массиву
//   }
//
// }
// console.log(message);

// Прерывание итерации в цыкле при найденом елементе======================================================================
// const Arrays = [4, 223, 3, 4, 7, 5, 10, 23, 45];
// const someNumber = 15;

// for (let item of Arrays) {
//   if (item < someNumber) {
//     continue; //приреваем текущую итерацию цыклаесли число меньше заданного а все больше виводим
//   }
//   console.log(item);
// }

// Join and split======================================================================
// const message = "Ytllow world how are you";
// let arrStr = message.split(" ");
// console.log(arrStr); //["Ytllow", "world", "how", "are", "you"]

// let newStr = arrStr.join("-");
// console.log(newStr);//Ytllow-world-how-are-you

// indexOf() и includes()======================================================================
// const newArrItem = ["dg", "fff", "fdfh"];

// let a = newArrItem.indexOf("fff");
// console.log(a); //1
// let b = newArrItem.includes("dg");
// console.log(b); //true
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';

// if (redFruits.includes(fruit)) {
//     сonsole.log('It is a red fruit!');
// }

// slice и splice======================================================================
// const Arrays2 = [4, 223, 3, 4, 7, 5, 10, 23, 45];
// let newAray3 = Arrays2.slice(1, 4);
// console.log(newAray3);
// const scores = [1, 2, 3, 4, 5];

// // Следующая операция удаляет три элемента массива,
// // начиная с первого элемента (индекс 0).
// const deletedScores = scores.splice(0, 3);

// // Теперь массив scores содержит два элемента.
// console.log(scores); // [4, 5]

// // А массив deletedScores содержит три удаленных элемента.
// console.log(deletedScores); // [1, 2, 3]

// concat======================================================================
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);
// ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

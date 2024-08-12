/* - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б-*/
// function square(a,b){
//     return a*b;
// }
// let result = square(5,15);
// console.log(result);
/*- створити функцію яка обчислює та повертає площу кола з радіусом r-*/
// function circle(r){
//     return Math.PI*(r*r);
// }
// let result = circle (15);
// console.log(result);
/*-створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r-*/
// function cylinder(r,h){
//     return 2*Math.PI*r*h;
// }
// let result = cylinder(3, 5);
// console.log(result);
/*-створити функцію яка приймає масив та виводить кожен його елемент-*/
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// function arrayPrinter(arr){
//     for(const arrElement of arr){
//         console.log(arrElement);
//     }
// }
//     arrayPrinter(users);
/*-творити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент-*/
// function printToDocument(text){
//     document.write(`<p>${text}</p>`);
// }
// printToDocument('Attention');
/*-створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий-*/
   // function printToDocument(msg){
   //  document.write(`<ul>
   //      <li>${msg}</li>
   //      <li>${msg}</li>
   //      <li>${msg}</li>
   //  </ul>`);
   // }
   // printToDocument('Welcome');
/*-ворити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
#gEFoxMMO-*/
// function foobar (text,counter){
//     document.write('<ul>')
//         for (let i = 0; i < counter; i++)
//     {
//         document.write(`<li>${text}</li>`);
//     }
//         document.write('</ul>');
// }
// foobar('welcome',3)
/*-створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write-*/
// function foobar(arrayOfElements){
// document.write('<ul>');
//     for (const part of arrayOfElements) {
//         document.write(`<li>${part}</li>`)
//     }
// document.write('</ul>');
//     }
// foobar([458, false, 745, 'new', 'type',]);
/*-створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.-*/
// function foobar (users) {
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
//     }
// }
//      foobar([
//          {id:1, name: 'orange',age:35},
//          {id:2, name: 'white',age:12},
//          {id:3, name: 'alpha',age:46},
//      ])
/*-створити функцію яка повертає найменьше число з масиву-*/
// function arrayOfMin(numbers){
//     let min = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         let number = numbers[i];
//         if (number < min) {
//             min = number;
//         }
//     }
//         return min;
//
// }
// console.log(arrayOfMin([12, 48, -45, 0, 54]))
/*-створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13-*/
// function sumArray(array) {
//     let count = 0;
//     for (const item of array) {
//         count = count+item;
//
//     }
//     return count
// }
//
// let result = sumArray([10,15,25])
// console.log(result)
/*-створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах-*/
// function swap(arr,index1, index2){
//     let numb = arr[index1]
//     arr[index1] = arr[index2]
//     arr[index2] = numb
//
//     return arr;
// }
// console.log( swap([11,22,33,44],0,1))
/*-Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)-*/
// function sum(sumUAH,currencyValues,exchangeCurrency){
//       let currencyName;
//          for(const item of currencyValues) {
//              if (item.currency === exchangeCurrency) {
//                  currencyName = item;
//              }
//
//          }
//          let result = sumUAH/currencyName.value;
//          return result;
//          }
//
//     console.log(sum(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'EUR'))
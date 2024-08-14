/*-створити функцію яка обчислює та повертає  зі сторонами а і б-*/
// let calc = (a, b)=>a*b
// console.log(calc(10,20))
/*-створити функцію яка обчислює та повертає площу кола з радіусом r-*/
// let calc = r => Math.PI*(r*r)
// console.log(calc(20))
/*-творити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r-*/
// let calc = (r,h) => 2*Math.PI*r*h
// console.log(calc(20,30))
/*-створити функцію яка приймає масив та виводить кожен його елемент-*/
// function userBilder (name,age,status){
// let user ={
//     name,
//     age,
//     status
// };
// return{
//     getName:() =>{
//     console.log(user.name);
//     },
//     getAge:() =>{
//         console.log(user.age);
//     },
//     getStatus:() =>{
//         console.log(user.status);
//     }
//
// };
// }
// let manipulatorOverUser1 = userBilder('vasya',31, true);
// let manipulatorOverUser2 = userBilder('petya',30, false);
// manipulatorOverUser1.getName();
// manipulatorOverUser1.getAge();
// manipulatorOverUser1.getStatus();
// manipulatorOverUser2.getName();
// manipulatorOverUser2.getAge();
// manipulatorOverUser2.getStatus();
/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент-*/
// let foobar = (text) => document.write(`<p>${text}</p>`);
// console.log(foobar('hello'));
/*-- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий-*/
// let foobar = (msg) =>document.write(`<ul><li>${msg}</li><li>${msg}</li><li>${msg}</li></ul>`);
// console.log(foobar('welcome'));
/*-створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)-*/
//             let foobar = (text, counter) =>
//                 {document.write(`<ul>`)
//                     for (let i = 0; i < counter; i++)
//                 {
//                     document.write(`<li>${text}</li>`)
//                 }
//                     document.write(`</ul>`);
//             }
// foobar('hello',3)
/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список-*/
//
// let foobar = (arrayOfElements)=>
//                     { document.write(`<ul>`);
//                         for (const item of arrayOfElements) {
//                             document.write(`<li>${item}</li>`)
//                         }
//                         document.write(`</ul>`);
//                     }
// foobar([458, false, 745, 'new', 'type',]);
/*-створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.-*/

// let users=(arrayOfUsers)=>{
//     for (const user of arrayOfUsers) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
//     }
// }
// users([{id:1, name:'olya', age:32},
//                   {id:2,name:'vira', age:54}])
/*-створити функцію яка повертає найменьше число з масиву-*/
// const arrayOfNumbers = (arr) =>{
//     let minimal=arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<minimal){
//             minimal=arr[i];
//         }
//     }
//     return minimal;
// }
// let arr = [25,45,155,55,44,54,87];
// let minNum = arrayOfNumbers(arr)
// console.log(minNum)
/*-створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13-*/
// const sum = (arr) =>{
//     let count=0
//     for (const item of arr) {
//         count= count+item
//
//     }
//     return count
// }
// console.log(sum([2,52,44]))
/*-створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]-*/
// const swap = (arr,index1,index2)=>{
//     let numb = arr[index1];
//     arr[index1]= arr[index2];
//     arr[index2]=numb;
//     return arr
// }
// console.log(swap([11,22,33,44],0,1));
/*-Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)-*/
// const exchange = (sumUAH,currencyValues,exchangeCurrency)=>{
//     let currencyMain;
//     for (const item of currencyValues) {
//         if(item.currency === exchangeCurrency){
//             currencyMain=item
//             let result = sumUAH/currencyMain.value
//             return result
//         }
//     }
// }
// console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))
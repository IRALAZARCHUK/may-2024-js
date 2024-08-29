// const buttons = document.getElementsByTagName('button')
// const button = buttons[0]
//
// button.onclick = function (){
//     document.getElementById('text').remove()
// }
/*- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача-*/
// document.getElementById('btn').addEventListener("click", function (){
//     const age = document.getElementById('yourAge').value
//     const text = document.getElementById('text')
//
//     if(age<18){
//         text.innerText = 'You are going to watch cartoon'
//     }
//     else {
//         text.innerText = 'You are going to watch a film'
//     }
// })
/*-Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом-*/

// const userForm = document.forms.userForm;
// const block = document.getElementById('block')
// userForm.addEventListener('click' , function (i) {
//     i.preventDefault()
//     const yourName = userForm.name.value
//     const yourSurname = userForm.surname.value
//     const yourAge = userForm.age.value
//     let obj = {yourName, yourSurname, yourAge}
//     console.log(obj)
//     block.innerText = yourName + ' ' + yourSurname + ' ' + yourAge
// })
/*-є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1-*/
// let counter = localStorage.getItem('number') || 0
// counter =parseInt(counter) + 1
// localStorage.setItem('number', counter);
//
// document.getElementById('box').innerText = counter
/*-створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок-*/
// const input = document.getElementById('meaning')
// const sum = document.getElementById('sum')
// input.oninput = function (){
//     const kg = +this.value
//     let result = kg*2.2
//     sum.innerText = result
// }
/*-В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
сигнатура функції -
addToLocalStorage(arrayName:string,objToAdd:any{}):void-*/
// function addToLocalStorage (arrayName,objToAdd){
//     localStorage.getItem(arrayName)
//     const array = JSON.parse(localStorage.getItem(arrayName))
//     if(typeof objToAdd === 'object'){
//     array.push(objToAdd)
//     }
//     localStorage.setItem(arrayName, JSON.stringify(array))
// }
/*-Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.-*/
// function generateTable(){
//     const rows = document.getElementById('rows').value
//     const cells = document.getElementById('cells').value
//     const content = document.getElementById('content').value
//
//     let table = '<table>';
//     for (let i = 0; i < rows; i++) {
//         table += '<tr>';
//         for (let j = 0; j < cells; j++) {
//             table += `<td>${content}</td>`
//         }
//         table += '</tr>';
//     }
//     table +='</table>'
//     document.getElementById('container').innerText = table
// }
/*-(подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
при перезавантаженні сторінки до значаення додається по 10грн, але !!!
 зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
 При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається-*/
// const reload = localStorage.getItem('reload')
// const currentTime = Date.now()
// const price = document.getElementById('priceValue')
//
// let currentPrice = parseInt(price.innerText)
//
// if(!reload || (currentTime - reload) > 10000){
//     currentPrice += 10
//     price.innerText = currentPrice + 'грн'
//     localStorage.setItem('reload', currentTime)
// }
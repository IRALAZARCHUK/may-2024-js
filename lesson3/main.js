// /*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/
// let holidays =[
//     {
//         name:'Різдво',
//         info:'Різдво святкують 25 грудня (у західних країнах) та 7 січня (у східних країнах).'
//     },
//     {
//         name:'Новий рік',
//         info:'Новий рік святкують у ніч з 31 грудня на 1 січня. '
//     },
//     {
//         name:'Святий Миколай',
//         info:'Свято святого Миколая відзначають 19 грудня (6 грудня в західній традиції).'
//     },
//     {
//         name:'Старий Новий рік',
//         info:'Старий Новий рік святкують в ніч з 13 на 14 січня.'
//     },
//     {
//         name:'Свято Трьох Царів',
//         info:'Свято Трьох Царів, або Богоявлення, відзначають 6 січня.'
//     },
//     {
//         name:'Щедрий вечір',
//         info:'Щедрий вечір святкують 13 січня, напередодні Старого Нового року.'
//     },
//     {
//         name:'Свято Ганни',
//         info:'Свято Ганни відзначають 22 грудня.'
//     },
//
//     {
//         name:'Водохреща',
//         info:'Водохреща святкують 19 січня. Це свято пов\'язане з хрещенням Ісуса Христа в річці Йордан.'
//     },
//     {
//         name:'Андріївські вечорниці',
//         info:'Андріївські вечорниці святкують 13 грудня, в день святого Андрія Первозванного.'
//     },
// ];
//
//
// for (const holiday of holidays) {
//     document.write(
//         `<div class="box">
//                 <h2>${holiday.name}</h2>
//                 <p>${holiday.info}</p>
//             </div>`);
// }
// /*----------2------*/
/* За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/

//
// let persons=[
//     {name:'Olya', age: 34},
//     {name:'Olya', age: 34},
//     {name:'Olya', age: 34},
//     {name:'Olya', age: 34},
//     {name:'Olya', age: 34},
//     {name:'Olya', age: 34},
//     {name:'Olya', age: 34},
//     {name:'Olya', age: 34},
//     {name:'Olya', age: 34},
//     {name:'Olya', age: 34},
// ]
// for (let i = 0; i < persons.length; i++) {
//     const element = (persons[i]);
//     console.log(element);
//   document.write(
//       `<div><h2>${element.name} вік - ${element.age}</h2>
//
// </div>`
//   )
// }
/*------3-----*/
/*За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/
// let students=[
//     {title:'BA', year:2014 },
//     {title:'MA', year:2024 },
//     {title:'BA', year:2020 },
//     {title:'BA', year:2014 },
//     {title:'BA', year:2016 },
//     {title:'MA', year:2014 },
//     {title:'Phd', year:2018 },
//     {title:'BA', year:2014 },
//     {title:'BA', year:2012 },
//     {title:'MA', year:2014 },
//     {title:'BA', year:2013 },
//     {title:'Phd', year:2014 },
//     {title:'BA', year:2011 },
//     {title:'BA', year:2010 },
//     {title:'BA', year:2014 },
//     {title:'MA', year:2014 },
//     {title:'BA', year:2006 },
//     {title:'BA', year:2014 },
//     {title:'Phd', year:2008 },
//     {title:'BA', year:2014 },
// ];
// let i=0;
// while(i<students.length){
//     let student=students[i];
//     console.log(students[i]);
//     i++;
//     document.write(`<div><h1>${student.title}</h1></div>`)
// }
/*-----4--------*/
/*------ Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону------*/
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// for (const item of listOfItems){
//     document.write(`<ul>
//         <li>${item}</li>
//     </ul>`)
// }
/*-----5-----*/
/*-----Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону----*/
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// for(const product of products){
//     document.write(
//         `<div class="product-card">
//             <h3 class="product-title"> Title ${product.title} <br> Price ${product.price}</h3>
//             <img src="${product.image}" alt="" class="product-image">
//         </div>`
//     )
// }
/*-----6-----*/
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
//
// for (const user of users) {
//     if (user.age>30){
//         console.log('good')
//     }
// }
// let arrTrue = [];
// let arrFalse = [];
//
// let i=0;
// while (i<users.length){
//
//     let user = users[i];
//     if(user.status){
//         arrTrue[arrTrue.length] = user
//     }else {
//         arrFalse[arrFalse.length] = user
//     }
//     i++;
// }
// console.log(arrTrue);
// console.log(arrFalse);
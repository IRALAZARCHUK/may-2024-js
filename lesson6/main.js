/*-Знайти та вивести довижину настипних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool'-*/
// let a = 'hello world'
// console.log(a.length);
// let b = 'lorem ipsum'
// console.log(b.length);
// let c = 'javascript is cool'
// console.log(c.length);
/*-Перевести до великого регістру наступні стрінгові значення
      'hello world', 'lorem ipsum', 'javascript is cool'-*/
// let a = 'hello world'
// console.log(a.toUpperCase());
// let b = 'lorem ipsum'
// console.log(b.toUpperCase());
// let c = 'javascript is cool'
// console.log(c.toUpperCase());
/*-Перевести до нижнього регістру настипні стрінгові значення
'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'-*/
// let a = 'HELLO WORLD'
// console.log(a.toLowerCase());
// let b = 'LOREM IPSUM'
// console.log(b.toLowerCase());
// let c = 'JAVASCRIPT IS COOL'
// console.log(c.toLowerCase());
/*-Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.-*/
// let str = ' dirty string   '
// let string = str.trim()
// console.log(string);
/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';-*/
// function stringToArray(str){
//     let s = str.split(' ')
//     return s;
// }
// console.log (strє масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові. . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.-*/
// let numbers =  [10,8,-7,55,987,-1011,0,1050,]
// let stringNumbers = numbers.map(number=>{
//     return number + ' '
// })
// console.log(stringNumbers);
/*-створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]-*/
// function sortNums(array,direction){
//     if(direction === 'ascending'){
//         return array.sort ((a,b)=> a-b);
//     }else if (direction === 'descending'){
//         return array.sort ((a,b)=> b-a);
//     }
// }
// let nums = [11,21,3];
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));
/*-- є масив-*/
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sort = coursesAndDurationArray.sort((a,b) =>{
//     return b.monthDuration-a.monthDuration;
// });
// console.log(sort);
// let filteredCoursesAndDurationArray = coursesAndDurationArray.filter(value => value.monthDuration>5);
// console.log(filteredCoursesAndDurationArray);
// let mapedCoursesAndDurationArray = coursesAndDurationArray.map(function (value, index){
//     return {...value, id:index+1};
// });
// console.log(mapedCoursesAndDurationArray);
/*- описати колоду карт (від 6 до туза без джокерів)-*/
// const suits = ['spade', 'diamond','heart', 'clubs'];
// const values = ['6','7','8','9','jack','queen','king','ace'];
// const cards =[]
// for (const suit of suits) {
//     for (const value of values) {
// const card ={cardSuite:suit, value:value};
// if( suit === 'diamond' || suit ==='heart') {
//     card.color = 'red'} else {
//     card.color = 'black';
// }
// cards.push(card);
//     }
//
// }
// console.log(cards);
//
//
// console.log(cards.find(card=> card.value === 'ace'&& card.cardSuite === 'spade'));
// console.log(cards.filter(card=>card.value === '6'));
// console.log (cards.filter(card=>card.color ==='red'));
// console.log(cards.filter(card=>card.cardSuite === 'diamond'));
// console.log(cards.filter(card=>card.cardSuite === 'clubs' && (card.value !== '6'&& card.value !== '7'&& card.value !== '8' && card.value !== '9') ))
/*-Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт-*/
// const suits = ['spade', 'diamond','heart', 'clubs'];
// const values = ['6','7','8','9','jack','queen','king','ace'];
// const cards =[]
//
//
// suits.forEach(suit => {
//     values.forEach(value => {
//         cards.push({ cardSuit: suit, value: value });
//     });
// });
// const packOfCards = cards.reduce((acc, card)=>{
//     switch(card.cardSuit){
//         case 'spade':
//             acc.spades.push(card);
//             break;
//         case 'diamond':
//             acc.diamonds.push(card);
//             break;
//         case 'heart':
//             acc.hearts.push(card);
//             break;
//         case 'clubs':
//             acc.clubs.push(card);
//             break;
//     }
//     return acc;
// },{
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// });
// console.log(packOfCards);
/*-взяти з arrays.js масив coursesArray-*/
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// const sass =coursesArray.filter(course=>{
// return course.modules.includes('sass');
// });
// console.log(sass);
// const docker =coursesArray.filter(course=>{
//     return course.modules.includes('docker');
// });
// console.log(docker);
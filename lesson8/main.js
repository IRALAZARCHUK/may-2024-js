/*-є масив
за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції-*/
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.map((course,index)=>({...course, id:index+1})));
/*-1-*/
// function copyJson(obj) {
//     return JSON.parse(JSON.stringify(obj, (key, value) => {
//
//         if (value === undefined) {
//             return 'undefined';
//         }
//
//
//         if (typeof value === 'number' && isNaN(value)) {
//             return 'NaN';
//         }
//         if (value === null) {
//             return 'null';
//         }
//         return value;
//     }));
// }
//
//     const test = {
//         arr: [1, NaN, undefined, null],
//     }
//     const copy = copyJson(test);
//
// console.log(copy);
// function clone (obj){
//     if(obj){
//         let functions = []
//         for (const key in obj){
//         if(typeof obj [key] === 'function'){
//             const functionClone = obj[key].bind({});
//             functions.push({functionClone,key});
//         }
//         }
//         const cloneObj = JSON.parse(JSON.stringify(obj));
//             for (const func of functions) {
//                cloneObj[func.key] = func.functionClone;
//             }
//             return cloneObj
//     }
// }
// const cloner = clone({greeting(){console.log('hello')}})
// console.log(cloner);
// cloner.greeting();
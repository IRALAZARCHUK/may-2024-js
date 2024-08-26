// let box = document.createElement('div')
// box.innerText = 'hello'
// box.classList.add('wrap', 'collapse', 'alpha', 'beta')
// box.style.background = 'silver';
// box.style.color = 'white';
// box.style.fontSize = '20px';
// box.style.margin = '10px'
// document.body.appendChild(box);
// let cloneBox = box.cloneNode(true)
// document.body.appendChild(cloneBox)
/*-Є масив:
['Main','Products','About us','Contacts']
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)-*/
// let items =['Main','Products','About us','Contacts'];
// let ul = document.createElement('ul');
// for (const item of items) {
//     let li = document.createElement('li')
//     li.innerText = item;
//     ul.appendChild(li)
// }
// document.body.appendChild(ul)
/*-jeBqHV525U5
- Є масив
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.-*/
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const item of coursesAndDurationArray) {
// let coursesInfo = document.createElement('div')
//     let h2 = document.createElement('h2')
//     let p = document.createElement('p')
//     h2.innerText = item.title;
//     p.innerText = item.monthDuration;
//    coursesInfo.append(h2,p)
//     document.body.appendChild(coursesInfo)
// }
/*- Є масив
За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
Завдання робити через цикли.-*/
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let div = document.createElement('div')
//     div.classList.add('item')
//
//     let h1 = document.createElement('h1')
//     h1.classList.add('heading')
//     h1.innerText = coursesAndDurationArrayElement.title
//
//     let p = document.createElement('p')
//     p.classList.add('description')
//     p.innerText = coursesAndDurationArrayElement.monthDuration
//     div.append(h1,p)
//     document.body.appendChild(div)
// }
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
// for (const coursesArrayElement of coursesArray) {
//     let divCourses = document.createElement('div')
//     let div1 = document.createElement('div1')
//     div1.classList.add('title')
//     div1.innerText = coursesArrayElement.title
//
//     let div2 = document.createElement('di2')
//     div2.classList.add('monthDuration')
//     div2.innerText = coursesArrayElement.monthDuration
//
//     let div3 = document.createElement('div3')
//     div3.classList.add('hourDuration')
//     div3.innerText = coursesArrayElement.hourDuration
//
//     let ul = document.createElement('ul')
//     for (const module of coursesArrayElement.modules) {
//      let li = document.createElement('li')
//         li.innerText = module
//         ul.appendChild(li)
//     }
//
//     divCourses.append(div1,div2,div3,ul)
//     document.body.append(divCourses)
// }

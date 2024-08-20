/*-Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)-*/
// function User(id, name, surname , email, phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
// let user = new User(1,'olga','ivankiv','olga@meta.ua',154855888);
// console.log(user);
// let users =[
//     new User(1,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(2,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(3,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(4,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(5,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(6,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(7,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(8,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(9,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(10,'olga','ivankiv','olga@meta.ua',154855888),
// ]
// console.log(users);
/*-Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)-*/
// function User(id, name, surname , email, phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
// let user = new User(1,'olga','ivankiv','olga@meta.ua',154855888);
// // console.log(user);
// let users =[
//     new User(1,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(2,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(3,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(4,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(5,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(6,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(7,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(8,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(9,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(10,'olga','ivankiv','olga@meta.ua',154855888),
// ]
// // console.log(users);
// let filteredUsers = users.filter(user=>user.id % 2 === 0)
// console.log(filteredUsers);
/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)-*/
// function User(id, name, surname , email, phone){
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
// }
// let user = new User(1,'olga','ivankiv','olga@meta.ua',154855888);
// // console.log(user);
// let users =[
//     new User(1,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(2,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(3,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(4,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(5,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(6,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(7,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(8,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(9,'olga','ivankiv','olga@meta.ua',154855888),
//     new User(10,'olga','ivankiv','olga@meta.ua',154855888),
// ]
// // console.log(users);
// let sort = users.sort((x1,x2)=>{
// return x1.id - x2.id
// });
// console.log(sort);
/*-створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client-*/
// class Client{
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let clients = [
//     new Client(1, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item1']),
//     new Client(2, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item2']),
//     new Client(3, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item3', 'item4']),
//     new Client(4, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item5']),
//     new Client(5, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item6']),
//     new Client(6, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item7']),
//     new Client(7, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item8']),
//     new Client(8, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item9']),
//     new Client(9, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item10']),
//     new Client(10, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item11'])
// ];
// console.log(clients);
/*-Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
-*/
// class Client{
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let clients = [
//     new Client(1, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item1']),
//     new Client(2, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item2','item6']),
//     new Client(3, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item3']),
//     new Client(4, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item5','item2','item13']),
//     new Client(5, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item6','item13','item12','item15']),
//     new Client(6, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item7']),
//     new Client(7, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item8','item12','item20','item18','item19']),
//     new Client(8, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item9']),
//     new Client(9, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item10']),
//     new Client(10, 'Ivan', 'turov','eiei@uey.ua', 65488554, ['item11'])
// ];
// let sort = clients.sort((x1,x2)=>{
//     return x1.order.length-x2.order.length
// })
// console.log(clients);
/*-Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:-*/
// function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function () {
//         for (const item in this) {
//             console.log(item, this[item]);
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//         console.log(`Нова максимальна швидкість: ${this.maxSpeed} км/год`);
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log(`Новий рік випуску: ${this.year}`);
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
// let car = new Car ('audi', 'audi ag', 1996, 260, 1998)
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(400);
// car.changeYear(2014);
// car.addDriver();
// console.log(car);
/*- (Те саме, тільки через клас)-*/
// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//
//     }
//     drive  () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info () {
//         for (const item in this) {
//             console.log(item, this[item]);
//         }
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//         console.log(`Нова максимальна швидкість: ${this.maxSpeed} км/год`);
//     };
//     changeYear  (newValue) {
//         this.year = newValue;
//         console.log(`Новий рік випуску: ${this.year}`);
//     };
//     addDriver  (driver) {
//         this.driver = driver;
//     }
// }
//
// let car = new Car ('audi', 'audi ag', 1996, 260, 1998)
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(400);
// car.changeYear(2014);
// car.addDriver();
// console.log(car);
/*---*/
// class Cinderella{
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// class Prince{
//     constructor(name, age, shoeFound) {
//         this.name = name;
//         this.age = age;
//         this.shoeFound = shoeFound;
//     }
// }
// let Cinderellas =[
//     new Cinderella('Alice', 25, 36),
//     new Cinderella('Aley', 35, 38),
//     new Cinderella('Olivia', 25, 40),
//     new Cinderella('Ingret', 28, 37),
//     new Cinderella('Monika', 25, 36),
//     new Cinderella('Karol', 27, 35),
//     new Cinderella('Malvel', 22, 36),
//     new Cinderella('Pedra', 35, 39),
//     new Cinderella('Ires', 21, 34),
//     new Cinderella('Alice', 25, 37),
//
// ]
// let prince = new Prince('Petro', 25 ,34)
// for (const Cinderella of Cinderellas) {
//     if(Cinderella.footSize === prince.shoeFound){
// console.log(`Prince found his cinderella`)
//     }
// }
//
// let cinderellaOne = Cinderellas.find(Cinderella=>Cinderella.footSize===prince.shoeFound);
// prince.found = cinderellaOne
// console.log(cinderellaOne)
/*-Через Array.prototype. створити власний foreach, filter-*/
// Array.prototype.myForEach = function (callback){
//     const newArray = this;
//     for (const item of newArray) {
//                     callback(item)
//     }
// };
//
//    [10, 15, 22].myForEach((x)=>console.log(x));

// Array.prototype.myFilter = function (predicate){
//     const arr =[]
//     for (const item of this) {
//         if(predicate(item)){
//             arr.push(item);
//         }
//     }
//     return arr;
// }

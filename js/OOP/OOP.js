/*1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами User*/

/*class User {
  constructor(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
  }
}

const userData = [];
const user = new User(1, 'Anakonda', 'Ihorivna', 'anakonda@gmail.com', +3809982949580)
userData.length = 10;
userData.fill(user);
console.log(userData);*/

/*2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/

/*class Client {
  constructor(id, name , surname , email , phone , order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.order = order;
  }
}
const order = ['kovbasa', 'cheese', 'oat', 'juice','potato','tomato','onion','leak','bread','water']
const client = new Client(1,'Misha','Lysak','misha@gmail.com','+380687878986',order);
console.log(client);*/

/*3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car*/

/*function Car(model , make , year , maxspeed , engineCapacity){
  this.model = model;
  this.make = make;
  this.year = year;
  this.maxspeed = maxspeed;
  this.engineCapacity = engineCapacity;

  this.drive = () => {
    console.log(`Їдемо зі швидкістю ${maxspeed} на годину`)
  }
  this.info = () => {
    console.log(`Model ${this.model}, made by ${this.make}, ${this.year} ,km/h${this.maxspeed}, ${this.engineCapacity}`)
  }
  this.increaseMaxSpeed = (newSpeed) => {
    this.maxspeed = newSpeed;
  }
  this.changeYear = (newValue) => {
    this.year = newValue;
  }
  this.addDriver = (driver) => {
    this.driver = driver;
  }
}
const car = new Car('bmw','germany',2020 , 260, 3.0);
car.info();
car.changeYear(2019);
car.increaseMaxSpeed(240);
car.addDriver({name:'Stepan', age: 32})
car.drive();
console.log(car);*/
/*
4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
*/

/*class Car {
  constructor(model, make , year, maxSpeed, engineCapacity) {
    this.model = model;
    this.make = make;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
  }

  drive() {
    console.log(`Їдемо з швидкістю ${this.maxSpeed}km/h на годину`);
  }
  info() {
    console.log(`Model ${this.model} , make ${this.make}, yearc${this.year}, km/h ${this.maxSpeed} engine ${this.engineCapacity}`);
  }
  increaseMaxSpeed(newSpeed) {
      this.maxSpeed = newSpeed;
  }
  changeYear(newValue) {
    this.year = newValue;
  }
  addDriver(driver){
    this.driver = driver;
  }
}
const car = new Car('bmw','germany',2020 , 260, 3.0)
car.drive();
car.addDriver({name:'Ivan', surname:'Kostyrko'})
car.increaseMaxSpeed(260);
car.changeYear(213);
car.info();
console.log(car);*/


/*5 Взяти масив з завдання 1.
- Відфільтрувати , залишивши тільки об'єкти з парними id
- Відсортувати його по id. по зростанню
- Відсортувати його по id. по спаданню*/
/*class User {
  constructor(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
  }
}

let usersData = [];
const user = new User(1, 'Anakonda', 'Ihorivna', 'anakonda@gmail.com', +3809982949580)
usersData.length = 10;
usersData.fill(user);
console.log(usersData);

usersData = usersData.filter(user => user.id % 2 === 0);
usersData.sort((a, b) => a.id - b.id);
usersData.sort((a, b) => b.id - a.id);
console.log(usersData);*/

/*
6. Взяти масив з завдання 2.
Відсортувати його по кількості товарів в полі order. по спаданню*/

/*
class Client {
  constructor(id, name , surname , email , phone , order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.order = order;
  }
}
const order = ['kovbasa', 'cheese', 'oat', 'juice','potato','tomato','onion','leak','bread','water']
const client = new Client(1,'Misha','Lysak','misha@gmail.com','+380687878986',order);
console.log(client);

order.sort((a, b) => b.localeCompare(a));
console.log(order);*/

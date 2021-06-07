/*--створити масив з:
  - з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль
/!**!/*/
/*
const numbers = [1 , 2 , 3 , 4 ,5 ];
const strings = ['Pasha','Markus','Andrian','Ivan' ,'Misha'];
const mix = ['Bohdan', 'Snoop',22 , true, false];
console.log(numbers);

console.log(strings);

console.log(mix);
*/



/*-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*/

/*
const arr = [];
arr[0] = 'Anna';
arr[1] = false;
arr[2] = 34;
arr[3] = true;
console.log(arr);
*/

/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/

/*
const movies = [
  {name: 'Shrek',
    year: 2000},

  {name: 'Harry Potter',
    year: 2001},

  {name: 'Green Mile',
    year: 1999},

  {name: 'Matrix',
    year: 2002},

  {name: 'Terminator',
    year: 1996},

  {name: 'Home alone',
    year: 1995},

  {name: 'Police academy',
    year: 1986},

  {name: 'Riddik',
    year: 2006},

  {name: 'Hatiko',
    year: 2010},

  {name: 'Grinch',
    year: 2000},
];
for (const movie of movies ) {
  document.write(`<div>
                     ${movie.name} - ${movie.year}
                   </div>`);
}
  console.log(movies);
*/

/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/

/*
const array = ['Misha', 'Bohdan','Vova','Anna','Markus','Viktor','Vasil','Emilia','Tetiana','Snoop'];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  document.write(`<div>${array}</div>`);
}
*/

/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/

/*const names = ['Misha', 'Bohdan','Vova','Anna','Markus','Viktor','Vasil','Emilia','Tetiana','Snoop','Misha', 'Bohdan','Vova','Anna','Markus','Viktor','Vasil','Emilia','Tetiana','Snoop']

let i = 0;

while (i <names.length) {
console.log(names);
  document.write(`<h1>${names}</h1>`);
  i++;
};*/


/*
- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*!/
*/

/*const names = ['Misha', 'Bohdan','Vova','Anna','Markus','Viktor','Vasil','Emilia','Tetiana','Snoop','Misha', 'Bohdan','Vova','Anna','Markus','Viktor','Vasil','Emilia','Tetiana','Snoop']

let i = 0;

while (i < 3 ) {
  console.log(names);
  document.write(`<h1>${names}</h1>`);
  i++;
}*/
/*- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/

/*const numbers = [3,22,41,3.4, 76,1,98,13,23,54];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
};*/

/*- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.*/

/*const strings = ['Misha', 'Bohdan','Vova','Anna','Markus','Viktor','Vasil','Emilia','Tetiana','Snoop'];
for (let i = 0; i < strings.length; i++);
console.log(strings[i]);*/

/*- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.*/

/*const arr = [ true, 34 , false , 43 , 'Anakonda', 32 , true, 'Izabella',100,22];
for (let i = 0; i < arr.length; i++) {
console.log(arr[i]);
}*/

/*
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
*/

/*const arrays = [ true, 34 , false , 43 , 'Anakonda', 32 , true, 'Izabella',100,22];
for (let i = 0; i < arrays.length; i++) {
  if (typeof arrays[i] === 'boolean' ){
    console.log(arrays[i])
  };
}*/

/*
- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
*/
/*const arrays = [ true, 34 , false , 43 , 'Anakonda', 32 , true, 'Izabella',100,22];
for (let i = 0; i < arrays.length; i++) {
  if (typeof arrays[i] === "number"){
    console.log(arrays[i]);
  }
}*/
/*
- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
*/

/*
const arrays = [ true, 34 , false , 43 , 'Anakonda', 32 , true, 'Izabella',100,22];
for (let i = 0; i < arrays.length; i++) {
  if (typeof arrays[i] === 'string')
    console.log(arrays[i])
}
*/

/*
- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
*/

/*
const arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = true;
arr[3] = false;
arr[4] = 'Dodo';
arr[5] = 14;
arr[6] = 'Misha';
arr[7] = 87[8] = false;
arr[9] = 'Andrian';

for (let i = 0; i < arr.length; i++) {
 console.log(arr[i]);
}
*/

/*
- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
*/
/*const arrays = ['Misha', 'Bohdan', 'Andrian'];
for (let i = 0; i < 10; i++) {
  arrays.push('Markus');
  console.log(arrays[i]);
  document.write(arrays[i]);
}*/
/*
- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
*/
/*const arrays = ['Misha', 'Bohdan', 'Andrian','Misha', 'Bohdan', 'Andrian','Misha', 'Bohdan'];
for (let i = 0; i < 100; i++) {
  console.log(arrays[i]);
  document.write(arrays[i]);
}*/
/*
- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
*/

/*const arrays = ['Misha', 'Bohdan', 'Andrian','Misha', 'Bohdan', 'Andrian','Misha', 'Bohdan'];
for (let i = 0; i < 100; i = i+2) {
  console.log(arrays[i]);
  document.write(arrays[i]);
}*/



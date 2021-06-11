/*
1) створити функцію яка приймає масив та виводить його
*/
/*function getArray(arr){
  console.log(arr);
}
getArray([1,2]);*/
/*
2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
*/
/*let arr = new Array(10);
function getArr(a) {
  console.log(a)
}

function getRandomArr(b) {
  let c = b;

  for (let i=0; i < c.length; i++) {
    c[i] = Math.round((Math.random() * 10));
  }
  getArr(c);
}
getRandomArr(arr);*/
/*
3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
*/
/*function min(a, b, c){
  let arr = [a, b, c];
  let val = arr[0];

  for (let i = 0; i < arr.length; i++){
    if (arr[i] < val) {
      val = arr[i];
    }
  }
  console.log(val)
  return val;
}
min(1,2,3);*/
/*
4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
*/
/*function max(a, b, c){
  let arr = [a, b, c];
  let val = arr[0];

  for (let i = 0; i < arr.length; i++){
    if (arr[i] > val) {
      val = arr[i];
    }
  }
  console.log(val)
  return val;
}
max(1,2,3);*/
/*
5) створити функцію яка повертає найбільше число з масиву
*/
/*function max(array) {
  let maximum = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maximum) {
      maximum = array[i]
    }
  }
  console.log(maximum);
  return maximum;
}
max([1,6,8,567]);*/
/*
6) створити функцію яка повертає найменьше число з масиву
*/
/*function min(array) {
  let maximum = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i] < maximum) {
      maximum = array[i]
    }
  }
  console.log(maximum);
  return maximum;
}
min([456,123,32,1509]);*/

/*
7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
*/
/*function sumArray(){
  console.log(arguments);
  let sum = 0;
  for (const argument of arguments){
    sum += argument;
  }
  console.log(sum);
}
sumArray([2,6,9,90]);*/
/*
8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
*/
/*function avarageVal(array){
  let sum = 0;
  let result;
  for (const item of array){
    sum += item;
    result = sum / array.length;
  }
  console.log(result);
}
avarageVal([1,3,4,5,7]);*/
/*9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
EXAMPLE:
  [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]*/


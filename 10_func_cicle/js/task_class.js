/*
let num1 = 5, num2 = 1;
for(num1; num1>=num2; num1--){
    console.log(num1);
}


let num1 = 5, num2 = 1;
while(num1>=num2){
    console.log(num1);
    num1--;
}

let num1 = 5, num2 = 1;
while(true){
    console.log(num1);
    num1--;
    if (num1<num2){
        break
    }
}
//Task 2
while(true){
    console.log(num1);
    num1--;
    if (num1>=num2) continue;
    break;
}
function dropMenu(menu=prompt('1=з№1 2=з№2 3=з№3 4=з№4')){
    switch(menu){
        case '0':console.log('Exit'); break;
        case '1':console.log('Hello'); dropMenu(); break;
        case '2':console.log('Hello'); dropMenu();break;
        case '3':console.log('Hello'); dropMenu();break;
        case '4':console.log('Hello'); dropMenu();break;
        default:alert('Нет такого значения:-/');dropMenu();
    }
}
dropMenu();

let ch = +prompt('task?');  //1-4
let flag = true, r = 0;

while(flag){

switch(ch){
case 1: {f1(); break;}
case 2: {f2(1,10); break;}
case 3: {f3(5); break;}
case 4: {f4(1,10,12); break;}
default: {alert('Error number'); break;}
}
repeat = promt('Continue? (1-yes, 0 - no)');
if(r == 0) flag=false;
//----Массивы
//---Один из не использованных способов
//*let array2 = new Array();

let array0 = [];
let array1 = [100,120,6,320,15];
// console.log(array1); вывод в консоли
//array1[0] выведет 100
//array1[4] выведет 15
let size = array1.length;
let i;
//---Выводим массив
//1---console.log(array1[]); плохой метод
for(i=0;i< array1.length;i++){
    console.log(array1[i]);
}
*/
//---Объявить массив с 5 элементами и увеличить их в 2 раза

/*let mass = [5,10,15,20,25];
let size = mass.length;
let i;
for(i=0; i<mass.length; i++){
   mass[i]*=2;
  console.log(mass[i]);
}
*/
/*
Аналогично, плюс увеличить на 100
for(i=0; i<mass.length; i++){
  mass[i]+=100;
  console.log(mass[i]);
}
let array3 = [10,20,30,40,50];
for(i=0; i<array3.length; i++){
    array3[i] *= 2;//array3[i] = array3[i] * 2;
}
console.log('array 3task:', array3);
*/
/*
 Задача вывести массив наоборот (с последнего к первому)

// Задача вывести элементы с нечетными индексами
// Задача вывести элементы с четными индексами
for(i = 0; i < array1.length; i++){
    console.log(i,' ', array1[i]);
}
let array1 = [100, 120, 6, 320, 15];
let size = array1.length;
let i;
for (i < array1.length; i = 0; i--) {
    console.log (i, '', array1[i]);
}
//---
let a1=[10,20,30,40,50,60,70,80,90,100]
let i;
for(i=a1.length;i>=0;i--){
  if(i%2==0)
  console.log(a1[i]);

}
let a1=[10,20,30,40,50,60,70,80,90,100]
let i;
for(i=a1.length;i>=0;i--){
  if(i%2==0) //if(i%2!=0)
  console.log(a1[i]);

}
//--
let array = [1, 23, 4, 2111, 5];
let i = (array.length - 1);
for (i; i>-1; i--){
    console.log(array[i]);
}

// Задача вывести массив наоборот (с последнего к первому)
for(i = array3.length-1; i>=0; i--){
    console.log(array3[i]);
    //console.log(i); вывод индекса
    // Задача вывести элементы с нечетными индексами
for(i=1; i<array3.length; i = i + 2){
    console.log(array3[i]);
    // Задача вывести элементы с четными индексами
for(i=0; i<array3.length; i = i + 2){
    console.log(array3[i]);
//четные элементы массива
    for(i=1;1<array3.length;i++){
        if(array3[i]%2 == 0){console.log(array3[i])}
    }
//нечетные элементы массива
    for(i=1;1<array3.length;i++){
        if(array3[i]%2 == 1){console.log(array3[i])}
    }
    */
  // задача . вывести индексы нулевых элементов [100, 0, 0, 300, 0, 500, 600, 0, 0]
// подсчитать количество нулевых элементов
// конкретный тип - контейнер let
// набор данных array []
// условие if , if-else
// циклы for, while
//  функция function  (готовой функциональный продукт, прибор )
//let a = [10, -20, 50, 100, 0, 0, 300, 0, 500, 600, 0, 0];
/*
for(i=0; i<array4.length; i++){
    if(array4[i] == 0){
        console.log(i); // i - номер array4[i] - элемент
    }
}
let countZeros = 0;
for(i=0; i<array4.length; i++){
    if(array4[i] == 0){
        countZeros++;
    }
}
*/
/*
// вывести все первые элементы массива до первого нуля и подсчитать количество
let countNotNullElements = 0;
for(i=0; i<a.length; i++){
    if(a[i] == 0) break;
    console.log(a[i]);
    countNotNullElements++;
}
console.log(countNotNullElements);
*/
// сумма соседних элементов
// 1+2  2+3  3+4  4+5 ....
// 1+2  3+4  5+6  7+8 ...

/*
а[0] первый элемент массива
a[1] второй элемент массива
a[a.length -1] - последний элемент массива
a[i] - текущий
a[i+1] - следующий
a[i+2] - следующий через 1
a[i-1] - предыдущий
*/

/*
let sum = 0;
for(i; i < a.length-1 ;i++) {
    sum = a[i] + a[i+1];
    console.log(sum);    
}
*/

/*
// задача сохранить результаты сум в отдельный массив
// i индекс для 1 массива, j - индекс для 2 массива
let sum1 = [];
for(i; i < a.length-1 ;i++) {
    sum1[i] = a[i] + a[i+1];   
}
console.log(sum1);
// 2 задача 1+2  3+4  5+ 6 ....
let sum = 0;
for(i; i < a.length-1 ;i=i+2) {
    sum = a[i] + a[i+1];
    console.log(sum);    
}

// сохранить результаты

let i, a = [10, -20, 50, 100, 0, 0, 300, 0, 500, 600, 0, 0];
let j=0, sum2 = [];
for(i=0; i < a.length-1 ;i=i+2) {
    sum2[j] = a[i] + a[i+1]; 
    j++;  
}
console.log(sum2);

/*
for(i=0, j=0; i < a.length-1 ;i=i+2, j++) {
    sum2[j] = a[i] + a[i+1]; 
}




// сохранить результаты индексов нулевых элементов
let arrZeroIndexes = [], indexZero;
for(i=0, indexZero = 0 ; i<a.length; i++){
    if(a[i] == 0){
        arrZeroIndexes[indexZero] = i;
        indexZero++;
    }
}
  */
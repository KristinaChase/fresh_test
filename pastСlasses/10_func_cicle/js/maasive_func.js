/*
Array
let a = [];
let b = [1,2,3,4,5];
a.length - сколько элементов

массив с [10,20,30,40,50]
индекс    0  1   2  3  4 
 с.length - 5

a[0]
a[1]
a[a.length-1] last 50 (index 4)
a[0]=100 //[100,20,30,40,50]
a[a.length] = 60 // last 60 (index 5)

for(let i=0; i<a.length; i++){
  console.log(`index ${i} element ${a[i]}`);
} 

1. создать массив чисел [4, 0, -1, -5, 3.14, 0, 0, 100, -4, 2.45, 4, 0, 4]
вывести в консоль
2. найти и вывести все отрицательные числа массива <0
3. посчитать сколько получилось отрицательных чисел (счетчик)
4. сохранить результаты работы (в массив)
5*.  заменить все отрицательные элементы в исходном массиве на 0 
//---
let zero=0, a2=[];
for(let i=0;i<a.length;i++){
    if (a[i]<0){
        console.log(a[i],i);
        zero++
        a2[zero-1]=a[i];
        a[i]=0;
    }
}
console.log(zero);
console.log(a2);
console.log(a);
//---
let a=[4,0,-1,-5,3.14,0,0,100,-4,2.45,4,0,4];
console.log([a]);
let i=0, j=0, b=[];

for( i ; i<a.length ; i++ ){
    if(a[i] < 0){
        j++;
        console.log(a[i]);
        console.log(j);
        b[j-1] = a[i]
        a[i] = 0
        
    }

}
console.log(b);
console.log(a);
/*
Задачи
1. создать массив чисел [4, 0, -1, -5, 3.14, 0, 0, 100, -4, 2.45, 4, 0, 4]
вывести в консоль
2. найти и вывести все отрицательные числа массива <0
3. посчитать сколько получилось отрицательных чисел (счетчик)
4*. сохранить результаты работы (в массив)
два счетчика i - исходного массива, j - для массива с результатами
5*.  заменить все отрицательные элементы в исходном массиве на 0  
*/
/*
let a = [4, 0, -1, -5, 3.14, 0, 0, 100, -4, 2.45, 4, 0, 4];
console.log(a);

let countBelowZeroEls  = 0, arrayElBelowZero = [], arrayIndexesElBelowZero = [] ;
for(let i=0; i<a.length; i++){
    if( a[i] < 0){
        //console.log(a[i]);
        arrayElBelowZero [countBelowZeroEls] = a[i];
        arrayIndexesElBelowZero [countBelowZeroEls] = i;
        countBelowZeroEls++;
        a[i] = 0;
    }
}

console.log(`countBelowZeroEls = ${countBelowZeroEls}`);
console.log(arrayElBelowZero);
console.log(arrayIndexesElBelowZero);
console.log(a);
//----
function sumElsArray(a){
    let sum = 0;
    for(let i=0; i< a.length; i++){
        sum += a[i];
    }
    return sum;
}

let a1 = [1,2,3,4,5], a2 = [10,20,30], a3 = [-4, 2, 0, 3.14, 15];
let result;
result = sumElsArray(a1);
console.log(result);
result = sumElsArray(a2);
console.log(result);
result = sumElsArray(a3);
console.log(result);
//---
function task1(a){
let countBelowZeroEls  = 0, arrayElBelowZero = [], arrayIndexesElBelowZero = [] ;
for(let i=0; i<a.length; i++){
    if( a[i] < 0){
        arrayElBelowZero [countBelowZeroEls] = a[i];
        arrayIndexesElBelowZero [countBelowZeroEls] = i;
        countBelowZeroEls++;
        a[i] = 0;
    }
}
console.log(`countBelowZeroEls = ${countBelowZeroEls}`);
console.log(arrayElBelowZero);
console.log(arrayIndexesElBelowZero);
return a; 
}

result = task1(a);
console.log(result);
*/

function arrayTask1(array, limit){
    let result = [], i, j=0;
    for(i=0; i<array.length; i++){
        if(array[i] <= limit){
            result[j] = array[i];
            j++;
        }
    }
    return result;
}
function arrayTask2(array){
    for(i=0; i<array.length; i++){
        array[i]=array[i] ** 2;
    }
    return array;
}

function arrayTask3(array){
    let result = 0;
    for(i=0; i<array.length; i++){
        if(array[i] > 0){
            result += array[i];
        }
    }
    return result;
}

/*function arrayTask4(array){
    let resu = []
    for(let i=0; j=0; i=array.length-1; i>=0;i--;j++){
        resu[j] = array[i];
    }
    return resu;
}
*/

function arrayTask4(a){
    let i = 0, j = a.lenght -1, res = [];
    for(i; i<a.lenght; i++){
        res[i] = a[j];
    }
    return res;
}

let a= [8,2,12,5,50,60,2,-1,10,11], res;
res = arrayTask1(a, 10);
console.log(a);
console.log(res);
res = arrayTask2(a);
console.log(res);
res = arrayTask3(a);
console.log(res);
res = arrayTask4(a);
console.log(res);


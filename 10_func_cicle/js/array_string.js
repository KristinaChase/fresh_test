//1

let array1=[10,-20,-30,40,50,60,-70,-80,90];

ArrayNew1=[];
array1.forEach(el => {if (el>0) ArrayNew1.push(el)})
console.log(ArrayNew1);

//2

let array2=[20,30,120,140,60,80,10,180];


function sumOfElementsLessThanLimit1(array, limit=100) {
    let arraySum=array.filter(el => el<limit).reduce((preValue, curValue) => preValue + curValue);
    console.log(arraySum);
    return arraySum;
}
sumOfElementsLessThanLimit1(array2)


//3

let array3=[20,30,120,140,60,80,10,180];

let arrayNew3 = array3.map(el => el-=(el*=0.03));
console.log(arrayNew3);

//4

let array4=[20,30,120,140,60,80,10,180];

function magnifier(array){
    let arrayNew
    array.every(el => el<100)
    ? (arrayNew=array.map(el => el+=(el*=0.05)), console.log(arrayNew))
    : console.log('Epic Fail')
}
magnifier(array4);
magnifier(array3);

//5

let Word1='madam', Word2='array';


function palindrome(word) {
    word === word.split('').reverse().join('')
    ? console.log('Да')
    : console.log('Нет')
}
palindrome(Word1);
palindrome(Word2);

//6

let str1='Lorem ipsum dolor sit amet consectetur adipisicing elit.';
let str2='Dolorem enim fuga sit aliquid voluptatem';


let strNew = str1.split(' ').concat(str2.split(' ')).reverse().join(' ');
console.log(strNew);

//7

let str3='dolorem enim fuga sit aliquid voluptatem';

function firstLetterInUppercase(string) {
    let newString=string.split(' ').map(el => el[0].toUpperCase() + el.substring(1)).join(' ')
    console.log(newString);
    return newString;
}
firstLetterInUppercase(str3);

//8

let array5=[20,30,120,140,60,80,10,180];

function indicesOfMinimumElements(array, min) {
    let minIndices=[];
    array.forEach((el, i) => {if (el<min) minIndices.push(i)})
    console.log(minIndices);
    return minIndices;
}
indicesOfMinimumElements(array5, 70);

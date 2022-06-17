let a1 = [18,20, 22, 25, 18, 20, 20];
let a2 = [18, 14, 22, 25, 18, 20, 20];
/* EVERY */
function isEveryAdult1(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i]<18) return false;
    }
    return true;
}
console.log(isEveryAdult1(a1));
console.log(isEveryAdult1(a2));
//2
function isEveryAdult2(el, i, arr) {
    return el >= 18;
  }
console.log(a1.every(isEveryAdult2));
console.log(a2.every(isEveryAdult2)); 
/*SOME */
//1
function isSomeAdult1(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i]>=18) return true;
    }
    return false;
}
console.log(isSomeAdult1(a1));
console.log(isSomeAdult1(a2));
//2
function isSomeAdult2(el) {
    return el >= 18;
  }
console.log(a1.some(isSomeAdult2));
console.log(a2.some(isSomeAdult2)); 

//*************************** */

/*findIndex  find*/
// число превысит 10
function NumBiggerThan10(element, index, array){
    if (element > 10) return true;
    return false;
}

let a = [4,1,0,-5,11,20,5,10];
console.log(a.findIndex(NumBiggerThan10));
/* find */ 
console.log(a.find(NumBiggerThan10));

/*includes*/ 
console.log(a.includes(11));


/* forEach */

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
function f(previousValue, currentValue){
    return previousValue + currentValue;
}
const total = array1.reduce(f,initialValue);

console.log(totall);


// hw f(-1,5) -000001   f(1,5) 000001

function addZerosForNum(num, countZeros) {
    let i, res = [];
    if(num<0){res[0]='-';}
    else{res[0]='+';}
    for(i=1; i<=countZeros; i++){
        res[i]+='0';
    }
    res += Math.abs(num);
    return res;
}

// массив слов. найти слова больше 4 символов


const words = ['hello', 'Vasya', 'Oh', 'fox', 'JS', 'array'];
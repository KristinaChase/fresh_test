/*
function add(a, b){
    let result = a+b;
    return result;
}
function sub(a, b){
    let result = a-b;
    return result;
}
function mult(a,b){
    let result = a*b;
    return result;
}
function divi(a,b){
    let result = a/b;
    return result;
}

let val1, val2;
val1 = Number(prompt('Enter value 1'));
val2 = Number(prompt('Enter value 2'));
console.log('+', add(val1, val2));
console.log('-', sub(val1, val2));
console.log('*', mult(val1, val2));
console.log('/', divi(val1, val2));
*/
// задача . вывести сообщение столько раз сколько задает пользователь

function repeatMsg(countMaxMsg){
    /*
    while(countMaxMsg>0){
        console.log('hello');
        countMaxMsg--;
    }
    */
    let i;
    for(i=1; i<=countMaxMsg; i++){
        console.log('hello');
    }
}

repeatMsg(5);

// задача
/*

*****

*/

function printSymbols(symbolStr, countMax){
    let i, str="";
    for(i=1; i<=countMax; i++){
        str = str + symbolStr;
    }
    return str;
   // console.log(str); //  вызов printSymbols("*", 5);
   //return str; // вызов console.log(printSymbols("*", 5))

}

let result;
result = printSymbols("*", 5);
console.log(result);
result = printSymbols("%", 10);
console.log(result);
result = printSymbols("$", 5);
console.log(result);


function printSymbols2(symbolStr, countMax = 1){
    let i, str="";
    for(i=1; i<=countMax; i++){
        str = str + symbolStr;
    }
    return str;
}
result = printSymbols2("*");
console.log(result);
result = printSymbols2("*",10);
console.log(result);

/*
// с ошибкой! значения по умолчанию в конце
function printSymbols3(countMax = 1, symbolStr){
    let i, str="";
    for(i=1; i<=countMax; i++){
        str = str + symbolStr;
    }
    return str;
}
result = printSymbols3("*");
console.log(result);
result = printSymbols3(10, "*");
console.log(result);
*/

// задача
// вывесли все числа кратные 5 в указзом диапазоне пользователем
// function/ limit1, limit2
function task1(minLimit, maxLimit){
    let num;
    for(num = minLimit; num <= maxLimit; num ++){
        if(num %5 == 0){
            console.log(num);
        }
    }
}

function task1_2(minLimit, maxLimit){
    for(minLimit; minLimit <= maxLimit; minLimit ++){
        if(minLimit %5 == 0){
            console.log(minLimit);
        }
    }
}


// задача
// сделать функцию которая проверяет сумму двух указанных чисел 
// function a,b (result) 'a+b=?' да/нет

//1
function task2(number1, number2, answer){
    if(number1+number2 == answer){
        return true;
    }
    return false;
}

let answer = prompt('2+2=?');
let res;
res = task2(2,2,answer);
if(res == true){
    console.log('yes');
}else{
    console.log('no');
}

//2

function task2_2(number1, number2, answer){
    if(number1+number2 == answer){
        console.log('yes');
    }
    console.log('no');
}

answer = prompt('2+2=?');
task2(2,2,answer);




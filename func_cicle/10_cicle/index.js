// if-else
/*
if(условие1){
    действия если условие1 выполняется
} else if (условие2){
    действия если условие2 выполняется
} else if (условие3){
    действия если условие3 выполняется
} else{
    все другие варианты
}
if == > < >= <= ,  && и      || или
*/

// если четное то умножить на 2, нечетное - поделить на 2
let value = 100;
if(value%2 == 0){
    value = value * 2; // value *= 2;
} else {
    value /= 2;
}

// если четное или меньше 100 то умножить на 2, нечетное - поделить на 2
if(value%2 == 0 || value <= 100){
    value = value * 2; // value *= 2;
} else {
    value /= 2;
}

// если число меньше 10 вычесть 1 из него, если от 10 до 100 вычесть 5, 
//если больше 100 поделить на 2

if(value < 10){
    value = value - 1;
} else if (value >=10 && value <100){
    value = value - 5;
} else if (value >= 100) {
    value = value / 2;
} else {
    console.log('Error');
}

// -M .... 9.9    value = value - 1
// 10 .... 99.9   value = value - 5
// 100 .... M     value = value / 2

// ! выше по коду проверка что value єто точно число

if(value < 10){
    value = value - 1;
} else if (value >= 100) {
    value = value / 2;
} else {
    value = value - 5;
}


// for
/*
for (начальное условие; конечное условие; шаг){
    действие
}
*/

/*
let num = 1, result =0;
for(num=1; num<=100; num = num +1){
    result = result + num;
}
// найти произведение чисел от 2 до 8
result = 1;
for(num=2; num<=8; num++){
    result = result * num;
}
console.log(result);
// найти сумму нечетных чисел от 10 до 50
result = 0;
//1
for(num=10; num <=50; num++){
    if(num%2 == 1){
        result = result + num;
    }
}
//2
for(num=11; num <=50; num = num +1){
        result = result + num;
}
*/

/*
for (начальное условие; конечное условие; шаг){
    действие
}
начальное условие
while(конечное условие){
    действие
}
*/

/*
// сумма чисел от 1 до 10
let n, res=0;
for(n=1; n<=10; n++){
    res = res + n;
}
console.log('FOR:',res);
n=1, res=0;
while(n<=10){
    res = res + n;
    n++;
}
// вывести числа от 5 до 0
n=5;
while(n>=0){
    console.log(n);
    n = n-1;
}
for(n=5; n>=0; n--){
    console.log(n);
}
// вывести числа от 5 до 0 . выводить их квадраты
// 25 16 9 4 1 0
n=5;
while(n>=0){
    n = n^2; // n = n*n
    console.log(n);
    n = n-1; // n--
}
*/

/*
// вывести числа от 5 до 0
let n=-100;
/*
while(n>=0){
    console.log(n);
    n = n-1;
}
*/

/*
do{
    console.log(n);
    n = n-1;
} while(n>=0);
*/

/*
//Задача. Циклом . Выйти когда сумма чисел превысит 100. дополнительно посмотреть на каком числе остановились
let n = 1, sum = 0;
while(true) {
    sum +=n
    if (sum > 100) break;
    n++;
}
console.log(n);
console.log(sum);
sum=0;
for(n=1; ;n++){
    sum +=n;
    if (sum > 100) break;
}
console.log(n);
console.log(sum);
//бесконечній цикл 
//while(true){}
//for( ; ; ){}
// while(false){}
n=10000;
do{
    console.log(`You are lucky! ${n} $!!!!`);
}while(false);
while(false){
    console.log('Second msg');
}
let x1=1, x2=2, x3=3;
console.log('Result:',x1,x2,x3);
console.log('Result: x1,x2,x3 ');
console.log(`Result: ${x1} ${x2} ${x3}`);
let userValue = prompt('Введи номер месяца');
let result;
if(userValue == 1){
    result = "Январь";
} else if(userValue ==2){
    result = "Февраль";
} else if(userValue ==3){
    result = "М";
} else if(userValue ==4){
    result = "А";
} else if(userValue ==5){
    result = "М";
} else{
    result='нет такого месяца';
}
switch(userValue){
    case 1:  result = "Январь"; break;
    case 2:  result = "Февраль"; break;
    //...
    default: result='нет такого месяца'; break;
}
*/

//задачки

// 1 попросить пользователя ответить сколько будет 2+2. сказать прав или нет

// 2 попросить пользователя ответить сколько будет 2+2. сказать прав или нет.
// спрашить пока он не решит правильно

// 3 посчитать сумму нечетных чисел от 1 до 20  используя for / while


//let x = promt('Введи число')
// alert('Some msg')

//1
let result = 4;
let answer = prompt('2+2=?');
if(answer == result){
    alert('Bingo!')
}else{
    alert('Sorry :(((( Wrong')
}
//2  1
while(true){
    answer = prompt('2+2=?');
    if(answer == result){
        alert('Bingo!');
        break;
    }
    alert('Sorry :(((( Wrong');
}
//2 2
/*
do{
    answer = prompt('2+2=?');
} while(answer == result);
*/
//3

let number = 1, limit = 20, res =0;

for(number=1; number <= limit; number = number + 2){
    res = res + number;
}

number = 1, res =0;
while(number <= limit) {
    res = res + number;
    number = number + 2;
}



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


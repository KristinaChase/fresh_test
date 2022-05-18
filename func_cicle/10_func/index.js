/*let a,b, result;

 a=1;
 b=1;
 result = a+b;

 a=11;
 b=1;
 result = a+b;

 a=1;
 b=1;
 result=a+b;
*/
function add(a,b){
    let result=Number(a)+Number(b);
    return result;
}

function sub(a,b){
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

function print(value){
    console.log(value);
}

let r;
r=add(2,3);
console.log(r);
r=add(20,13);
console.log(r);
r=add(5,5);
console.log(r);
r=add(1,3);
console.log(r);
r=add(2,2);
console.log(r);

let val1,val2;
val1=prompt('Enter value1');
val2=prompt('Enter value');
console.log('+',add(val1,val2));
console.log('-',sub(val1,val2));
console.log('*',mult(val1,val2));
console.log('/',divi(val1,val2));
//вывести
function repeatMsg(msg,n){
  while(n>0){
    console.log(msg);
    n--;
  }
}

repeatMsg('Hello,Vasya!',5);

function task1(minLimit,maxLimit){
    let num;
    for(num=minLimit;num<=maxLimit;num++){
        if (num%5 ==0){
            console.log(num);
        }
    }
}
function task1_2(minLimit,maxLimit){
    for(minLimit;minLimit<=maxLimit;minLimit++){
        if (minLimit%5 ==0){
            console.log(minLimit);
        }
    }
}

function task2(number1,number2,answer){
    if(number1+number2 == answer){
        return(true);
    }
    return(false);
}



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

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


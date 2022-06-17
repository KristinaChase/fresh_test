 //1 

function starSymbolOutput(howMany) {
    if (howMany<1){
        howMany=1;
    } else if (howMany>0){
        howMany;
    } else {
        howMany =1;
    }
    let starSymbol='',i=0;
    for(i;i<howMany;i++){
        starSymbol+='*';
    }
    console.log(starSymbol);
}
//1_1


function starSymbolOutputRepeat(howMany) {
    if (howMany<1){
        howMany=1;
    } else if (howMany>0){
        howMany;
    } else {
        howMany =1;
    }
    let starSymbol='*'.repeat(howMany);
    console.log(starSymbol);
}


//2 
function outputNumbersFromAndTo(limit1=1, limit2=10, num=2) {
    for(limit1;limit1<=limit2;limit1++){
        if (limit1%num==0){
            console.log(limit1);
        }
    }
}


//3 
let arrayNumb=[12, 26, 0, 1.23, 35, 43, 57, 0, -23, 63, 100, 1];
function sumOfEvenArrayElements(array) {
    let sum=0, i;
    for(i=0;i<array.length;i++){
        if (i%2==0) {
            sum += array[i];
        }
    }
    console.log(sum);
}




//4 
let arrayNumbTwo=[12, 26, 0, 1.23, 35, 3, 57, 0, -23, 63, 9, 60];
let arrayNumbThree=[12, 26, 0, 1.23, 35, 3, 57, 0, -23, 63, 9, 60];
let arrayNumbFour=[12, 26, 0, 1.23, 35, 3, 57, 0, -23, 63, 9, 60];
let arrayNumbTest=[-4.6,1,2,-3.3,44,5.0,6.0,-7,-8,-0.009,-0.00001,-0.0000011];

function zeroingArrayElements(array, num=10) {
    let i;
    for(i=0;i<array.length;i++){
        if (array[i]<num) {
            array[i]=0;
        }
    }
    console.log(array);
}

//5 

function addsZeros(numb, amount=5) {
    let zeroSymbol='',i=0;
    for(i;i<amount;i++){
        zeroSymbol+='0';
    }
    if (numb%1==0 && numb>0) {
        console.log(zeroSymbol+numb);
    } else if (numb%1==0 && numb<0) {
        numb=Math.abs(numb);
        console.log('-'+zeroSymbol+numb);
    }
}



function addsZerosRepeat(numb, amount=5) {
    let zeroSymbol='0'.repeat(amount);
    if (numb%1==0 && numb>0) {
        console.log(zeroSymbol+numb);
    } else if (numb%1==0 && numb<0) {
        numb=Math.abs(numb);
        console.log('-'+zeroSymbol+numb);
    }
}

//6 
//6.1

function greatArrayConnector(arrayOne, arrayTwo) {
    let arrayNew=[]
    function arrayConnector(array) {
        let i, j=arrayNew.length;
        for(i=0;i<array.length;i++,j++){
            arrayNew[j]=array[i];
        }
        return arrayNew;
    }
    arrayConnector(arrayOne);
    arrayConnector(arrayTwo);
    console.log(arrayNew);
}

//6.2

function excellentArrayConnector(arrayArgument) {
    let arrayNew=[]
    for(let i=0,j=0;i<arguments.length;i++) {
        arrayConnector(arguments[j]);
        j++;
    }
    function arrayConnector(array) {
        let i, j=arrayNew.length;
        for(i=0;i<array.length;i++,j++){
            arrayNew[j]=array[i];
        }
        return arrayNew;
    }
    console.log(arrayNew);
}




function cheatExcellentArrayConnector(arrayArgument) {
    let arrayNew=[]
    Object.keys(arguments).forEach((key) => {
        arrayConnector(arguments[key]);
        key++;
    })
    function arrayConnector(array) {
        arrayNew=arrayNew.concat(array);
        return arrayNew;
    }
    console.log(arrayNew);
}

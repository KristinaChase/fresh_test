// DB
// client
// server


class genArray{
    constructor(start, end, step = 1){
        this.start = start;
        this.end = end;
        this.step = step;
        this.array = [];
        this._count = (this.end - this.start) / this.step;
    }
    makeArray(){
        this.array[0] = this.start;
        for(let i=1; i <= this._count; i++){
            this.array[i] = this.array[i-1] + this.step;
        }
        return this.array;
    }
    makeArray2(){
        for(let i=0, value=this.start; value <= this.end; i++, value += this.step){
            this.array[i] = value;
        }
        return this.array;
    }
    outArray(){
        console.log(this.array);
    }

}

let a1 = new genArray(100, 120, 2);
a1.makeArray();
a1.outArray();
let a2 = new genArray(100, 120);
a2.makeArray();
a2.outArray();
/*
class ParentClass {
    constructor(name1, name2 = "unknown"){
        this.name1 = name1;
        this.name2 = name2;
    }
}

class MyClass extends ParentClass{
    // this
    constructor(name1, name2, value1=0, value2=0){
        super(name1); // constructor parent  
        // super(name1, name2)
        this.value1 = value1;
        this.value2 = value2;
        this.sum = 0;
        this._count = 0; // private  only for class
    }
    set count(newValue){
        this._count = newValue;
    }
    get count(){
        return this._count;
    }
}

let obj1 = new MyClass(10,20);
let obj2 = new MyClass(10);
let obj3 = new MyClass();

console.log(obj3.sum);
console.log(obj3._count); 
*/
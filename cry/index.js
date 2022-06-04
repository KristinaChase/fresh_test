let objUserTest = {};

console.log(objUserTest);
console.log(typeof objUserTest);

let objUserChris = {
     name:'Chris',
     surname: 'Chase',
     age: 24,
     isFemale: true
};
console.log(objUserChris);

console.log(objUserChris.name);
console.log(objUserChris.age);

console.log('Hello ${objUserChris.name} ${objUserChris.surname}!');

/*
let a1 = [1,2,100,200,3];

function array(c){
	for (let i = 0; i < c.length; i++){
	if (c[i] < 100) {
		c[i]++;
	}
	}
}
console.log(array(c)); //[2,3,100,200,4]


function array(c){
    let sum = 0;
	for (let i = 0; i < c.length; i++){
	if (c[i] < 100) {
		sum += c[i];
	}
	}
    return sum;
}

let res = array(a1);
console.log(res);

*/

/*
let array = [1,2,100,200,3,3,3,3];

const [a0, ...rest] = array;
console.log(a0);
console.log(rest);

const [arr0, arr1, ,, ...rest2] = array;
console.log(arr0);
console.log(arr1);
console.log(rest2);

let b = [1,2,3,4, [10,20,[100,200,300],30,40], 5, 6];

const [,,,,[,,innerArray,,],,] =b
//const [,,,,[,,innerArray,...r1],...r2] =b
console.log(innerArray);
*/

/*
SET
набор уникальных значений / похоже на массив только уникальные

const s1 = new Set();
const s2 = new Set(array);

s1.add(100);
s1.add(-5);
s1.add('hello');

s1.delete('hello');

s1.has(100);

s1.clear(); //delete all
*/

//MAP
// key+value
/*
const map1 = new Map();

map1.set(100,'Vasya');
map1.set(101,'Ann');
map1.set(103,'Tom');
map1.set(104,'Fox');

map1.delete(103)

map1.has(100) //true

map1.get(100) //'Vasya'


map1.set(100,'Kolya');

console.log(map1);
*/
/*Object*/
// фундаментальное понятие в js

// пустой объект
/*
let objUserTest = {};

console.log(objUserTest);
console.log(typeof objUserTest);

// свойства
// name1: value1, name2: value2, ....

let objUserVasya = {
    name: 'Vasya',
    surname: 'Ivanov',
    age: 20,
    isMale: true
};

console.log(objUserVasya);

console.log(objUserVasya.name);
console.log(objUserVasya.age);

console.log(`Hello ${objUserVasya.name} ${objUserVasya.surname}!!!`);

let objUserVasya2 = {
    0: 'Vasya',
    1: 'Ivanov',
    2: 20,
    3: true
};

let objUserVasya3 = {
    name: 'Vasya3',
    surname: 'Ivanov',
    age: 20,
    isMale: true,
    sayHi: function() {console.log('Hello!!!');}
};

objUserVasya3.name = 'Vasya';

console.log(objUserVasya3.name);
console.log(objUserVasya3.sayHi());

function f(obj){
    console.log(`Hello user: ${obj.name} ${obj.surname}!`);
}

f(objUserVasya3);

const {name, surname, age, isMale} = objUserVasya3;
console.log(name);
console.log(surname);
console.log(age);

function Greeting(obj){
    const {name, surname, age, isMale} = obj;
    console.log(`Hello user: ${name} ${surname}!`);
}

function Greeting2({name, surname}){
    console.log(`Hello user: ${name} ${surname}!`);
}

const Greeting3 = ({name, surname}) => {
    console.log(`Hello user: ${name} ${surname}!`);
}

console.log('Greeting1');
console.log(Greeting(objUserVasya3));
console.log('Greeting2');
console.log(Greeting2(objUserVasya3));

/*
function arrayToObject(a){
    let obj = {};
    for(let i=0; i<a.length; i++){
        obj.i = a[i];
    }
    return obj;
}
function objectToArray(obj){
    let arr = [];
    for(let i=0; i < obj.size; i++){
        arr[i] = obj.i;
    }
    return arr;
}
let resObj = arrayToObject(['Tom', 'Fox', 20]);
console.log(resObj);
// obj.0 = 'Tom', obj.1 = 'Fox', obj.2 = 20


const car = {
    model: 'modelX',
    engine: {name: 'e1', year: 2020},
};
 car.year = 2021; // доюавление свойства которого раньше не было!
 console.log(car);

 car.engine.year = 2022;
 car.engine.power = 1000;


 let objUserTom = {
    nameTom: 'Tom',
    surnameTom: 'Fox',
    ageTom: 20,
    isMaleTom: true,
    sayHi: function() {console.log('Hello!!!');},
    //getFullName: function() {return `${objUserTom.nameTom} ${objUserTom.surnameTom}`;}
    getFullName: function() {return `${this.nameTom} ${this.surnameTom}`;},
    getThis: function() {return this;}, 
    setNewSurname: function(value){ this.surnameTom  = value; }
};

objUserTom.setNewSurname('Smith');
console.log(objUserTom);


создайте обьект рабочего у которого есть свойство год поступления и зарплата
0 - просто вывести год принятия на работу
1 сделать метод который вернет стаж (сколько лет он работает) Date()
2* если он работает больше 3 лет увеличить зарплату на 15%
*/

/*
let res = objUserTom.getFullName();
console.log(res);
res = objUserTom.getThis(); // вернет сам обьект
console.log(res);
*/

// this - указатель на текущий обьект
/*
console.log('1');
console.log(this);
console.log('2');
console.log(objUserTom.getThis());
*/
// у стрелочных функций нет this!!!!

/*
let objEmloyee = {
    fullname: 'Tom Smith',
	yearStart: 2015,
	salary: 1000,
    workExperince: 0,

    outStartYear: function() {console.log(this.yearStart);},

    calcWorkExperince: function() {
        const currentYear = new Date().getFullYear();
        this.workExperince =  currentYear - this.yearStart;
        return this.workExperince;
    },

    salaryIncrease: function (pr = 15) {
		if (this.workExperince >= 3) {
			this.salary *= (100 + pr)/100;
		}
		return this.salary;
	}
}

objEmloyee.outStartYear();
console.log(objEmloyee.calcWorkExperince());
console.log(objEmloyee.salaryIncrease(5));
console.log(objEmloyee);


//1
создайте обьект коллекция . свойство start, end. свойство arr . создайте метод который по свойствам начала,конца сгенерирует массив а его количесвво /размер передать как параметр к функции и передавать шаг
//2
создайте обьект коллекция . свойство start, end . создайте метод который по свойствам начала,конца сгенерирует массив а его количесвво /размер передать как параметр к функции и передавать шаг


const collection1 = {
    start: 0,
    end: 0,
    arr: [],
    generateArray: function (start, n, step) {
        this.start = start;
        let res = [];
        res[0] = start;
        for(let i=1; i<n; i++){
            res[i] =  res[i-1] + step;
        }  
        this.end = res[n-1];
        return res;      
    },
    setArray: function (start, n, step) {
        this.start = start;
        this.arr[0] = start;
        for(let i=1; i<n; i++){
            this.arr[i] = this.arr[i-1] + step;
        }
        this.end = this.arr[n-1];        
    },
    getArray: function() {return this.arr; }
};

collection1.generateArray(1, 10, 20);
collection1.setArray(100, 10, 30);
console.log(collection1.getArray());
*/
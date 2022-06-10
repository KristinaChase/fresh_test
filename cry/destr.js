const TEST_PASSWORD = 'qwerty';

const sumTwoNumber = (a,b) => a+b;

const objConst = {};

const user1 = {
    id: 1001,
    login: 'login1',
    password: 'qwerty',    
};

const user2 = {
    id: 1002,
    login: 'login2',
    password: 'qwerty',    
};
const user3 = {
    id: 1003,
    login: 'login3',
    password: 'qwerty',    
};
const user4 = {
    id: 1004,
    login: 'login4',
    password: 'qwerty',    
};

// карту пользователей MAP
// css class, id

let userMap = new Map();
userMap.set(user1.id,user1);
userMap.set(user2.id,user2);
userMap.set(user3.id,user3);
userMap.set(user4.id,user4);
console.log(userMap);

//2

const users = [
    {
        id: 1001,
        login: 'login1',
        password: 'qwerty',    
    },    
    {
        id: 1002,
        login: 'login2',
        password: 'qwerty',    
    },
    {
        id: 1003,
        login: 'login3',
        password: 'qwerty',    
    },
    {
        id: 1004,
        login: 'login4',
        password: 'qwerty',    
    }
];
console.log(users);

let userMap2 = new Map();
for(let i=0; i<users.length; i++){
    userMap2.set(users[i].id, users[i]);
}

console.log(userMap2);
console.log(userMap2.get(1004)); // получаем обьект по ключу 1004
console.log(userMap2.delete(1001)); // удаление объекта по ключу 1001
console.log(userMap2.has(1001)); // поиск объекта по ключу 1001, есть ли в базе?


// заморозка обьекта

// freeze() метод не разрешает изменять объект
// const obj = Object.freeze({});
// основное применение - обьект из набора констант

//ROLES = ["ADMIN", "MODERATOR", "USER"];
//ROLES[2];

const ROLES = Object.freeze({
    ADMIN: "ADMIN",
    MODERATOR: "MODERATOR",
    USER: "USER",     // ROLES.USER
});

const ACTIONS = Object.freeze({
    CREATE: 'CREATE',
    READ: 'READ',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
});

let accessMap = new Map();

accessMap.set(ACTIONS.CREATE, [ROLES.ADMIN, ROLES.MODERATOR]);
//accessMap.set(ACTIONS.READ, [ROLES.ADMIN, ROLES.MODERATOR, ROLES.USER]);
//accessMap.set(ACTIONS.READ, ...ROLES);
accessMap.set(ACTIONS.UPDATE, [ROLES.ADMIN, ROLES.MODERATOR]);
accessMap.set(ACTIONS.DELETE, [ROLES.ADMIN]);
console.log(accessMap);


// деструктуризация

//1 выбор элементов и получение остатка
const arr1 = [1,2,3,4,5,6,7];
const [a0, ...r] = arr1;
console.log(a0);
console.log(r);
const arr2 = [1,2,3,4,[10,20,30,40,50],5,6,7];
// rest 30,40,50
const [a1,,,,[,,...rest2],...rest3] = arr2;

//2 слияние , соединение
const arr3 = [100,200,300,400];
//const arr1ConcatArr3 = arr1.concat(arr3);
const arr1ConcatArr3 = [...arr1, ...arr3];
console.log(arr1ConcatArr3);

const obj1 = {name: 'John', surname: 'Fox', age: 20};
const obj2 = {login: 'johnfox', password: 'qwerty'};
const userJohn = {...obj1, ...obj2};
console.log(userJohn);


const obj3 = {name: 'John', surname: 'Fox'};
const obj4 = {name: 'Tom', age: 20, isMale: true};
const objConcat = {...obj3, ...obj4};
console.log(objConcat);
/*
/1 выбор элементов и получение остатка
const arr1 = [1,2,3,4,5,6,7];
const [a0, ...r] = arr1;
console.log(a0);
console.log(r);
const arr2 = [1,2,3,4,[10,20,30,40,50],5,6,7];
// rest 30,40,50
const [a1,,,,[,,...rest2],...rest3] = arr2;
const arr3 = [100,200,300,400];
//const arr1ConcatArr3 = arr1.concat(arr3);
const arr1ConcatArr3 = [...arr1, ...arr3];
console.log(arr1ConcatArr3);
const obj1 = {name: 'John', surname: 'Fox', age: 20};
const obj2 = {login: 'johnfox', password: 'qwerty'};
const userJohn = {...obj1, ...obj2};
console.log(userJohn);
const obj3 = {name: 'John', surname: 'Fox'};
const obj4 = {name: 'Tom', age: 20, isMale: true};
const objConcat = {...obj3, ...obj4};
console.log(objConcat);
*/
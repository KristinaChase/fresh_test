/*
let container   // !!!! no type!
const RED_COLOR = "#ff0000"

 набор [{login: 'login1', pswd: 'qwerty'}, {}, {}]
push()

-----------
simply

complex object {}
name.value  name.innerObject.value
--------------
function addTwoNumbersFunction(number1, number2){
       return number1 + number2;
}

const f = () => {}

class addTwoNumbers{
   constructor(number1, number2){
       this.number1 = number1
       this.number2 = number2
   }
   add(){
       // внутреннее свойство
      this.sum  = this.number1 + this.number2;
      return this.sum;
   } 
   add2(){
      return (this.number1 + this.number2);
   }
     
};

let obj1 = addTwoNumbers(5,12);
// obj1.number1 = 5, obj1.number2 = 12
// let obj1 = {number1: 5, number2: 12};

let res1 = obj1.add();  // {number1: 5, number2: 12, sum: 17}

class Calc{
   constructor(number1, number2){
       this.number1 = number1;
       this.number2 = number2;
       this.result = 0;
   }
   add(){ this.result  = this.number1 + this.number2; } 
   sub(){ this.result  = this.number1 - this.number2;}
   divi(){ this.result  = this.number1 / this.number2; } 
   mult(){ this.result  = this.number1 * this.number2; }
   answer() { console.log('Answer is ', this.result);}    
};

let test = new Calc(10,20);
test.add();
test.answer();
*/
class User {
    constructor(login, password, fullname = 'uknown'){
        this.fullname = fullname;
        this._login = login;
        this._password = password;
    }
    test(){
        console.log(this._login, ': ', this._password);
    }
    set password(password){
        this._password = password;
    }
    set login(login){
        this._login = login;
    }
    get password(){
        return this._password;
    }
    get login(){
        return this._login;
    }
};

let obj2 = new U

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} стоит.`);
    }
  }
class Rabbit extends Animal {
    constructor(name) {
      super(name);
      this.name = name;
    }
    hide() {
      console.log(`${this.name} прячется!`);
    }
  };
let Rex = new Animal("Rex");
  Rex.run(10);
  Rex.stop();

  let krolik = new Rabbit('Krolik');
  krolik.hide();
  krolik.run(2);
  krolik.stop()
  /*
class User {
    constructor(login, password){
        this.login = login;
        this.password = password;
    }
    test(){
        console.log(this.login, ': ', this.password);
    }
    updatePassword(newPassword){
        this.password = newPassword;
    }
};
const obj1 = new User('vasya', 'qwerty');
obj1.test();
obj1.updatePassword('123dkrke1!-');
obj1.test();
*/

// Обновить поле или прочитать значение свойства
// get - получить , set - установить или обновить
/*
class User {
    constructor(login, password){
        this.login = login;
        this.password = password;
    }
    test(){
        console.log(this.login, ': ', this.password);
    }
    set password(value){
        this.password = value;
    }
    set login(value){
        this.login = value;
    }
    get password(){
        return this.password;
    }
    get login(){
        return this.login;
    }
};
*/
//id login pasword fullname ...
// 1001 'login1' 'qwertt' ........ 
// 1002 'vasya' 'qwertt' ........
/*
class User {
    constructor(login, password, fullname = 'uknown'){
        this.fullname = fullname;
        this._login = login;
        this._password = password;
    }
    test(){
        console.log(this._login, ': ', this._password);
    }
    set password(password){
        this._password = password;
    }
    set login(login){
        this._login = login;
    }
    get password(){
        return this._password;
    }
    get login(){
        return this._login;
    }
};

let obj2 = new User('vasyalogin123', 'qwerty'); 
obj2.password = 'admin'; 
console.log(obj2.password);
obj2.test();
*/
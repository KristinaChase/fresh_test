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

/* Задание. Автор и его работы 
класс Автор (внутри) работы name author
метод добавления новой работы (id, name, date)
*метод удаления работы по id
сколько работ у Автора
сколько всего авторов в базе  */

/*
class Author{
    static countAuthors = 0;

    constructor(name){
        this.name = name;
        this.books = [];  // [{}, {}, {}, {}, {} ]
        this._id = 0;
        Author.countAuthors ++;
    }
    addBook(name, year){
        this._id += 1;
        const newBook = {
            id: this._id,
            name: name,
            year: year
        };
        this.books.push(newBook);
    }
    getCountBooks(){
        return this.books.length;
    }
    outBooksForAuthor(){
        console.log(this.books);
    }
}

let author1 = new Author('Vasya');
author1.addBook('name1', 2020);
author1.addBook('name2', 2021);
author1.addBook('name3', 2022);
author1.addBook('name4', 2022);

console.group('author 1');
console.log("count author's books = ",author1.getCountBooks());
console.log('count authors in DB = ', Author.countAuthors);
author1.outBooksForAuthor();
console.groupEnd();

let author2 = new Author('Joht Smith');
author2.addBook('funny', 2020);
author2.addBook('fox', 2021);

console.group('author 2')
console.log("count author's books = ",author2.getCountBooks());
console.log('count authors in DB = ', Author.countAuthors);
author2.outBooksForAuthor();
console.groupEnd();

let author3 = new Author('Tom Fox');
author3.addBook('hello js', 2019);
author3.addBook('java script', 2022);

console.group('authors 3')
console.log("count author's books = ",author3.getCountBooks());
console.log('count authors in DB = ', Author.countAuthors);
author3.outBooksForAuthor();
console.groupEnd();

// статические поля и методы
// только если нужно сделать одно действие над всеми созданными обьектами класса!!!
class Article {
    static countObject  = 0;
    
    constructor(title, date) {
      this.title = title;
      this.date = date;
      Article.countObject++;
    }

    infoArticle(){
        console.log(`Atrticle ${this.title} date:${this.date}`); 
    }
    // метод работы с объектами
    static compare(obj1, obj2) {
      return obj1.date - obj2.date;
    }
  }
  
  // использование
let a1 = new Article("HTML", new Date(2019, 1, 1));
let a2 = new Article("CSS", new Date(2019, 0, 1));
let a3 = new Article("JavaScript", new Date(2019, 11, 1));

a1.infoArticle();
a2.infoArticle();

let result = Article.compare(a1, a2);
console.log(result);
*/

/*

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

getArray.outArray = funnction(){
    console.log(this.array);
}

let a1 = new genArray(100, 120, 2);
a1.makeArray();
a1.outArray();
let a2 = new genArray(100, 120);
a2.makeArray();
a2.outArray();
*/
/* Получение элементов
let containerElem = window.document.getElementById('idElem')
querySelector(css) '.myClass' '#idElem' 'ul>li:last-child' '.cont>.myClass'
querySelectorAll(css) return []
(*-----//старый код//-----) getElementByTagName() getElementsByClassName getElementByName
elem.closest(css)
elem.matches(css)

Атрибуты элемента
elem.getAttribute(nameAttr)
elem.setAttribute(nameAttr,valueAttr)
elem.hasAttribute(nameAttr)

Создание
document.createElement(tag)

Удаление
elem.remove()

Копирование/клонирование
elem.cloneNode()

Вставка/добавление
node.append(elem)
prepend(elem)
before()/after()
replaceWith()
(*-----//старый код//-----) appendChild() insertChild() replaceChild() removeChild()
*/
let contElem = document.getElementById('container');
/*
const userTest = {
    login: 'Chase',
    password: 'ruletyk',
}
let el;
for(let prop in userTest) {
    contElem.append(document.createElement('p');
    el.innerText = velue;
    contElemappend(el);
}
*/
let arrText = ['js', 'hello', 'hi'];
let arrClasses = ['c1', 'c2', 'c3'];

arrText.forEach( (el, i, a) => contElem.append( 
    makeElement('p', a[i], arrClasses[i])) 
);
/*
let el;
let arrText = ['js', 'hello', 'hi'];
let arrClasses = ['c1','c','c3'];

for(let i=0, i<arrText.length;i++){
    /*contElem.append(makeElement('p',arrText[i],errClasses[i]));*/

    /*el document.createElement('p');
    el.innerText = arrText[i];
    el.setAttribute('class',arrClasses[i]);
    contElem.append(el);
}
    */

function f(tag, tagText, tagClass){
    const el = document.createElement(tag);
    el.innerText = tagText;
    el.setAttribute('class',tagClass);
    return el;
}
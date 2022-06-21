/*
<div id="userList" class="container" name="cards" isChoose="1">  
        <p>first</p>
        <p>second</p>
        <p>third</p>
        <p>4-th</p>      
    </div>
    */

let elem = document.getElementById('userList');
console.log(elem);
console.log(elem.attributes);
console.log(elem.attributes[0]); // id 
console.log(elem.attributes[0].value); // userList
console.log(elem.nodeType);
console.log(elem.id);
console.log(elem.childNodes);
console.log(elem.children);
console.log(elem.firstChild);
console.log(elem.lastChild);
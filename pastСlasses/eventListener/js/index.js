/* HTMLElement - Element - Node - EventTarget */

const btn = document.getElementById('btn');

let isHello = true;

btn.addEventListener("click", fun1);

function fun1(e) {
    alert('Hello, User !');
    //isHello = !isHello; 
    btn.removeEventListener('click', fun1);
    //btn.addEventListener('click', fun2);
}

function fun2(e) {
    alert('Bye )');
    //isHello = !isHello;
    btn.removeEventListener('click', fun2);
    //btn.addEventListener('click', fun1);
}



/*
btn.onclick = function(){ console.log('Hello!!')}

btn.onclick = function(){ console.log('Bye )')}
*/
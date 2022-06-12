// id
let conteinerElement = document.getElementById('container');
//console.log(conteinerElement);
// backgroud-color: blue
conteinerElement.style.backgroundColor = 'red';
console.log(typeof conteinerElement);

let arrayOrangedPa = document.querySelectorAll('p.orangeP');
/*
for(let i=0; i<arrayOrangedPa.length; i++){
    arrayOrangedPa[i].style.backgroundColor = 'orange';
    arrayOrangedPa[i].style.fontSize = '30px';
}
*/

//array1.forEach(element => console.log(element));
arrayOrangedPa.forEach(el => {
    el.style.backgroundColor = 'orange';
    el.style.color = 'white';
    el.style.fontSize = '25px';
})


/*
id #nameid  class .nameclass

document.querySelector('div#container')  //id
document.querySelector('#container')  //id
document.querySelector('.ligthP');  // class
document.querySelector('p.ligthP');  // class
document.querySelector('div > .ligthP');  // class
document.querySelector('div#container > .ligthP');  // class
*/
/*
getElementById(id)
querySelector(css selector)
querySelectorAll(css selector)

getElementsByTagName(tag)
getElementsByClassName(class)
getElementsByName(class)
*/
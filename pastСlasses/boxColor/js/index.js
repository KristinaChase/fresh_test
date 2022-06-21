const divArray = document.querySelectorAll('.box');

/*
const handleChangeColor1 = (e) => {
    //console.log(this);   window
    //console.log(e);
}
*/

function handleChangeColor1 (e) {
    //console.log(this);
    //console.log(e);
    this.style.background = 'black';
    this.removeEventListener('click', handleChangeColor1);
    this.addEventListener('click', handleChangeColor2);
}

function handleChangeColor2 (e) {
    this.style.background = 'white';
    this.removeEventListener('click', handleChangeColor2);
    this.addEventListener('click', handleChangeColor1);

}

divArray.forEach( el => el.addEventListener('click', handleChangeColor1));



/*
for(let i=0; i<divArray.length; i++){
    divArray[i].addEventListener();
}
*/
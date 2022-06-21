const btn = document.querySelector('.container');
const p = document.getElementById('info');

btn.addEventListener('click', handleFun);

let counter = 0;

/*
// вывести текущую дату
function handleFun (e) {
    console.log(e);
    const date = new Date();
    console.log(date);
    p.innerText = date;
}
*/

// счетчик
// вывести текущую дату
function handleFun (e) {
    p.innerText = counter;
    counter++;
}

let rem = document.getElementById('remBtn');
rem.addEventListener('click', (e) => {
    console.log(e);
    counter = 0;
});
const box = document.getElementById('test');

const outXY = (event) => {
    console.log('Client XY = ',event.clientX, event.clientY);
    console.log('Offset XY = ',event.offsetX, event.offsetY);
    console.log('Type event:',event.type,'Target:', event.target);
};

box.addEventListener('click', outXY);
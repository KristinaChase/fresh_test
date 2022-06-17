
//1

let containerFirst = document.querySelector('div.container__first');
containerFirst.style.background = 'green';
containerFirst.style.border = 'solid 2px orange'
containerFirst.style.padding = '10px';
containerFirst.style.marginBottom = '20px';
containerFirst.style.display = 'flex';
containerFirst.style.flexDirection = 'column';
containerFirst.style.alignItems = 'flex-start';

let paragraph = document.querySelectorAll('p.text');
paragraph.forEach((el, i) => {
    el.style.margin = '10px';
    el.style.padding = '10px';
    el.style.fontSize = '20px';
    if(i<3) el.style.color = 'green', el.style.background = 'white', el.style.borderRadius = '15px';
    if(i>=3 && i<7) el.style.color = 'orange';
    if(i>6) el.style.color = 'yellow';
})

//2

let containerSecond = document.createElement('div');
document.body.append(containerSecond);
containerSecond.style.background = 'White';
containerSecond.style.border = 'solid 2px Green';
containerSecond.style.padding = '10px';
containerSecond.style.marginBottom = '20px';
containerSecond.style.display = 'flex';
containerSecond.style.justifyContent = 'space-between';

let mon = document.createElement('p');
let tue = document.createElement('p');
let wed = document.createElement('p');
let thu = document.createElement('p');
let fri = document.createElement('p');
let sat = document.createElement('p');
let sun = document.createElement('p');

let list = [mon, tue, wed, thu, fri, sat, sun];
list.forEach(el => containerSecond.append(el));

list.forEach((el, i) => {
    el.style.fontSize = '35px';
    el.style.fontFamily = 'arial';
    el.style.fontWeight = '600';
    el.style.margin = '10px';
    el.style.padding = '10px';
    if (i==0) el.innerText = 'Понеділок', el.style.color = 'orange';
    if (i==1) el.innerText = 'Вівторок', el.style.color = 'green';
    if (i==2) el.innerText = 'Середа', el.style.color = 'orange';
    if (i==3) el.innerText = 'Четвер', el.style.color = 'green';
    if (i==4) el.innerText = "П'ятница", el.style.color = 'orange';
    if (i==5) el.innerText = 'Субота', el.style.color = 'green';
    if (i==6) el.innerText = 'Неділя', el.style.color = 'orange';
});

//3*

let containerThird = document.createElement('div');
containerThird.style.backgroundColor = '#EDEFF2'
containerThird.style.display = 'flex';
containerThird.style.justifyContent = 'center';
document.body.append(containerThird);

let card = document.createElement('div');
containerThird.append(card);
card.style.width = '300px';
card.style.height = '500px';
card.style.backgroundColor = 'white';
card.style.border = 'solid 2px lightgray';
card.style.borderRadius = '10px';
card.style.padding = '20px 16px'
card.style.margin = '20px';
card.style.overflow = 'hidden';
card.style.display = 'flex';
card.style.flexDirection = 'column'
card.style.justifyContent = 'space-between';
card.style.alignItems = 'center'

let img = document.createElement('a');
img.style.backgroundImage = 'url(https://i.otzovik.com/objects/b/830000/823923.png)';
img.style.width = '250px';
img.style.height = '200px';
img.href = '#';
card.append(img);

let title = document.createElement('a');
title.innerText = 'Ноутбук ігровий HP Pavilion Gaming 15-ec2023ua (562C0EA) Shadow Black';
title.href = '#';
title.style.fontFamily = 'Roboto'
title.style.fontSize = '14px';
title.style.fontWeight = '400';
title.style.color = 'black';
card.append(title)

let cost = document.createElement('h2');
cost.innerText = '33 499 ₴';
cost.style.fontFamily = 'Roboto';
cost.style.fontSize = '21px';
cost.style.fontWeight = '400';
card.append(cost);

let description = document.createElement('div');
description.innerHTML = '<h4 class="descript__title">Характеристики:</h4><p class="descript__text">Діагональ екрану:15,6</p><p class="descript__text">Роздільна здатність екрану: 1920x1080 Full HD</p><p class="descript__text">Тип матриці: IPS</p><p class="descript__text">Частота оновлення екрану: 60Гц</p><p class="descript__text"Покриття екрану: Антиблікове</p>';
card.append(description);

let descriptTitle = document.querySelector('h4.descript__title');
descriptTitle.style.fontFamily = 'Roboto';
descriptTitle.style.fontSize = '12px';
descriptTitle.style.fontWeight = '700';
descriptTitle.style.margin = '5px 0px';

let descriptText = document.querySelectorAll('p.descript__text');
descriptText.forEach(el => {
    el.style.fontFamily = 'Roboto';
    el.style.fontSize = '12px';
    el.style.fontWeight = '400';
    el.style.margin = '2px 0px'
    el.style.color = 'rgb(161, 154, 154)'
})

let buy = document.createElement('a');
buy.innerText = 'КУПИТИ';
buy.href = '#'
buy.style.fontFamily = 'Roboto';
buy.style.fontSize = '20px';
buy.style.fontWeight = '700';
buy.style.color = 'orange';
buy.style.padding = '5px 15px';
buy.style.border = 'solid 2px orange'
card.append(buy);


Object.keys(descriptText[0]).forEach((key) => {
    console.log(key);
})

console.log('FF')
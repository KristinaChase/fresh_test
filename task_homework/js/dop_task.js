// task1
function showInConsole(){
    let a=11, b=true, c='java script', d='100';
    console.log(a,b,c,d);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

//task2
function greetingFunction(){
    let greeting='Hello, ',userName=prompt('Введите свое имя');
    alert(greeting+userName+('!'));
}

//task3
function hmmnFunction(){
    let hmmn;
    while(true){
        hmmn=prompt('Сколько сейчас минут?');
        if(hmmn<0 || hmmn>60){
            alert('Введи правильно!!');
        } else if(hmmn<=15){
            alert('1-я четверть часа');
            break;
        } else if(hmmn<=30){
            alert('2-я четверть часа');
            break;
        } else if(hmmn<=45){
            alert('3-я четверть часа');
            break;
        } else if(hmmn<=60){
            alert('4-я четверть часа');
            break;
        } else;
            alert('Введи правильно!!');
    }
}

//task4
function outputOfNumbers(){
    let num=10;
    for(num;num<=50;num++){
        if(num%5==0){
            console.log(num)
        }
    }
}


function dropMenu(){
    let menu=prompt('1=з№1 2=з№2 3=з№3 4=з№4');
    switch(menu){
        case '1':showInConsole(); break;
        case '2':greetingFunction(); break;
        case '3':hmmnFunction(); break;
        case '4':outputOfNumbers(); break;
        default:alert('Нет такого значения:-/');dropMenu();
    }
}
dropMenu();
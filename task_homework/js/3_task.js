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
 
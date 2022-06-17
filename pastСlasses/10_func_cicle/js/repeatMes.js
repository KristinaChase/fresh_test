// задача . вывести сообщение столько раз сколько задает пользователь

function repeatMsg(countMaxMsg){
    
    while(countMaxMsg>0){
        console.log('hello');
        countMaxMsg--;
    }
    
    let i;
    for(i=1; i<=countMaxMsg; i++){
        console.log('hello');
    }
}

repeatMsg(5);
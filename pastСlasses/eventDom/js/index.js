function createUserImage(userImageSrc){
    const imgCont = document.createElement('div');
    const imgUser = document.createElement('img');
    imgUser.setAttribute('src', userImageSrc);
    imgUser.setAttribute('alt', 'photo');
    imgCont.append(imgUser);
    return imgCont;
}

function createUserFullname(fullName){
    const userFullName = document.createElement('p');
    userFullName.classList.add('user_fullname');
    userFullName.innerText = fullName;
    return userFullName;
}

function createBtnContainer(stats){
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('button_container');
    //fb
    const stat1 = document.createElement('div');
    stat1.classList.add('stat', 'fb');
    stat1.innerText = stats.fb;
    btnContainer.append(stat1);
    //insta
    const stat2 = document.createElement('div');
    stat2.classList.add('stat', 'insta');
    stat2.innerText = stats.insta;
    btnContainer.append(stat2);
    // tel
    const stat3 = document.createElement('div');
    stat3.classList.add('tel', 'fb');
    stat3.innerText = stats.tel;
    btnContainer.append(stat3);
    return btnContainer;
}

function createCard(objUser){
    const card = document.createElement('li');
    card.classList.add('card_container');
    card.append(createUserImage(objUser.imgSrc));
    const infoCont = document.createElement('div');
    infoCont.classList.add('info_container');
    infoCont.append(createUserFullname(objUser.fullName));
    infoCont.append(createBtnContainer(objUser.stats));
    card.append(infoCont);
    return card;
}

const users = [
    {
        imgSrc: '#',
        fullName: 'Tom Fox',
        stats: {
            fb: '10000',
            insta: '12500',
            tel: '8600'
        }
    },
    {
        imgSrc: '#',
        fullName: 'John Smith',
        stats: {
            fb: '10000',
            insta: '12500',
            tel: '8600'
        }
    },
    {
        imgSrc: '#',
        fullName: 'Ann Fox',
        stats: {
            fb: '10000',
            insta: '12500',
            tel: '8600'
        }
    },


];

const userCards = document.getElementById('userCardsContainer'); //ulu
users.forEach( u => userCards.append(createCard(u)))


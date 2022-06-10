//1

const HP255 = {
    serialNumber: '3V5E7EA',
    model: 'HP 255 G8',
    display: {
        matrixType: 'IPS',
        screenResolution: [1920, 1080],
    },
    processor: {
        cores: '8/16',
        name: 'AMD Ryzen 7 5700U',
        frequency: '1.8 - 4.3 ГГц',
    },
    ram: {
        total: '8 Gb',
        type: 'DDR4',
    },
    storage:{
        hdd: NaN,
        sdd: '256 Gb',
    },
    graphics: 'AMD Radeon Graphics',
    frame:{
        color: 'Серебристый',
        weight: '1,7',
        dimensions: '(Ш х Г х В) 358 x 242 x 19'
    }
}
console.log(HP255);

//2

class CreatUser{
    constructor(login, pass){
        this.login = login;
        this.pass = pass;
    }
}

let user1, user2, user3, user4;

const users = [
    user1 = new CreatUser('ChaseHook', 'TaPaKa1789'),
    user2 = new CreatUser('ChrisBam', 'QwertY689'),
    user3 = new CreatUser('SchulzBeth', 'HOOKberry15'),
    user4 = new CreatUser('loomAnna', 'MoonFox379')
]

console.log(users);

//3

const usersMap = new Map();
users.forEach(element => usersMap.set(element.login, element));
console.log(usersMap);

//4

const array1 = [31,45,67], array2 = [56, 32, 47];
//---4.1
const unitedArray1 = [...array1,...array2];
console.log(unitedArray1);
//---4.2
const unitedArray2 = array1.concat(array2);
console.log(unitedArray2);

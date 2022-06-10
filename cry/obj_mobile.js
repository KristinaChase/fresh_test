/*Object*/

/*
const obj1 = {};
const obj2 = {
    name1: value1,
    name2: value2,
};

name - String
value - Number, String, Boolean, [], {}, function(){}
*/

const cameraTemplate = ['Автофокус', 'Вспышка', 'Поддержка 4К съемки', 'Стабилизация', 'Ультраширокоугольный объектив', 'Широкоугольный объектив'];

const objMobile = {
    model: "Apple iPhone 13",
    display: {
        diagonal: 6.1,
        resolutionDisplay: '2532x1170', //{h: 2532, w: 1170}, //[2532,1170], //'2532x1170'
        matrixPhone: 'OLED'
    },
    simCards: {
        countCasrs: 2,
        sizeCards: ['nanoSIM', 'eSIM']
    },
    OS: 'iOS',
    proccesor: {
        name: 'Apple Ax',
        famaly: 'Apple A15 Bionic',
        cores: '2+4',
        model: 'Apple A15 Bionic'
    },
    frontCamera: {
        count: 1,
        quality: [12],
    },
    mainCamera: {
        count: 2,
        quality: [12,12], //12 Мп + 12 Мп,
        features: [],  
    }
};

//objMobile.mainCamera.features.push(cameraTemplate);
objMobile.mainCamera.features.push(cameraTemplate[0], cameraTemplate[3]);




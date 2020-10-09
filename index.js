const WebcomApi = require('./webcom-api')

const app = new WebcomApi('dima_webcom', 'ZC7Y8HEB')



//Получение баланса
let balance;
// app.getBalance().then((responce) => {
//     balance = responce
// })



//Отправка смс

let phones = ['79044208261']
const optionSMS = {
    senderName: "Viber",
    phones: phones,
    text: 'Test text'
}


// app.sendSMS(optionSMS).then((IDs)=> console.log(IDs))

//Viber


const optionViber = {
    senderName: "Viber",
    phones: phones,
    text: 'Test text',
    image: 'test',
    buttonText: 'buttonText',
    buttonLink: 'buttonLink'
}

// app.sendViber(optionViber).then((IDs)=> console.log(IDs))


//Запрос статуса
const optionsStatus = {
    smsid : '14190003'
}
// app.getStatus(optionsStatus).then((status)=>console.log(status))


//Cascade

const optionCascade = {
    senderNameSMS: "SMS",
    senderNameViber: "Viber",
    phones: phones,
    textViber: 'Test text Viber',
    textSMS: 'Test text SMS',
    image: 'test',
    buttonText: 'buttonText',
    buttonLink: 'buttonLink',
    validityPeriod: '2020-10-09 15:34:54'
}

// app.sendCascade(optionCascade).then((res)=> console.log(res))

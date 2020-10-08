const WebcomApi = require('./webcom-api')

const app = new WebcomApi(null, 'dima_webcom', 'ZC7Y8HEB')



//Получение баланса
let balance;
app.getBalance().then((responce) => {
    balance = responce
})

let phones = ['79044208261']
app.sendSMS('SMS', phones, 'test').then((res)=> console.log(res))

//Отправка смс



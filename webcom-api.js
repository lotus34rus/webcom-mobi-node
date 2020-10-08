//Class for API

const fetch = require('node-fetch')

class WebcomApi {
     constructor(api_key, login, password) {
        this.API_KEY = api_key
        this.LOGIN = login
        this.PASSWORD = password
        this.API_URL =  "http://my3.webcom.mobi/sendsms.php"
     }


    async getBalance() {
        const url =`${this.API_URL}?user=${this.LOGIN}&pwd=${this.PASSWORD}&balance=1`
        try {
            const responce = await fetch(url)
            if(responce.ok){
                const text = await responce.text()
                return {
                    value: text.split('\n')[0],
                    currency: text.split('\n')[1]
                }
            }
            else {
                throw new Error("HTTP Error: " + response.status);
            }
        } catch (error) {
                throw new Error(error)
        }
     }


     async sendSMS(senderName, phones, text){

        phones.forEach( async (phone) => {
            const url = `${this.API_URL}?user=${this.LOGIN}&pwd=${this.PASSWORD}&sadr=${senderName}&text=${text}&dadr=${phone}`
            try{
                const responce = await fetch(url)
                if(responce.ok){
                    const text = await responce.text()
                    console.log(text)

                }else{
                    throw new Error("HTTP Error: " + response.status);
                }
            } catch (error) {
                throw new Error(error)
            }

        })
     }
}


module.exports = WebcomApi

//Class for API

const fetch = require('node-fetch')

class WebcomApi {
    constructor(login, password) {
        this.LOGIN = login
        this.PASSWORD = password
        this.API_URL = "http://my3.webcom.mobi/sendsms.php"
    }


    async getBalance() {
        const url = `${this.API_URL}?user=${this.LOGIN}&pwd=${this.PASSWORD}&balance=1`
        try {
            const responce = await fetch(url)
            if (responce.ok) {
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


    async sendSMS(options) {
        const phone = options.phones.join(',')
        const url = `${this.API_URL}?user=${this.LOGIN}&pwd=${this.PASSWORD}&sadr=${options.senderName}&text=${options.text}&dadr=${phone}`


        try {
            const responce = await fetch(url)
            if (responce.ok) {
                const text = await responce.text()
                return text.split(',0')[0].split(',')
            } else {
                throw new Error("HTTP Error: " + response.status);
            }
        } catch (error) {
            throw new Error(error)
        }
    }

    //Send Viber Messages

    async sendViber(options) {
        const phone = options.phones.join(',')
        let url = `${this.API_URL}?user=${this.LOGIN}&pwd=${this.PASSWORD}&sender_viber=${options.senderName}&text_viber=${options.text}&dadr=${phone}&type_send_1=viber`

        if (options.buttonText && options.buttonLink) {
            url += `&button_viber=${options.buttonText}&action_viber=${options.buttonLink}`
        }
        if (options.image) {
            url += `&image_viber=${options.image}`
        }

        try {
            const responce = await fetch(url)
            if (responce.ok) {
                const text = await responce.text()
                return text.split(',0')[0].split(',')
            } else {
                throw new Error("HTTP Error: " + response.status);
            }
        } catch (error) {
            throw new Error(error)
        }
    }


    //Get message status

    async getStatus(option) {
        let url = `${this.API_URL}?user=${this.LOGIN}&pwd=${this.PASSWORD}&smsid=${option.smsid}`

        try {
            const responce = await fetch(url)
            if (responce.ok) {
                const text = await responce.text()
                return text;
            } else {
                throw new Error("HTTP Error: " + response.status);
            }

        } catch (error) {
            throw new Error(error)
        }
    }
}


module.exports = WebcomApi

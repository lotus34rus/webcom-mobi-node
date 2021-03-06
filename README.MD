# WEBCOM-MOBI-NODE

WEBCOM MOBI - Mobile Marketing Services Company.

webcom-mobi-node is a Simple SDK for WEBCOM MOBI HTTP API

The system allows sending messages through the following channels:

 - SMS
 - Viber 

It is possible to use the technology of cascade forwarding of messages through any channels. 

To work with the system, you must create an account in the system WEBCOM MOBI.

[Leave a request on the site](https://webcom.mobi/) and managers will contact you and help you create an account


## Installation
`npm i webcom-mobi-node`
## How to use?

This package is a wrapper over the API of the mobile marketing system of the company WEBCOM MOBI

### Initialization

    const WebcomApi = require('webcom-mobi-node')
    const app = new WebcomApi('YOUR_LOGIN', 'YOUR_PASSWORD')

### Balance check

    app.getBalance().then((balance) => {
        console.log(balance)
    })

### Check message status

    const optionsStatus = {
        smsid : '14190003' //Message ID, which you will receive after sending
    }
    app.getStatus(optionsStatus).then((status)=>console.log(status))


### Sending SMS

    let phones = ['79999999999'] // Array of phones
    const optionSMS = {
        senderName: "YOUR_SMS_SENDER_NAME",
        phones: phones,
        text: 'TEXT_SMS'
    }
    app.sendSMS(optionSMS).then((IDs)=> console.log(IDs))

In response, you will receive an array of sent messages id

### Sending Viber

    const optionViber = {
        senderName: "VIBER_SENDER_NAME",
        phones: ["Array of phones"],
        text: 'Message Text',
        image: 'Image_URL (optional)',
        buttonText: 'Button text (optional)',
        buttonLink: 'Button link (optional)'
    }

    app.sendViber(optionViber).then((IDs)=> console.log(IDs))

In response, you will receive an array of sent messages id


### Sending Cascade (VIBER+SMS)

    const optionCascade = {
        senderNameSMS: "YOUR_SMS_SENDER_NAME",
        senderNameViber: "VIBER_SENDER_NAME",
        phones: ["Array of phones"],
        textViber: 'Text Viber',
        textSMS: 'Text SMS',
        image: 'Image_URL (optional)',
        buttonText: 'Button text (optional)',
        buttonLink: 'Button link (optional)',
        validityPeriod: '2020-10-09 15:34:54' //Example of viber validity period (opional)
    }

    app.sendCascade(optionCascade).then((res)=> console.log(res))

In response, you will receive an array of sent messages id


## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
## History
09.10.2020 (v.1.0.0) - First Release
## License
MIT

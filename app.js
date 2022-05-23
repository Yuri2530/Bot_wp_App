
/* 
const fs = require('fs')
const ora = require('ora') */
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
//const { default: chalk } = require('chalk');

/* let sessionData;

const withSession = () => {
    const spinner = ora(`Cargando ${chalk.yellow('Validando sesión con Whatsap...')}`);
    sessionData = require(LocalAuth);
    spinner.start();

    const client = new Client({
        session:sessionData
    })


    client.on('ready', () => {
        console.log('Cliente listo');
        spinner.stop();
    })

    client.on('auth_failure', ()=> {
        spinner.stop();
        console.log('error')
    })

    client.initialize();
}



const withOutSession = () => { */


    const client = new Client({
        authStrategy: new LocalAuth()
    });
    
    client.on('qr', qr => {
        qrcode.generate(qr, { small: true })
    });

    client.on('ready', () => {
        console.log('Cliente listo');
    })

    client.on('message', message => {
        console.log(message.body);
    });

/*     client.initialize();
}


(fs.existsSync(authStrategy)) ? withSession() : withOutSession(); */

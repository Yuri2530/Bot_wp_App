
 
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');


    const client = new Client({
        authStrategy: new LocalAuth()
    });
    
    client.on('qr', qr => {
        qrcode.generate(qr, { small: true })
    });




    client.on('ready', () => {
        console.log('Cliente listo');
        listenMessage();
    })


    client.initialize();

    //Función encargada de escuchar mensajes

    const listenMessage = () => {
        client.on('message', (msg) =>{
            const{from, to, body} = msg;

            console.log(from, to, body);
            sendMessage(from, 'Hola amig@!!!')
        })
    }

    const sendMessage = (to, message) => {
         
        client.sendMessage(to,message)
    }


    


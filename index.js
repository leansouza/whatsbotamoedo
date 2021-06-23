const express = require('express')
const venom = require('venom-bot')
const axios = require('axios')

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

async function start(client) {
    var app = express();

    app.listen(3333, () => {
        console.log('Server running on port 3333')
    })
        const api = await returnPedidos();

        for(var i = 0; i < parseInt(api.rowsAffected); i++){

            
            if(api.recordset[i].TEVEALTERACAO === 1){
                
            }
            await client
                .sendText('55'+api.recordset[i].TELEFONE+'@c.us', api.recordset[i].MENSAGEM)
                .then((result) => {
                    console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }
}

async function returnPedidos(){
    const response = await axios.get(`http://localhost:5000/amoedo/pedidos`)
    return response.data
}

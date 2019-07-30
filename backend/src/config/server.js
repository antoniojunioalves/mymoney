const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()


/***************    Midlewares **********************/
// Para todas as requisições que chegarem será feito o urlencoded
server.use(bodyParser.urlencoded({ extended: true }))
// já o comentário abaixo fará um bodyParser para as requisições que iniciarem com /ola
//server.use('/ola', bodyParser.urlencoded({ extended: true }))

// vai fazer um parser quando no corpo da requisição vier um json
server.use(bodyParser.json())

/***************  Listem é onde ficará escutando  ***************/
server.listen(port, function(){
    console.log(`Backend está rodando na porta ${port}.`)
})

module.exports = server
const express = require('express')

module.exports = function(server){

    // Definir url base para toda aplicação. 
    const router = express.Router()
    server.use('/api', router)

    // Rotas de ciclo de pagamento 
    const billingCycle = require('../api/billingCycle/billingCycleService')
    billingCycle.register(router, '/billingCycles')
}
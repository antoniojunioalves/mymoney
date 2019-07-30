const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'O campo nome do crédito é obrigatório!'] },
    value: { type: Number, required: true }
})

const debitSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, required: true },
    status: { type: String, required: false, uppercase: true, 
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, required: true, min: 1, max: 12 },
    year: { type: Number, required: true, min: 1970, max: 2100},
    credits: [creditSchema],
    debts: [debitSchema]
})

module.exports = restful.model('billingCycle', billingCycleSchema)
const mongoose = require('mongoose')
mongoose.Promise = global.Promise // evitar warnings - Pega a promise do node e passa para o mongoose

module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O Valor '{VALUE}' informado é menor que o limite mínimo {MIN}."
mongoose.Error.messages.Number.max = "O Valor '{VALUE}' informado é maior que o limite máximo {MAX}."
mongoose.Error.messages.String.enum = "O Valor '{VALUE}' informado não é válido para o atributo '{PATH}'."
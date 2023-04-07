const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    endereco: String,
})

const ClientsModel = mongoose.model('clients', schema)

module.exports = ClientsModel
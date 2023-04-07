const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    codigoCliente: String,
    codigoProduto: String,
    data: String,
    status: String,
})

const OrderModel = mongoose.model('orders', schema)

module.exports = OrderModel 
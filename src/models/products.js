const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nome: String,
    preco: Number,
})

const ProductsModel = mongoose.model('products', schema)

module.exports = ProductsModel
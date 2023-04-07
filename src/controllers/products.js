const ProductsModel = require('../models/products')

async function getProducts(req, res){
    const {id} = req.params

    const obj = id ? {_id: id} : {}

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function postProducts(req, res) {
    const {
        nome,
        preco,
    } = req.body

    const product = new ProductsModel({
        nome,
        preco,
    })

    product.save()

    res.send({
        message: 'success'
    })
}

async function removeProducts(req, res) {

    const {id} = req.params

    const remove = await ProductsModel.deleteOne({_id: id})

    let message = 'success'

    if(!remove.ok){
        message = 'error'
    }
    
    res.send({
        message,
    })
}


module.exports = {
    getProducts,
    postProducts,
    removeProducts
}
const OrderModel = require('../models/order')

async function getOrders(req, res){
    const {id} = req.params

    const obj = id ? {_id: id} : {}

    const orders = await OrderModel.find(obj)

    res.send(orders)
}

async function putOrders(req, res) {
    const {id} = req.params

    const order = await OrderModel.findOneAndUpdate({_id: id}, req.body, {new: true})

    res.send({
        message: 'success',
        order
    })
}

module.exports = {
    getOrders,
    putOrders
}
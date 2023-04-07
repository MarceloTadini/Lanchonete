const ClientsModel = require('../models/clients')

async function getClients(req, res){
    const {id} = req.params

    const obj = id ? {_id: id} : {}

    const clients = await ClientsModel.find(obj)

    res.send(clients)
}

async function postClients(req, res){
    const {
        nome,
        email,
        telefone,
        endereco,
    } = req.body

    const client = new ClientsModel({
        nome,
        email,
        telefone,
        endereco,
    })

    client.save()

    res.send({
        message: 'success'
    })
}

async function removeClients(req, res){
    const {id} = req.params

    const remove = await ClientsModel.deleteOne({_id: id})

    let message = 'success'
    
    if(remove.deletedCount === 0){
        message = 'error'
    }
    
    res.send({
        message,
    })
}

module.exports = {
    getClients,
    postClients,
    removeClients
}
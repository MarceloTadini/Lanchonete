const router = require('express').Router()

const ProductController = require('../controllers/products')
const ClientController = require('../controllers/clients')
const OrderController = require('../controllers/order')

//rotas de produtos
router.get('/products/:id?', ProductController.getProducts)
router.post('/products', ProductController.postProducts)
router.delete('/products/:id', ProductController.removeProducts)

//rotas de clientes
router.get('/clients/:id?', ClientController.getClients)
router.post('/clients', ClientController.postClients)
router.delete('/clients/:id', ClientController.removeClients)

//rotas de pedidos
router.get('/orders/:id?', OrderController.getOrders)
router.put('/orders/:id', OrderController.putOrders)

module.exports = router
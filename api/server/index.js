const express = require('express')

const productsRouter = require('../routes/products.router')
const usersRouter = require('../routes/users.router')
const categoriesRouter = require('../routes/categories.router')
const ordersRouter = require('../routes/orders.router')

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/products', productsRouter)
  router.use('/users', usersRouter)
  router.use('/categories', categoriesRouter)
  router.use('/orders', ordersRouter)
}

module.exports = routerApi

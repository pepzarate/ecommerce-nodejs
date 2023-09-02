const express = require("express");
const ProductService = require('./../services/product.service')
const router = express.Router()

const service = new ProductService()

router.get("/", async function(request, response) {
  const products = await service.find()
  response.json(products)
})

router.get("/:id", function(request, response) {
  const { id } = request.params
  const product = service.findOne(id)
  response.json(product)
})

router.post('/', async function(request, response) {
  const body = request.body
  const newProduct = await service.create(body)
  response.status(201).json(newProduct)
})

router.patch('/:id', async function(request, response) {
  try {
    const { id } = request.params
    const body = request.body
    const updatedProduct = await service.update(id, body)
    response.json(updatedProduct)
  } catch(err) {
    response.status(404).json({
      error: err.message
    })
  }
})

router.delete('/:id', async function(request, response) {
  const { id } = request.params
  const rta = await service.delete(id)
  response.json(rta)
})

module.exports = router

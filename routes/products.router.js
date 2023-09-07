const express = require("express");
const ProductService = require('./../services/product.service')
const validatorHandler = require('./../middlewares/validator.handler')
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema')

const router = express.Router()

const service = new ProductService()

router.get("/", async function(request, response) {
  const products = await service.find()
  response.json(products)
})

router.get("/:id",
  validatorHandler(getProductSchema, 'params'), async function(request, response, next) {
    try {
      const { id } = request.params
      const product = await service.findOne(id)
      response.json(product)
    } catch (error) {
      next(error)
    }
  })

router.post('/',
  validatorHandler(createProductSchema, 'body'), async function(request, response) {
    const body = request.body
    const newProduct = await service.create(body)
    response.status(201).json(newProduct)
  })

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
   validatorHandler(updateProductSchema, 'body'),
    async function(request, response, next) {
      try {
        const { id } = request.params
        const body = request.body
        const updatedProduct = await service.update(id, body)
        response.json(updatedProduct)
      } catch(err) {
        next(err)
      }
    })

router.delete('/:id', async function(request, response) {
  const { id } = request.params
  const rta = await service.delete(id)
  response.json(rta)
})

module.exports = router

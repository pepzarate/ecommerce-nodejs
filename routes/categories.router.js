const express = require('express')
const CategoryService = require('./../services/category.service')

const router = express.Router()

const service = new CategoryService()

router.get("/", async function(request, response) {
  const categories = await service.find()
  response.json(categories)
})

router.get("/:id", async function(request, response) {
  const { id } = request.params
  const category = await service.findOne(id)
  response.json(category)
})

router.get("/:categoryId/products/:productId", function(request, response) {
  const { categoryId, productId } = request.params
  response.json({
    categoryId,
    productId
  })
})

router.post('/', async (request, response) => {
  const body = request.body
  const result = await service.create(body)
  response.status(201).json(result)
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const body = request.body
    const updatedCategory = await service.update(id, body)
    response.json(updatedCategory)
  } catch(err) {
    response.status(404).json({
      error: err.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  const { id } = request.params
  const result = await service.delete(id)
  response.status(201).json(result)
})

module.exports = router

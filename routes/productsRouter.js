const express = require("express");
const { faker } = require('@faker-js/faker')

const router = express.Router()

router.get("/", function(request, response) {
  const products = []
  const { size } = request.query
  const limit = size || 10
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()
    })
  }
  response.json(products)
})

router.get("/filter", function(request, response) {
  response.send("Yo soy un filter")
})

router.get("/:id", function(request, response) {
  const { id } = request.params

  if(id === '999') {
    response.status(404).json({
      message: "No se encontró el ID"
    })
  } else {
    response.json({
      id,
      name: "Product 1",
      price: 400
    })
  }

})

router.post('/', function(request, response) {
  const body = request.body
  response.status(201).json({
    message: 'created',
    data: body
  })
})

router.patch('/:id', function(request, response) {
  const { id } = request.params
  const body = request.body
  response.json({
    message: 'updated',
    data: body,
    id
  })
})

router.delete('/:id', function(request, response) {
  const { id } = request.params
  response.json({
    message: 'deleted',
    id
  })
})

module.exports = router

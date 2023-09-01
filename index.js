const express = require("express");
const { faker } = require('@faker-js/faker')
const app = express();
const port = 8080;

app.get("/", function(request, response) {
  response.send("Hola mi server en express")
})

app.get("/products", function(request, response) {
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

app.get("/products/filter", function(request, response) {
  response.send("Yo soy un filter")
})

app.get("/products/:id", function(request, response) {
  const { id } = request.params

  response.json({
    id,
    name: "Product 1",
    price: 400
  })
})

app.get("/categories/:categoryId/products/:productId", function(request, response) {
  const { categoryId, productId } = request.params
  response.json({
    categoryId,
    productId
  })
})

app.get("/users", function(request, response) {
  const { limit, offset } = request.query

  if(!limit && !offset) {
    response.send("No hay parametros")
  }
  response.json({
    limit,
    offset
  })
})

app.listen(port, function() {
  console.log("> Escuchando en puerto", port)
})


const express = require('express')

const router = express.Router()

router.get("/:categoryId/products/:productId", function(request, response) {
  const { categoryId, productId } = request.params
  response.json({
    categoryId,
    productId
  })
})

module.exports = router

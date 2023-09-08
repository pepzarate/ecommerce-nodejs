const express = require("express");

const routerUsers = express.Router()

routerUsers.get("/", function(request, response) {
  const { limit, offset } = request.query

  if(!limit && !offset) {
    response.send("No hay parametros")
  }
  response.json({
    limit,
    offset
  })
})

module.exports = routerUsers

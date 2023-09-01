const express = require("express");
const routerApi = require('./server')

const app = express();
const port = 8080;

app.use(express.json())

app.get("/", function(request, response) {
  response.send("Hola mi server en express")
})

routerApi(app)

app.listen(port, function() {
  console.log("> Escuchando en puerto", port)
})


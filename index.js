require('dotenv').config();
const express = require("express");
const routerApi = require('./server')

const app = express();
let PORT;
process.env.STATUS === 'production'
  ? (PORT = process.env.PROD_PORT)
  : (PORT = process.env.DEV_PORT)

app.use(express.json())

app.get("/", function(request, response) {
  response.send("Hola mi server en express")
})

routerApi(app)

app.listen(PORT, function() {
  console.log("> Escuchando en puerto", PORT)
})


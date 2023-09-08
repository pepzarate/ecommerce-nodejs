require('dotenv').config();
const express = require("express");
const cors = require('cors')
const routerApi = require('./server')

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
let PORT;
process.env.STATUS === 'production'
  ? (PORT = process.env.PROD_PORT)
  : (PORT = process.env.DEV_PORT)

app.use(express.json())

const whitelist = ['http://localhost:8000', 'https://myapp.co']
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true)
        } else {
            callback(new Error('no permitido'))
        }
    }
  }
app.use(cors(options))

app.get("/api", function(request, response) {
  response.send("Hola mi server en express")
})

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(PORT, function() {
  console.log("> Escuchando en puerto", PORT)
})


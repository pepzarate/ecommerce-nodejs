const { faker } = require('@faker-js/faker')
const express = require('express')

const router = express.Router()

router.get('/', function(request, response) {
  const { size } = request.query
  const orders = []

  const limit = size || 5
  for(let i =0; i < limit; i++){
    orders.push({
      _id: faker.string.uuid(),
      avatar: faker.image.avatar(),
      birthday: faker.date.birthdate(),
      email: faker.internet.email(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      sex: faker.person.sexType()
    })
  }

  response.json(orders)
})

module.exports = router


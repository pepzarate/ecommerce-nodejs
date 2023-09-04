
class CategoryService {

  constructor(){
    this.categories = [
      {
        id: 1,
        name: "Sneakers",
        description: "Comfortable sneakers"
      },
      {
        id: 2,
        name: "Clothes",
        description: "Best fashion clothes"
      },
      {
        id: 3,
        name: "Sun glasses",
        description: "Really nice glasses"
      }
    ]
  }

  async create(data) {
    const newCategory = {
      id: this.categories.length,
      ...data
    }
    return this.categories.push(newCategory)
  }

  async find() {
    return this.categories
  }

  async findOne(id) {
    return this.categories.find(item => item.id === Number(id))
  }

  async update(id, data) {
    const index = this.categories.findIndex(item => item.id === id)
    if( index === -1 ){
      throw new Error('Category not found')
    }
    const categoryToUpdate = this.categories[index]
    this.categories[index] = {
      ...categoryToUpdate,
      ...data
    }
    return this.categories[index]
  }

  async delete(id) {
    const index = this.categories.findIndex(item => item.id === id)
    if( index === -1 ){
      throw new Error("Category not found")
    }
    this.categories.splice(index,1)
    return {message :"OK"}
  }
}

module.exports = CategoryService

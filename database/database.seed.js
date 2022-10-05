const DatabaseService = require('./database.service')
const Category = require('../app/models/category.model')

const databaseService = new DatabaseService()

//  Seed the database
async function seed() {
    const categories = [
        {
            "name": "African Food",
            "image": "african-food.jpg"
        },
        {
            "name": "American Food",
            "image": "american-food.jpg"
        },
        {
            "name": "Chinese Food",
            "image": "chinese-food.jpg"
        },
        {
            "name": "Mexican Food",
            "image": "mexican-food.jpg"
        },
        {
            "name": "Indian Food",
            "image": "indian-food.jpg"
        }
    ];
    try {
        await databaseService.initialize()
        await Category.insertMany(categories)
        console.log('[Database]: Database seeding successful...')
        process.exit(1)
    } catch (e) {
        console.log(`[Database]: Database seeding failed: ${e.message}`)
        process.exit(0)
    }
}

seed()
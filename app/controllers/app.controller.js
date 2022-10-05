const Category = require('../models/category.model')
const { cleanCategory } = require('../helpers/helpers')

const getHome = async (req, res) => {
    try {
        const limit = req.params.limit
        const categories = await Category.find({}).limit( limit || 5 )
        res.status(200).render(
            'index',
            {
                title: "Daniel's Recipe Book - Home",
                date: new Date().getFullYear(),
                categories: cleanCategory(categories),
            }
        )
    } catch (e) {
        return res.status(400).json({ message: e.message || 'Oops! Something went wrong' })
    }
}

module.exports = {
    getHome
}
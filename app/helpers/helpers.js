const cleanCategory = (arr) => {
    return arr.map(a => Object.assign({}, {
        name: a.name,
        image: a.image,
        createdAt: new Date(a.createdAt).toDateString(),
        updatedAt: new Date(a.updatedAt).toDateString(),
    }))
}

const cleanRecipe = (arr) => {
    return arr.map(a => Object.assign({}, {
        name: a.name,
        desc: a.desc,
        image: a.image,
        ingredients: a.ingredients,
        category: a.category,
        createdAt: new Date(a.createdAt).toDateString(),
        updatedAt: new Date(a.updatedAt).toDateString(),
    }))
}

module.exports = { cleanCategory, cleanRecipe }
const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: { 
        type: String,
        required: true
    },
    image: { 
        type: String,
        required: true
    },
    ingredients: { 
        type: Array,
        required: true
    },
    category: { 
        type: String,
        enum: ['African', 'American', 'Chinese', 'Mexican', 'Indian'],
        required: true
    } 
}, {timestamps: true})

const recipe = mongoose.model('Recipe', RecipeSchema)

module.exports = recipe
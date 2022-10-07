const process = require('process')
const DatabaseService = require('./database.service')
const Category = require('../app/models/category.model')
const Recipe = require('../app/models/recipe.model')

const databaseService = new DatabaseService()

//  Seed the database
async function seedCategories() {
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

async function seedRecipes() {
    const recipes = [
        {
            "name": "Ogbono Okra Soup with Pounded Yam",
            "desc": "So we have Ogbono Soup, we have Okra Soup but do you know that you can combine these two main soup ingredients (ogbono and okra), to make one soup? O yes 😀 😀 ",
            "image": "ogbono.jpg",
            "ingredients": [
                "¼ cup ground ogbono",
                "20 okra fingers",
                "1kg (2.2lbs) beef",
                "3 big pieces of cow skin",
                "1 Smoked Fishsmoked mackerel",
                "2 cooking spoons red palm oil",
                "300g spinach",
                "¼ cup crayfish (optional)",
                "1 piece ogiri okpei",
                "Scotch bonnet or habaero pepper (to taste)",
                "Sweet pepper",
                "Onions (optional)"
            ],
            "category": "African"
            
        },
        {
            "name": "Mushroom mapo tofu",
            "desc": "Enjoy this plant-based version of Chinese mapo tofu served with jasmine rice and steamed greens. Meaty shitake mushrooms and firm tofu make a great combo",
            "image": "mushroom-tofu.jpg", 
            "ingredients": [
                "400g fresh firm tofu block",
                "2 tbsp rapeseed oil",
                "2 garlic cloves, finely chopped",
                "2.5cm piece ginger, peeled and finely grated",
                "1 red chilli, deseeded and finely chopped",
                "150g fresh shitake mushrooms, sliced to 1cm strips",
                "1 tsp dry toasted whole Sichuan pepper",
                "1 tbsp chilli bean paste",
                "2 tbsp dark soy sauce",
                "2 tbsp Shaoxing rice wine or dry sherry",
                "250ml cold vegetable stock or mushroom stock",
                "2 tbsp Chinkiang black rice vinegar",
                "2 tbsp tamari or low-sodium light soy sauce",
                "1 heaped tbsp cornflour",
            ],
            "category": "Chinese"
        },
        {
            "name": "Butter Chicken",
            "desc": "Swap your usual takeaway for homemade butter chicken. The dish is made in two parts, combining tandoori chicken with a rich, buttery sauce",
            "image": "butter-chicken.jpg",
            "ingredients": [
                "3 tbsp lemon juice",
                "2-3 tbsp kashmiri chili powder or paprika",
                "4 skinless chicken breasts or 8 thigh fillets, chopped into 5cm cubes",
                "3 tbsp melted butter or ghee, for basting the skewers",
                "200ml plain yogurt",
                "1 tbsp crushed garlic",
                "1 tbsp finely grated ginger",
                "2 tbsp ground coriander",
                "2 tbsp ground cumin",
                "2 tsp amchoor powder (dried mango powder)",
                "1 tbsp dried fenugreek leaves, crushed",
                "1 tbsp dried mint leaves",
                "½ tsp black salt (optional)",
                "½ tsp plain salt (use 1 tsp if you do not have black salt)",
                "3 tbsp vegetable oil",
                "1 tsp cumin seeds",
                "4-8 hot green chillies, sliced",
                "90g butter or ghee",
                "2 medium onions, finely chopped",
                "4 green cardamom pods, cracked",
                "½ tbsp crushed garlic",
                "½ tbsp grated ginger",
                "1 tsp ground turmeric",
                "2 tsp dried fenugreek leaves, crushed",
                "500ml passata, diluted with 150ml water",
                "2 tsp garam masala",
                "100ml single cream",
                "large pinch of coriander leaves, to garnish",
            ],
            "category": "Indian"
        },
        {
            "name": "Baby back ribs with Carolina baste",
            "desc": "This American pork rib recipe is sure to satisfy at a barbecue - roast until tender, then finish with a sticky glaze for melt-in-the-mouth meat",
            "image": "ribs.jpg",
            "ingredients": [
                "50g light brown soft sugar",
                "2 tbsp smoked paprika",
                "2 tbsp English mustard powder",
                "1 tsp celery salt",
                "1 tsp garlic granules",
                "4 racks baby back pork ribs (about 450g each)",
                "250ml French’s Classic yellow mustard", 
                "150ml cider vinegar",
                "2 tbsp treacle",
                "75g light brown soft sugar",
                "2 tbsp Worcestershire sauce",
                "1-2 tbsp hot chilli sauce",
                "2 tsp hot chilli powder",
            ],
            "category": "American"
        },
        {
            "name": "Huevos rancheros",
            "desc": "Enjoy this Mexican-inspired vegetarian brunch of egg, tomato, avocado, kidney beans and cheese, on top of tortilla. It's spicy, filling and full of flavour",
            "image": "huevos.jpg",
            "ingredients": [
                "2 tbsp olive oil",
                "1 small onion , diced",
                "2 garlic cloves , crushed",
                "400g can red kidney beans , drained and rinsed",
                "1 tsp ground cumin",
                "¼ tsp chilli powder",
                "½ tsp dried oregano",
                "4 eggs",
                "4 small flour tortillas , warmed",
                "1 large tomato , diced",
                "handful pickled jalapeño peppers , roughly chopped",
                "30g cheddar , grated",
                "1 avocado , peeled, de-stoned and diced",
                "1 lime , half juiced, half cut into wedges, to serve",
                "chopped coriander , to serve",
            ],
            "category": "Mexican"
        }
    ];
    try {
        await databaseService.initialize()
        await Recipe.insertMany(recipes)
        console.log('[Database]: Database seeding successful...')
        process.exit(1)
    } catch (e) {
        console.log(`[Database]: Database seeding failed: ${e.message}`)
        process.exit(0)
    }
}

if (process.argv[2] && process.argv[2] === '--category') {
    seedCategories()
} else if (process.argv[2] && process.argv[2] === '--recipe') {
    seedRecipes()
} else {
    console.log('Flag is not available or present!!!');
}

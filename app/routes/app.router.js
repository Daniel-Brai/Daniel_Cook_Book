const express =  require('express');
const router =  express.Router()
const appController = require('../controllers/app.controller')

// routes
router.get('', appController.getHome)

module.exports = router
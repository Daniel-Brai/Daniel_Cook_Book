const express = require('express');
const { env } = require('process')
const expressLayouts = require('express-ejs-layouts');

const routes = require('./app/routes/app.router')
const DatabaseService = require('./database/database.service');

const app = express();
const PORT = env.PORT || 4000

const databaseService = new DatabaseService();

// app middleware
app.use(express.static('app/assets'))
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts)

// app layouts
app.set('view engine', 'ejs')
app.set('views', 'app/views')
app.set('layout', 'layouts/main.ejs')

// app routes 
app.use('/', routes)

app.listen(PORT, () => { 
    console.log(`[Server]: Server is listening on ${PORT}...`)
    databaseService.initialize()
})
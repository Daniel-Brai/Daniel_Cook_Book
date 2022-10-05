const mongoose = require('mongoose');
const { env } = require('node:process')

class DatabaseService {
    async initialize() {
        const connect = await mongoose.connect(
            env.MONGO_URI || 'mongodb://localhost:27017/recipe-blog',
            { useNewUrlParser: true, useUnifiedTopology: true }
        ).then(() => {
            console.log('[Database]: Database initialization successful...')
        }).catch((e) => {
            console.log(`[Database]: Database initialization failed: ${e.msg}...`)
        });
        return connect
    }
}

module.exports = DatabaseService


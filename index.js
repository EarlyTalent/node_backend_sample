// IMPORTING EXPRESS ROUTER AND DEPENDENCIES
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const db = require ('./db')
const router = require('./routes')

// CREATING AN EXPRESS INSTANCE
const app = express()

// HEROKU TO GIVE PORT #
const PORT = process.env.PORT || 3001

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
// AUTHENTICATION FOR SINGLE ROUTE
app.use(cors())
// ALLOWS US TO READ JSON DATA
app.use(express.json())
// SETTING ROUTER PREFIX TO /API
app.use('/api', router)

// CHECKING CONNECTION STATUS
db.on('error', console.error.bind(console, 'MongoDB connection failed...'))
db.once('open', () => {
    console.log('Connected successfully!');
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
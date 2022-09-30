// NPM Packages
const express = require('express')
const dotenv = require("dotenv");
const cors = require('cors')

// DB Connection
const connectDB = require ('./db')

// Import Routes
const blogRouter = require('./routes/blogRoutes')
const commentRouter = require('./routes/commentRoutes')

// ENV Config
dotenv.config({ path: ".env" });

// Express Config
const app = express()

const port = 3001

app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use(express.json())

// Use DB Connection
connectDB()

// Use Routes
app.use('/api', blogRouter)
app.use('/api/comments', commentRouter)

// Run App
app.listen(port, () => console.log(`Server running on ${port}`))
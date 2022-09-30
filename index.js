const express = require('express')
const dotenv = require("dotenv");
const cors = require('cors')

const connectDB = require ('./db')
const blogRouter = require('./routes/blogRoutes')
const commentRouter = require('./routes/commentRoutes')

dotenv.config({ path: ".env" });

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

connectDB()

app.use('/api', blogRouter)
app.use('/api/comments', commentRouter)

app.listen(port, () => console.log(`Server running on ${port}`))
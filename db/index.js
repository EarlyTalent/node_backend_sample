const mongoose = require('mongoose')

// MONGOOSE CONNECTION
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/blog',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true, })
  .catch(e => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
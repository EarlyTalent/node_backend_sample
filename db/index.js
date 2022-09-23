const mongoose = require('mongoose')
// Since its a temporary cluster, i just put the password in plain-text
// In a real environment, a .env would be safer
mongoose
  .connect('mongodb+srv://tirthpatelx:Septive123@cluster0.kffams2.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(e => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
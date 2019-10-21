const mongoose = require('mongoose')
const mongoDB = 'mongodb://localhost:27017/test'
mongoose.connect(mongoDB)
const app = require('./app')

app.listen(3000)

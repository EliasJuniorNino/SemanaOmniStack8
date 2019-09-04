const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const server = express()

mongoose.connect('mongodb+srv://wwe:wwe@cluster0-kdsyf.mongodb.net/oministack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(cors)
server.use(express.json())
server.use(routes)

server.listen(3333)
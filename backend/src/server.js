const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const server = express()

const url = 'mongodb+srv://wwe:wwe@cluster0-kdsyf.mongodb.net/oministack81?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333)
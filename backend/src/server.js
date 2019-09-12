const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const connectedUsers = { }

io.on('connection', socket => {
    const { user } = socket.handshake.query

    connectedUsers[user] = socket.id
})

const url = 'mongodb+srv://wwe:wwe@cluster0-kdsyf.mongodb.net/oministack81?retryWrites=true&w=majority'
mongoose.connect(url, {
    useNewUrlParser: true
})

app.use((req, res, next) => {
    req.io = io
    req.connectedUsers = connectedUsers

    return next()
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)
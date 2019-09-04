const axios = require('axios')
const Dev = require('../models/Dev')

module.exports = {
    async index(req, res){
        const { user } = req.headers

        const loggedDev = await Dev.findById(user)

        const users = await Dev.find({
            $and: [
                // usuarios que o id não sao igual a user
                { _id: { $ne: user } },  // not equal
                { _id: { $nin: loggedDev.likes } },  // not in 
                { _id: { $nin: loggedDev.dislikes } },  // not in 
            ]
        })

        return res.json(users)
    },

    async store(req, res){
        console.log(req.body)
        const { username } = req.body

        const userExist = await Dev.findOne({ user: username })

        if (userExist){
            return res.json(userExist)
        }

        const response = await axios.get(`https://api.github.com/users/${username}`)

        const { name, bio, avatar_url: avatar } = response.data

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        })

        return res.json(dev)
    }
}